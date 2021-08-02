goog.provide('shadow.markup.react.impl.css');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('shadow.markup.react.impl.interop');
goog.require('shadow.markup.css.impl.gen');
goog.require('shadow.markup.env');
goog.require('shadow.dom');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof shadow !== 'undefined') && (typeof shadow.markup !== 'undefined') && (typeof shadow.markup.react !== 'undefined') && (typeof shadow.markup.react.impl !== 'undefined') && (typeof shadow.markup.react.impl.css !== 'undefined') && (typeof shadow.markup.react.impl.css.env_ref !== 'undefined')){
} else {
shadow.markup.react.impl.css.env_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.markup !== 'undefined') && (typeof shadow.markup.react !== 'undefined') && (typeof shadow.markup.react.impl !== 'undefined') && (typeof shadow.markup.react.impl.css !== 'undefined') && (typeof shadow.markup.react.impl.css.active_elements_ref !== 'undefined')){
} else {
shadow.markup.react.impl.css.active_elements_ref = cljs.core.volatile_BANG_(cljs.core.sorted_map());
}
if((typeof shadow !== 'undefined') && (typeof shadow.markup !== 'undefined') && (typeof shadow.markup.react !== 'undefined') && (typeof shadow.markup.react.impl !== 'undefined') && (typeof shadow.markup.react.impl.css !== 'undefined') && (typeof shadow.markup.react.impl.css.style_cache_ref !== 'undefined')){
} else {
shadow.markup.react.impl.css.style_cache_ref = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.markup.react.impl.css.get_rules_for_el = (function shadow$markup$react$impl$css$get_rules_for_el(env,el){
var name = shadow.markup.css.impl.gen.el_selector(el);
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.markup.react.impl.css.style_cache_ref),name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var css = shadow.markup.css.impl.gen.css_rules_for_el(env,el);
shadow.markup.react.impl.css.style_cache_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.markup.react.impl.css.style_cache_ref.cljs$core$IDeref$_deref$arity$1(null),name,css));

return css;
}
});
shadow.markup.react.impl.css.style_container = (function shadow$markup$react$impl$css$style_container(){
var styles_container_id = "shadow-markup-styles";
var or__4126__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(styles_container_id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var node = (function (){var G__27440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),styles_container_id,new cljs.core.Keyword(null,"type","type",1174270348),"text/css"], null)], null);
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__27440) : shadow.dom.build.call(null,G__27440));
})();
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(document.head,node);

return node;
}
});
/**
 * inserts rules for a single el using sheet.insertRule
 */
shadow.markup.react.impl.css.insert_styles_BANG_ = (function shadow$markup$react$impl$css$insert_styles_BANG_(el){
var container = shadow.markup.react.impl.css.style_container();
var n = container.sheet.rules.length;
var rules = shadow.markup.react.impl.css.get_rules_for_el(cljs.core.deref(shadow.markup.react.impl.css.env_ref),el);
var n__4613__auto__ = cljs.core.count(rules);
var i = (0);
while(true){
if((i < n__4613__auto__)){
container.sheet.insertRule(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rules,i),(n + i));

var G__27456 = (i + (1));
i = G__27456;
continue;
} else {
return null;
}
break;
}
});
/**
 * generates a css string and replace the textContent of the <style> container
 */
shadow.markup.react.impl.css.regenerate_styles_BANG_ = (function shadow$markup$react$impl$css$regenerate_styles_BANG_(){
var env = cljs.core.deref(shadow.markup.react.impl.css.env_ref);
var styles = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__27441_SHARP_){
return shadow.markup.react.impl.css.get_rules_for_el(env,p1__27441_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(cljs.core.deref(shadow.markup.react.impl.css.active_elements_ref))], 0)));
var container = shadow.markup.react.impl.css.style_container();
return (container.textContent = styles);
});
shadow.markup.react.impl.css.set_env_BANG_ = (function shadow$markup$react$impl$css$set_env_BANG_(new_env){
cljs.core.vreset_BANG_(shadow.markup.react.impl.css.env_ref,new_env);

cljs.core.vreset_BANG_(shadow.markup.react.impl.css.style_cache_ref,cljs.core.PersistentArrayMap.EMPTY);

if(cljs.core.empty_QMARK_(cljs.core.deref(shadow.markup.react.impl.css.active_elements_ref))){
return null;
} else {
return shadow.markup.react.impl.css.regenerate_styles_BANG_();
}
});
shadow.markup.react.impl.css.inject_rules_BANG_ = (function shadow$markup$react$impl$css$inject_rules_BANG_(el){
var selector = shadow.markup.css.impl.gen.el_selector(el);
shadow.markup.react.impl.css.style_cache_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shadow.markup.react.impl.css.style_cache_ref.cljs$core$IDeref$_deref$arity$1(null),selector));

shadow.markup.react.impl.css.active_elements_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.markup.react.impl.css.active_elements_ref.cljs$core$IDeref$_deref$arity$1(null),selector,el));

if(shadow.markup.env.DEBUG){
return shadow.markup.react.impl.css.regenerate_styles_BANG_();
} else {
try{return shadow.markup.react.impl.css.insert_styles_BANG_(el);
}catch (e27443){var e = e27443;
console.error("insert-styles failed",e,el);

return shadow.markup.react.impl.css.regenerate_styles_BANG_();
}}
});
shadow.markup.react.impl.css.check_conflicting_props_BANG_ = (function shadow$markup$react$impl$css$check_conflicting_props_BANG_(p__27445){
var map__27447 = p__27445;
var map__27447__$1 = (((((!((map__27447 == null))))?(((((map__27447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27447):map__27447);
var props = map__27447__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27447__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var className = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27447__$1,new cljs.core.Keyword(null,"className","className",-1983287057));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27447__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var total = (function (){var G__27450 = (0);
var G__27450__$1 = (cljs.core.truth_(class$)?(G__27450 + (1)):G__27450);
var G__27450__$2 = (cljs.core.truth_(className)?(G__27450__$1 + (1)):G__27450__$1);
if(cljs.core.truth_(classes)){
return (G__27450__$2 + (1));
} else {
return G__27450__$2;
}
})();
if((total > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("conflicting props, can only have one of: class className classes",props);
} else {
return null;
}
});
shadow.markup.react.impl.css.merge_props_and_class = (function shadow$markup$react$impl$css$merge_props_and_class(props,class$){
if(shadow.markup.env.DEBUG){
shadow.markup.react.impl.css.check_conflicting_props_BANG_(props);
} else {
}

var class_from_props = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto__ = new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var classes = temp__5735__auto__;
if(cljs.core.map_QMARK_(classes)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (key){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(classes,key);
}),cljs.core.keys(classes))));
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,classes));
}
} else {
return null;
}
}
}
})();
var className = (((class_from_props == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_from_props)].join(''));
return shadow.markup.react.impl.interop.convert_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"classes","classes",2037804510)], 0)),new cljs.core.Keyword(null,"className","className",-1983287057),className));
});
shadow.markup.react.impl.css.styled_element_invoke = (function shadow$markup$react$impl$css$styled_element_invoke(el,props,args){
if(cljs.core.not(el.injected_QMARK_)){
shadow.markup.react.impl.css.inject_rules_BANG_(el);

(el.injected_QMARK_ = true);
} else {
}

var css_sel = shadow.markup.css.impl.gen.el_selector(el);
var el_type = shadow.markup.css.impl.gen.el_type(el);
if(cljs.core.map_QMARK_(props)){
args.unshift(shadow.markup.react.impl.css.merge_props_and_class(props,css_sel));
} else {
args.unshift(props);

args.unshift(({"className": css_sel}));
}

args.unshift(el_type);

return module$node_modules$react$index.createElement.apply(null,args);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {shadow.markup.css.impl.gen.IElement}
*/
shadow.markup.react.impl.css.StyledElement = (function (el_type,css_sel,style_fn,injected_QMARK_){
this.el_type = el_type;
this.css_sel = css_sel;
this.style_fn = style_fn;
this.injected_QMARK_ = injected_QMARK_;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.el_type;
}));

(shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_selector$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.css_sel;
}));

(shadow.markup.react.impl.css.StyledElement.prototype.shadow$markup$css$impl$gen$IElement$el_root$arity$2 = (function (_,env){
var self__ = this;
var ___$1 = this;
return (self__.style_fn.cljs$core$IFn$_invoke$arity$1 ? self__.style_fn.cljs$core$IFn$_invoke$arity$1(env) : self__.style_fn.call(null,env));
}));

(shadow.markup.react.impl.css.StyledElement.prototype.call = (function (unused__9542__auto__){
var self__ = this;
var self__ = this;
var G__27455 = (arguments.length - (1));
switch (G__27455) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
case (3):
return self__.cljs$core$IFn$_invoke$arity$3((arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (4):
return self__.cljs$core$IFn$_invoke$arity$4((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case (5):
return self__.cljs$core$IFn$_invoke$arity$5((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case (6):
return self__.cljs$core$IFn$_invoke$arity$6((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case (7):
return self__.cljs$core$IFn$_invoke$arity$7((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case (8):
return self__.cljs$core$IFn$_invoke$arity$8((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case (9):
return self__.cljs$core$IFn$_invoke$arity$9((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case (10):
return self__.cljs$core$IFn$_invoke$arity$10((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case (11):
return self__.cljs$core$IFn$_invoke$arity$11((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case (12):
return self__.cljs$core$IFn$_invoke$arity$12((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case (13):
return self__.cljs$core$IFn$_invoke$arity$13((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case (14):
return self__.cljs$core$IFn$_invoke$arity$14((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case (15):
return self__.cljs$core$IFn$_invoke$arity$15((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case (16):
return self__.cljs$core$IFn$_invoke$arity$16((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case (17):
return self__.cljs$core$IFn$_invoke$arity$17((arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(shadow.markup.react.impl.css.StyledElement.prototype.apply = (function (self__,args27454){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27454)));
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$1 = (function (props){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$2 = (function (props,c1){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$3 = (function (props,c1,c2){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$4 = (function (props,c1,c2,c3){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$5 = (function (props,c1,c2,c3,c4){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$6 = (function (props,c1,c2,c3,c4,c5){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$7 = (function (props,c1,c2,c3,c4,c5,c6){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$8 = (function (props,c1,c2,c3,c4,c5,c6,c7){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$9 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$10 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$11 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$12 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$13 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$14 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$15 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$16 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15]);
}));

(shadow.markup.react.impl.css.StyledElement.prototype.cljs$core$IFn$_invoke$arity$17 = (function (props,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16){
var self__ = this;
var el = this;
return shadow.markup.react.impl.css.styled_element_invoke(el,props,[c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16]);
}));

(shadow.markup.react.impl.css.StyledElement.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el-type","el-type",1749720214,null),new cljs.core.Symbol(null,"css-sel","css-sel",-1804652482,null),new cljs.core.Symbol(null,"style-fn","style-fn",-965157553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"injected?","injected?",1729313068,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(shadow.markup.react.impl.css.StyledElement.cljs$lang$type = true);

(shadow.markup.react.impl.css.StyledElement.cljs$lang$ctorStr = "shadow.markup.react.impl.css/StyledElement");

(shadow.markup.react.impl.css.StyledElement.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.markup.react.impl.css/StyledElement");
}));

/**
 * Positional factory function for shadow.markup.react.impl.css/StyledElement.
 */
shadow.markup.react.impl.css.__GT_StyledElement = (function shadow$markup$react$impl$css$__GT_StyledElement(el_type,css_sel,style_fn,injected_QMARK_){
return (new shadow.markup.react.impl.css.StyledElement(el_type,css_sel,style_fn,injected_QMARK_));
});


//# sourceMappingURL=shadow.markup.react.impl.css.js.map
