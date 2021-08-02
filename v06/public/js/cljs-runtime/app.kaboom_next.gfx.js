goog.provide('app.kaboom_next.gfx');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('clojure.test.check.generators');
goog.require('cljs.spec.alpha');
app.kaboom_next.gfx.vert_template = "\n  attribute vec3 a_pos;\n  attribute vec2 a_uv;\n  attribute vec4 a_color;\n\n  varying vec3 v_pos;\n  varying vec2 v_uv;\n  varying vec4 v_color;\n\n  vec4 def_vert() {\n  \treturn vec4(a_pos, 1.0);\n  }\n\n  {{user}}\n\n  void main() {\n  \tvec4 pos = vert(a_pos, a_uv, a_color);\n  \tv_pos = a_pos;\n  \tv_uv = a_uv;\n  \tv_color = a_color;\n  \tgl_Position = pos;\n  }\n  ";
app.kaboom_next.gfx.frag_template = "\n  precision mediump float;\n\n  varying vec3 v_pos;\n  varying vec2 v_uv;\n  varying vec4 v_color;\n\n  uniform sampler2D u_tex;\n\n  vec4 def_frag() {\n  \treturn v_color * texture2D(u_tex, v_uv);\n  }\n\n  {{user}}\n\n  void main() {\n  \tgl_FragColor = frag(v_pos, v_uv, v_color, u_tex);\n  \tif (gl_FragColor.a == 0.0) {\n  \t\tdiscard;\n  \t}\n  }\n  ";
app.kaboom_next.gfx.vert = "vec4 vert(vec3 pos, vec2 uv, vec4 color) {\n\t    return def_vert();\n }";
app.kaboom_next.gfx.frag = "vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n\t    return def_frag();\n   }";
app.kaboom_next.gfx.clear = (function app$kaboom_next$gfx$clear(){
return console.clear();
});
app.kaboom_next.gfx.log = (function app$kaboom_next$gfx$log(val){
app.kaboom_next.gfx.clear();

return console.log(val);
});
cljs.spec.alpha.def_impl(new cljs.core.Keyword("color","r","color/r",-503548893),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("color","g","color/g",1903219798),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("color","b","color/b",1317380787),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("color","a","color/a",-1683739471),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboom-next.gfx","color","app.kaboom-next.gfx/color",-1112635174),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","r","color/r",-503548893),new cljs.core.Keyword("color","g","color/g",1903219798),new cljs.core.Keyword("color","b","color/b",1317380787)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","a","color/a",-1683739471)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","r","color/r",-503548893),new cljs.core.Keyword("color","g","color/g",1903219798),new cljs.core.Keyword("color","b","color/b",1317380787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","a","color/a",-1683739471)], null),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__61155){
return cljs.core.map_QMARK_(G__61155);
}),(function (G__61155){
return cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"r","r",-471384190));
}),(function (G__61155){
return cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"g","g",1738089905));
}),(function (G__61155){
return cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"b","b",1482224470));
})], null),(function (G__61155){
return ((cljs.core.map_QMARK_(G__61155)) && (cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"r","r",-471384190))) && (cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"g","g",1738089905))) && (cljs.core.contains_QMARK_(G__61155,new cljs.core.Keyword(null,"b","b",1482224470))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","r","color/r",-503548893),new cljs.core.Keyword("color","g","color/g",1903219798),new cljs.core.Keyword("color","b","color/b",1317380787)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("color","a","color/a",-1683739471)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"r","r",-471384190))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"g","g",1738089905))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"b","b",1482224470)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("gfx","clearColor","gfx/clearColor",213995816),new cljs.core.Keyword("app.kaboom-next.gfx","color","app.kaboom-next.gfx/color",-1112635174),new cljs.core.Keyword("app.kaboom-next.gfx","color","app.kaboom-next.gfx/color",-1112635174));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("gfx","scale","gfx/scale",-230333008),new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null),cljs.core.number_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("gfx","texFilter","gfx/texFilter",867651541),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nearest","nearest",1176353890),"null","linear","null","nearest","null",new cljs.core.Keyword(null,"linear","linear",872268697),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"nearest","nearest",1176353890),null,"linear",null,"nearest",null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("app.kaboom-next.gfx","gfx","app.kaboom-next.gfx/gfx",2097559629),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gfx","clearColor","gfx/clearColor",213995816),new cljs.core.Keyword("gfx","scale","gfx/scale",-230333008),new cljs.core.Keyword("gfx","texFilter","gfx/texFilter",867651541)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gfx","clearColor","gfx/clearColor",213995816),new cljs.core.Keyword("gfx","scale","gfx/scale",-230333008),new cljs.core.Keyword("gfx","texFilter","gfx/texFilter",867651541)], null),null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__61156){
return cljs.core.map_QMARK_(G__61156);
}),(function (G__61156){
return cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"clearColor","clearColor",213884569));
}),(function (G__61156){
return cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"scale","scale",-230427353));
}),(function (G__61156){
return cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"texFilter","texFilter",867426624));
})], null),(function (G__61156){
return ((cljs.core.map_QMARK_(G__61156)) && (cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"clearColor","clearColor",213884569))) && (cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"scale","scale",-230427353))) && (cljs.core.contains_QMARK_(G__61156,new cljs.core.Keyword(null,"texFilter","texFilter",867426624))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("gfx","clearColor","gfx/clearColor",213995816),new cljs.core.Keyword("gfx","scale","gfx/scale",-230333008),new cljs.core.Keyword("gfx","texFilter","gfx/texFilter",867651541)], null),null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clearColor","clearColor",213884569),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"texFilter","texFilter",867426624)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"clearColor","clearColor",213884569))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"scale","scale",-230427353))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"texFilter","texFilter",867426624)))], null),null])));
app.kaboom_next.gfx.canvas = goog.dom.createElement("canvas");
app.kaboom_next.gfx.gl = app.kaboom_next.gfx.canvas.getContext("webgl",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true,new cljs.core.Keyword(null,"depth","depth",1768663640),true,new cljs.core.Keyword(null,"stencil","stencil",-1049110946),true,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),true,new cljs.core.Keyword(null,"preserveDrawingBuffer","preserveDrawingBuffer",187464949),true], null)));
if((typeof app !== 'undefined') && (typeof app.kaboom_next !== 'undefined') && (typeof app.kaboom_next.gfx !== 'undefined') && (typeof app.kaboom_next.gfx.tex_filter !== 'undefined')){
} else {
app.kaboom_next.gfx.tex_filter = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61157 = cljs.core.get_global_hierarchy;
return (fexpr__61157.cljs$core$IFn$_invoke$arity$0 ? fexpr__61157.cljs$core$IFn$_invoke$arity$0() : fexpr__61157.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom-next.gfx","tex-filter"),(function (_,filter){
return filter;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom_next.gfx.tex_filter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nearest","nearest",1176353890),(function (gl,_){
return gl.NEAREST;
}));
app.kaboom_next.gfx.tex_filter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (gl,_){
return gl.LINEAR;
}));
app.kaboom_next.gfx.tex_filter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (gl,_){
return app.kaboom_next.gfx.tex_filter.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.Keyword(null,"nearest","nearest",1176353890));
}));
if((typeof app !== 'undefined') && (typeof app.kaboom_next !== 'undefined') && (typeof app.kaboom_next.gfx !== 'undefined') && (typeof app.kaboom_next.gfx.shader_type !== 'undefined')){
} else {
app.kaboom_next.gfx.shader_type = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61158 = cljs.core.get_global_hierarchy;
return (fexpr__61158.cljs$core$IFn$_invoke$arity$0 ? fexpr__61158.cljs$core$IFn$_invoke$arity$0() : fexpr__61158.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom-next.gfx","shader-type"),(function (_,type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom_next.gfx.shader_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vertex","vertex",1562146351),(function (gl,_){
return gl.VERTEX_SHADER;
}));
app.kaboom_next.gfx.shader_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"frag","frag",1474317943),(function (gl,_){
return gl.FRAGMENT_SHADER;
}));
app.kaboom_next.gfx.shader_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (gl,_){
return app.kaboom_next.gfx.shader_type.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.Keyword(null,"vertex","vertex",1562146351));
}));
if((typeof app !== 'undefined') && (typeof app.kaboom_next !== 'undefined') && (typeof app.kaboom_next.gfx !== 'undefined') && (typeof app.kaboom_next.gfx.create_shader !== 'undefined')){
} else {
app.kaboom_next.gfx.create_shader = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__61159 = cljs.core.get_global_hierarchy;
return (fexpr__61159.cljs$core$IFn$_invoke$arity$0 ? fexpr__61159.cljs$core$IFn$_invoke$arity$0() : fexpr__61159.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboom-next.gfx","create-shader"),(function (_,type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboom_next.gfx.create_shader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vertex","vertex",1562146351),(function (gl,_){
return gl.createShader(app.kaboom_next.gfx.shader_type.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.Keyword(null,"vertex","vertex",1562146351)));
}));
app.kaboom_next.gfx.create_shader.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"frag","frag",1474317943),(function (gl,_){
return gl.createShader(app.kaboom_next.gfx.shader_type.cljs$core$IFn$_invoke$arity$2(gl,new cljs.core.Keyword(null,"frag","frag",1474317943)));
}));
app.kaboom_next.gfx.vert_shader = app.kaboom_next.gfx.create_shader.cljs$core$IFn$_invoke$arity$2(app.kaboom_next.gfx.gl,new cljs.core.Keyword(null,"vertex","vertex",1562146351));
app.kaboom_next.gfx.frag_shader = app.kaboom_next.gfx.create_shader.cljs$core$IFn$_invoke$arity$2(app.kaboom_next.gfx.gl,new cljs.core.Keyword(null,"frag","frag",1474317943));
app.kaboom_next.gfx.fcode = clojure.string.replace(app.kaboom_next.gfx.frag_template,"{{user}}",app.kaboom_next.gfx.frag);
app.kaboom_next.gfx.vcode = clojure.string.replace(app.kaboom_next.gfx.vert_template,"{{user}}",app.kaboom_next.gfx.vert);
app.kaboom_next.gfx.gl.shaderSource(app.kaboom_next.gfx.vert_shader,app.kaboom_next.gfx.vcode);
app.kaboom_next.gfx.gl.shaderSource(app.kaboom_next.gfx.frag_shader,app.kaboom_next.gfx.fcode);
app.kaboom_next.gfx.gl.compileShader(app.kaboom_next.gfx.vert_shader);
app.kaboom_next.gfx.gl.compileShader(app.kaboom_next.gfx.frag_shader);
app.kaboom_next.gfx.id = app.kaboom_next.gfx.gl.createProgram();
app.kaboom_next.gfx.gl.attachShader(app.kaboom_next.gfx.id,app.kaboom_next.gfx.vert_shader);
app.kaboom_next.gfx.gl.attachShader(app.kaboom_next.gfx.id,app.kaboom_next.gfx.frag_shader);
app.kaboom_next.gfx.gl.bindAttribLocation(app.kaboom_next.gfx.id,(0),"a_pos");
app.kaboom_next.gfx.gl.bindAttribLocation(app.kaboom_next.gfx.id,(1),"a_uv");
app.kaboom_next.gfx.gl.bindAttribLocation(app.kaboom_next.gfx.id,(2),"a_color");
app.kaboom_next.gfx.gl.linkProgram(app.kaboom_next.gfx.id);
app.kaboom_next.gfx.bind = (function app$kaboom_next$gfx$bind(gl,id){
return gl.useProgram(id);
});
app.kaboom_next.gfx.unbind = (function app$kaboom_next$gfx$unbind(gl){
return gl.useProgram(null);
});
app.kaboom_next.gfx.bind_attribs = (function app$kaboom_next$gfx$bind_attribs(gl){
return null;
});
app.kaboom_next.gfx.send = (function app$kaboom_next$gfx$send(gl,uniform){
return null;
});
app.kaboom_next.gfx.make_program = (function app$kaboom_next$gfx$make_program(vert,frag){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vert","vert",-360932977),vert,new cljs.core.Keyword(null,"frag","frag",1474317943),frag], null);
});
app.kaboom_next.gfx.gfx_init = (function app$kaboom_next$gfx$gfx_init(gl,gconf){
return null;
});

//# sourceMappingURL=app.kaboom_next.gfx.js.map
