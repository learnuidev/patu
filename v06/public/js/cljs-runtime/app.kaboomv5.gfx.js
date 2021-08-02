goog.provide('app.kaboomv5.gfx');
goog.require('cljs.core');
goog.require('app.kaboomv5.math.core');
goog.require('app.kaboomv5.math.matrix');
goog.require('app.kaboomv5.math.vector');
goog.require('app.kaboomv5.app.state');
goog.require('app.kaboomv5.gl');
goog.require('clojure.string');
app.kaboomv5.gfx.def_origin = new cljs.core.Keyword(null,"topleft","topleft",-2065338139);
app.kaboomv5.gfx.queue_count = (65536);
app.kaboomv5.gfx.bg_grid_size = (64);
app.kaboomv5.gfx.stride = (9);
app.kaboomv5.gfx.vert_template = "\n  attribute vec3 a_pos;\n  attribute vec2 a_uv;\n  attribute vec4 a_color;\n\n  varying vec3 v_pos;\n  varying vec2 v_uv;\n  varying vec4 v_color;\n\n  vec4 def_vert() {\n  \t return vec4(a_pos, 1.0);\n  }\n\n  {{user}}\n\n  void main() {\n  \t vec4 pos = vert(a_pos, a_uv, a_color);\n  \t v_pos = a_pos;\n  \t v_uv = a_uv;\n  \t v_color = a_color;\n  \t gl_Position = pos;\n  }";
app.kaboomv5.gfx.frag_template = "\n  precision mediump float;\n\n  varying vec3 v_pos;\n  varying vec2 v_uv;\n  varying vec4 v_color;\n\n  uniform sampler2D u_tex;\n\n  vec4 def_frag() {\n  \treturn v_color * texture2D(u_tex, v_uv);\n  }\n\n  {{user}}\n\n  void main() {\n  \tgl_FragColor = frag(v_pos, v_uv, v_color, u_tex);\n  \tif (gl_FragColor.a == 0.0) {\n  \t\tdiscard;\n  \t}\n  }";
app.kaboomv5.gfx.default_vert = "\n  vec4 vert(vec3 pos, vec2 uv, vec4 color) {\n  \t return def_vert();\n  }";
app.kaboomv5.gfx.default_frag = "\n  vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {\n    return def_frag();\n  }";
app.kaboomv5.gfx.gfx_init = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ibuf","ibuf",801056512),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"def-tex","def-tex",129738309),new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274),new cljs.core.Keyword(null,"cur-uniform","cur-uniform",1648937894),new cljs.core.Keyword(null,"draw-calls","draw-calls",-95870389),new cljs.core.Keyword(null,"bg-tex","bg-tex",1973150635),new cljs.core.Keyword(null,"prog","prog",-342988015),new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134),new cljs.core.Keyword(null,"last-draw-calls","last-draw-calls",1483155831),new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581),new cljs.core.Keyword(null,"transform-stack","transform-stack",-21072581),new cljs.core.Keyword(null,"vbuf","vbuf",303950747)],[(0),(app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0 ? app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0() : app.kaboomv5.math.core.mat4.call(null)),null,null,cljs.core.PersistentArrayMap.EMPTY,(0),null,(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,(0),null,cljs.core.PersistentVector.EMPTY,(0)]);
app.kaboomv5.gfx.gfx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.kaboomv5.gfx.gfx_init);
app.kaboomv5.gfx.init_gl = (function app$kaboomv5$gfx$init_gl(gl,gl_ctx){
return cljs.core.reset_BANG_(gl,gl_ctx);
});
app.kaboomv5.gfx.height = (function app$kaboomv5$gfx$height(){
return (new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).drawingBufferHeight / cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(1)));
});
app.kaboomv5.gfx.width = (function app$kaboomv5$gfx$width(){
return (new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).drawingBufferWidth / cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),(1)));
});
app.kaboomv5.gfx.center = (function app$kaboomv5$gfx$center(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(app.kaboomv5.gfx.width() / (2)),(app.kaboomv5.gfx.height() / (2))], null);
});
app.kaboomv5.gfx.scale = (function app$kaboomv5$gfx$scale(){
return (1);
});
app.kaboomv5.gfx.clear_color = (function app$kaboomv5$gfx$clear_color(gl,r,b,g,a){
return gl.clearColor(r,b,g,a);
});
app.kaboomv5.gfx.draw_calls = (function app$kaboomv5$gfx$draw_calls(){
return new cljs.core.Keyword(null,"last-draw-calls","last-draw-calls",1483155831).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx));
});
app.kaboomv5.gfx.push_matrix = (function app$kaboomv5$gfx$push_matrix(m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),m);
});
app.kaboomv5.gfx.push_translate = (function app$kaboomv5$gfx$push_translate(pv2){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.seq(pv2);
if(and__4115__auto__){
return new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv5.math.matrix.translate(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),pv2));
} else {
return null;
}
});
app.kaboomv5.gfx.push_scale = (function app$kaboomv5$gfx$push_scale(p__26639){
var map__26640 = p__26639;
var map__26640__$1 = (((((!((map__26640 == null))))?(((((map__26640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26640):map__26640);
var scale = map__26640__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26640__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26640__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(((cljs.core.seq(scale)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),x)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),y)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv5.math.matrix.scale(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),scale));
} else {
return null;
}
});
app.kaboomv5.gfx.push_rot_x = (function app$kaboomv5$gfx$push_rot_x(num){
if(cljs.core.truth_(num)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv5.math.matrix.rot_x(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),num));
} else {
return null;
}
});
app.kaboomv5.gfx.push_rot_y = (function app$kaboomv5$gfx$push_rot_y(num){
if(cljs.core.truth_(num)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv5.math.matrix.rot_y(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),num));
} else {
return null;
}
});
app.kaboomv5.gfx.push_rot_z = (function app$kaboomv5$gfx$push_rot_z(num){
if(cljs.core.truth_(num)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv5.math.matrix.rot_z(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),num));
} else {
return null;
}
});
app.kaboomv5.gfx.push_transform = (function app$kaboomv5$gfx$push_transform(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.update,new cljs.core.Keyword(null,"transform-stack","transform-stack",-21072581),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))], 0));
});
app.kaboomv5.gfx.pop_transform = (function app$kaboomv5$gfx$pop_transform(){
var ts = new cljs.core.Keyword(null,"transform-stack","transform-stack",-21072581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx));
if(cljs.core.seq(ts)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform","transform",1381301764),cljs.core.last(ts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform-stack","transform-stack",-21072581),cljs.core.butlast(ts)], 0));
} else {
return null;
}
});
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.gfx !== 'undefined') && (typeof app.kaboomv5.gfx.get_info_log !== 'undefined')){
} else {
app.kaboomv5.gfx.get_info_log = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26643 = cljs.core.get_global_hierarchy;
return (fexpr__26643.cljs$core$IFn$_invoke$arity$0 ? fexpr__26643.cljs$core$IFn$_invoke$arity$0() : fexpr__26643.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboomv5.gfx","get-info-log"),(function (gl,id,type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboomv5.gfx.get_info_log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (gl,id,_){
return gl.getProgramInfoLog(id);
}));
app.kaboomv5.gfx.tex_filter = (function app$kaboomv5$gfx$tex_filter(gl){
var G__26644 = new cljs.core.Keyword(null,"tex-filter","tex-filter",-731776135).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"tex-filter","tex-filter",-731776135)], null)));
var G__26644__$1 = (((G__26644 instanceof cljs.core.Keyword))?G__26644.fqn:null);
switch (G__26644__$1) {
case "linear":
return gl.LINEAR;

break;
case "nearest":
return gl.NEAREST;

break;
default:
return gl.NEAREST;

}
});
app.kaboomv5.gfx.create_texture = (function app$kaboomv5$gfx$create_texture(gl){
return gl.createTexture();
});
app.kaboomv5.gfx.power_of_two = (function app$kaboomv5$gfx$power_of_two(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rem((Math.log(n) / Math.log((2))),(1)));
});
cljs.core.rem(Math.log((2)),(1));
app.kaboomv5.gfx.make_texture = (function app$kaboomv5$gfx$make_texture(gl,data){
var id = app.kaboomv5.gfx.create_texture(gl);
var wrap = ((((app.kaboomv5.gfx.power_of_two(data.width)) && (app.kaboomv5.gfx.power_of_two(data.height))))?gl.REPEAT:gl.CLAMP_TO_EDGE);
gl.bindTexture(gl.TEXTURE_2D,id);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,data);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,app.kaboomv5.gfx.tex_filter(gl));

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,app.kaboomv5.gfx.tex_filter(gl));

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,wrap);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,wrap);

gl.bindTexture(gl.TEXTURE_2D,null);

return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"width","width",-384071477),data.width,new cljs.core.Keyword(null,"height","height",1025178622),data.height,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,id);
}),new cljs.core.Keyword(null,"unbind","unbind",716905720),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
})], null));
});
app.kaboomv5.gfx.make_tex = (function app$kaboomv5$gfx$make_tex(data){
return app.kaboomv5.gfx.make_texture(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),data);
});
app.kaboomv5.gfx.ex_data2 = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128),(255),(190),(190),(190),(255),(190),(190),(190),(255),(128),(128),(128),(255)], null);
app.kaboomv5.gfx.bg_tex = (function app$kaboomv5$gfx$bg_tex(var_args){
var G__26647 = arguments.length;
switch (G__26647) {
case 0:
return app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128),(255),(190),(190),(190),(255),(190),(190),(190),(255),(128),(128),(128),(255)], null));
}));

(app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$1 = (function (data){
return app.kaboomv5.gfx.make_tex((new ImageData((new Uint8ClampedArray(cljs.core.clj__GT_js(data))),(2),(2))));
}));

(app.kaboomv5.gfx.bg_tex.cljs$lang$maxFixedArity = 1);

app.kaboomv5.gfx.empty_tex = (function app$kaboomv5$gfx$empty_tex(var_args){
var G__26649 = arguments.length;
switch (G__26649) {
case 0:
return app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255),(255)], null));
}));

(app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$1 = (function (data){
console.log("DATA: ",data);

return app.kaboomv5.gfx.make_tex((new ImageData((new Uint8ClampedArray(cljs.core.clj__GT_js(data))),(1),(1))));
}));

(app.kaboomv5.gfx.empty_tex.cljs$lang$maxFixedArity = 1);

app.kaboomv5.gfx.make_font = (function app$kaboomv5$gfx$make_font(tex,gw,gh,chars){
var cols = (tex.width / gw);
var rows = (tex.height / gh);
var qw = (1.0 / cols);
var qh = (1.0 / rows);
var chars_map = cljs.core.reduce_kv((function (font_map,index,char$){
var prop = (function (){var G__26650 = (cljs.core.rem(index,cols) * qw);
var G__26651 = (Math.floor((index / cols)) * qh);
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26650,G__26651) : app.kaboomv5.math.core.vec2.call(null,G__26650,G__26651));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(font_map,char$,prop);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(chars,""));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tex","tex",1307057959),tex,new cljs.core.Keyword(null,"qw","qw",-1017660824),qw,new cljs.core.Keyword(null,"qh","qh",453269216),qh,new cljs.core.Keyword(null,"map","map",1371690461),chars_map], null);
});
app.kaboomv5.gfx.attach_shader = (function app$kaboomv5$gfx$attach_shader(gl,id,shader){
return gl.attachShader(id,shader);
});
app.kaboomv5.gfx.validate_program = (function app$kaboomv5$gfx$validate_program(pos){
return new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)).validateProgram(new cljs.core.Keyword("program","id","program/id",-792212528).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),cljs.core.name(pos));
});
app.kaboomv5.gfx.attr_loc = (function app$kaboomv5$gfx$attr_loc(pos){
return app.kaboomv5.gl.get_attrib_location(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),new cljs.core.Keyword("program","id","program/id",-792212528).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),cljs.core.name(pos));
});
app.kaboomv5.gfx.make_program = (function app$kaboomv5$gfx$make_program(gl){
var vert_shader = app.kaboomv5.gl.reg_shader(gl,clojure.string.replace(app.kaboomv5.gfx.vert_template,"{{user}}",app.kaboomv5.gfx.default_vert),gl.VERTEX_SHADER);
var frag_shader = app.kaboomv5.gl.reg_shader(gl,clojure.string.replace(app.kaboomv5.gfx.frag_template,"{{user}}",app.kaboomv5.gfx.default_frag),gl.FRAGMENT_SHADER);
var id = app.kaboomv5.gl.create_program(gl);
app.kaboomv5.gl.attach_shader(gl,id,vert_shader);

app.kaboomv5.gl.attach_shader(gl,id,frag_shader);

app.kaboomv5.gl.bind_attrib_location(gl,id,(0),"a_pos");

app.kaboomv5.gl.bind_attrib_location(gl,id,(1),"a_normal");

app.kaboomv5.gl.bind_attrib_location(gl,id,(2),"a_uv");

app.kaboomv5.gl.bind_attrib_location(gl,id,(3),"a_color");

app.kaboomv5.gl.link_program(gl,id);

var warning_msg = app.kaboomv5.gfx.get_info_log.cljs$core$IFn$_invoke$arity$3(gl,id,new cljs.core.Keyword(null,"program","program",781564284));
if(cljs.core.seq(warning_msg)){
throw Error(warning_msg);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword("program","id","program/id",-792212528),id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581),id);

return id;
});
app.kaboomv5.gfx.make_program_alt = (function app$kaboomv5$gfx$make_program_alt(gl){
var vert_shader = app.kaboomv5.gl.create_shader(gl,gl.VERTEX_SHADER);
var vert_template = clojure.string.replace(app.kaboomv5.gfx.vert_template,"{{user}}",app.kaboomv5.gfx.default_vert);
var frag_shader = app.kaboomv5.gl.create_shader(gl,gl.FRAGMENT_SHADER);
var frag_template = clojure.string.replace(app.kaboomv5.gfx.frag_template,"{{user}}",app.kaboomv5.gfx.default_frag);
var id = app.kaboomv5.gl.create_program(gl);
app.kaboomv5.gl.compile_shader(gl,vert_template,vert_shader);

app.kaboomv5.gl.compile_shader(gl,frag_template,frag_shader);

app.kaboomv5.gl.attach_shader(gl,id,vert_shader);

app.kaboomv5.gl.attach_shader(gl,id,frag_shader);

app.kaboomv5.gl.bind_attrib_location(gl,id,(0),"a_pos");

app.kaboomv5.gl.bind_attrib_location(gl,id,(1),"a_normal");

app.kaboomv5.gl.bind_attrib_location(gl,id,(2),"a_uv");

app.kaboomv5.gl.bind_attrib_location(gl,id,(3),"a_color");

app.kaboomv5.gl.link_program(gl,id);

var warning_msg = app.kaboomv5.gfx.get_info_log.cljs$core$IFn$_invoke$arity$3(gl,id,new cljs.core.Keyword(null,"program","program",781564284));
if(cljs.core.seq(warning_msg)){
throw Error(warning_msg);
} else {
}

console.log("ID ",id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.app.state.app_state,cljs.core.assoc,new cljs.core.Keyword("program","id","program/id",-792212528),id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581),id);

return id;
});
app.kaboomv5.gfx.bind = (function app$kaboomv5$gfx$bind(gl,id){
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$2(gl,id);
});
app.kaboomv5.gfx.unbind = (function app$kaboomv5$gfx$unbind(gl){
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$1(gl);
});
app.kaboomv5.gfx.send_float = (function app$kaboomv5$gfx$send_float(gl,id,name,val){
var loc = gl.getUniformLocation(id,name);
return gl.uniform1f(loc,val);
});
app.kaboomv5.gfx.send_vec2 = (function app$kaboomv5$gfx$send_vec2(gl,id,name,x,y){
var loc = gl.getUniformLocation(id,name);
return gl.uniform2f(loc,x,y);
});
app.kaboomv5.gfx.send_vec3 = (function app$kaboomv5$gfx$send_vec3(gl,id,name,x,y,z){
var loc = gl.getUniformLocation(id,name);
return gl.uniform3f(loc,x,y,z);
});
app.kaboomv5.gfx.send_vec4 = (function app$kaboomv5$gfx$send_vec4(gl,id,name,x,y,z,w){
var loc = gl.getUniformLocation(id,name);
return gl.uniform4f(loc,x,y,z,w);
});
app.kaboomv5.gfx.send_mat4 = (function app$kaboomv5$gfx$send_mat4(gl,id,name,m){
var loc = gl.getUniformLocation(id,name);
return gl.uniformMatrix4fv(loc,false,loc,(new Float32Array(cljs.core.clj__GT_js(m))));
});
app.kaboomv5.gfx.send = (function app$kaboomv5$gfx$send(gl,id,uniform){
gl.useProgram(id);

var iter__4529__auto___26765 = (function app$kaboomv5$gfx$send_$_iter__26652(s__26653){
return (new cljs.core.LazySeq(null,(function (){
var s__26653__$1 = s__26653;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__26653__$1);
if(temp__5735__auto__){
var s__26653__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26653__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__26653__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__26655 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__26654 = (0);
while(true){
if((i__26654 < size__4528__auto__)){
var vec__26656 = cljs.core._nth(c__4527__auto__,i__26654);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26656,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26656,(1),null);
cljs.core.chunk_append(b__26655,(function (){var loc = gl.getUniformLocation(id,name);
if(typeof val === 'number'){
return loc.uniform1f(val);
} else {
return null;
}
})());

var G__26767 = (i__26654 + (1));
i__26654 = G__26767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26655),app$kaboomv5$gfx$send_$_iter__26652(cljs.core.chunk_rest(s__26653__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26655),null);
}
} else {
var vec__26659 = cljs.core.first(s__26653__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26659,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26659,(1),null);
return cljs.core.cons((function (){var loc = gl.getUniformLocation(id,name);
if(typeof val === 'number'){
return loc.uniform1f(val);
} else {
return null;
}
})(),app$kaboomv5$gfx$send_$_iter__26652(cljs.core.rest(s__26653__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
iter__4529__auto___26765(uniform);

return gl.useProgram(null);
});
/**
 * Runs before render loop
 */
app.kaboomv5.gfx.bind_attribs = (function app$kaboomv5$gfx$bind_attribs(gl){
var normalized_data_QMARK_ = false;
var vsize = (app.kaboomv5.gfx.stride * (4));
gl.vertexAttribPointer((0),(3),gl.FLOAT,normalized_data_QMARK_,vsize,(0));

gl.enableVertexAttribArray((0));

gl.vertexAttribPointer((1),(2),gl.FLOAT,normalized_data_QMARK_,vsize,(12));

gl.enableVertexAttribArray((1));

gl.vertexAttribPointer((2),(4),gl.FLOAT,normalized_data_QMARK_,vsize,(20));

return gl.enableVertexAttribArray((2));
});
app.kaboomv5.gfx.flush_BANG_ = (function app$kaboomv5$gfx$flush_BANG_(gl,id){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx));
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx));
if(cljs.core.truth_(and__4115__auto____$1)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
app.kaboomv5.gfx.send(gl,id,new cljs.core.Keyword(null,"cur-uniform","cur-uniform",1648937894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)));

gl.bindBuffer(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)));

gl.bufferSubData(gl.ARRAY_BUFFER,(0),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))))));

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)));

gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER,(0),(new Uint16Array(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))))));

gl.useProgram(id);

app.kaboomv5.gfx.bind_attribs(gl);

new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)).bind(gl);

gl.drawElements(gl.TRIANGLES,cljs.core.count(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))),gl.UNSIGNED_SHORT,(0));

new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)).unbind(gl);

gl.useProgram(null);

gl.bindBuffer(gl.ARRAY_BUFFER,null);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.gfx.gfx,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"draw-calls","draw-calls",-95870389),cljs.core.inc);
}));
} else {
return null;
}
});
app.kaboomv5.gfx.origin_pt = (function app$kaboomv5$gfx$origin_pt(orig){
var G__26662 = orig;
var G__26662__$1 = (((G__26662 instanceof cljs.core.Keyword))?G__26662.fqn:null);
switch (G__26662__$1) {
case "topleft":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((-1),(-1)) : app.kaboomv5.math.core.vec2.call(null,(-1),(-1)));

break;
case "top":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((0),(-1)) : app.kaboomv5.math.core.vec2.call(null,(0),(-1)));

break;
case "topright":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((1),(-1)) : app.kaboomv5.math.core.vec2.call(null,(1),(-1)));

break;
case "left":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((-1),(0)) : app.kaboomv5.math.core.vec2.call(null,(-1),(0)));

break;
case "center":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((0),(0)) : app.kaboomv5.math.core.vec2.call(null,(0),(0)));

break;
case "right":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((1),(0)) : app.kaboomv5.math.core.vec2.call(null,(1),(0)));

break;
case "botleft":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((-1),(1)) : app.kaboomv5.math.core.vec2.call(null,(-1),(1)));

break;
case "bot":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((0),(1)) : app.kaboomv5.math.core.vec2.call(null,(0),(1)));

break;
case "botright":
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2((1),(1)) : app.kaboomv5.math.core.vec2.call(null,(1),(1)));

break;
default:
return orig;

}
});
app.kaboomv5.gfx.create_index = (function app$kaboomv5$gfx$create_index(idx){
return (idx + (cljs.core.count(new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx))) / app.kaboomv5.gfx.stride));
});
app.kaboomv5.gfx.set_tpu = (function app$kaboomv5$gfx$set_tpu(tex,prog,uni){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134),tex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581),prog,new cljs.core.Keyword(null,"cur-uniform","cur-uniform",1648937894),uni], 0));
});
app.kaboomv5.gfx.to_ndc = (function app$kaboomv5$gfx$to_ndc(p__26663){
var map__26664 = p__26663;
var map__26664__$1 = (((((!((map__26664 == null))))?(((((map__26664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26664):map__26664);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26664__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__26666 = (x / ((-1) + ((2) * app.kaboomv5.gfx.width())));
var G__26667 = (y / ((1) + ((2) * app.kaboomv5.gfx.height())));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26666,G__26667) : app.kaboomv5.math.core.vec2.call(null,G__26666,G__26667));
});
app.kaboomv5.gfx.create_vertex = (function app$kaboomv5$gfx$create_vertex(p__26668){
var map__26669 = p__26668;
var map__26669__$1 = (((((!((map__26669 == null))))?(((((map__26669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26669):map__26669);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var uv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"uv","uv",-1197749379));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26669__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var pt = app.kaboomv5.gfx.to_ndc(app.kaboomv5.math.matrix.mult_vec2(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),pos));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pt),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pt),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(uv),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(uv),new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(color)], null);
});
app.kaboomv5.gfx.draw_raw = (function app$kaboomv5$gfx$draw_raw(verts,indices,tex,prog,uni){
var uni__$1 = (function (){var or__4126__auto__ = uni;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tex,new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prog,new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(uni__$1,new cljs.core.Keyword(null,"cur-uniform","cur-uniform",1648937894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)))) || ((((cljs.core.count(verts) * app.kaboomv5.gfx.stride) + cljs.core.count(new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)))) > app.kaboomv5.gfx.queue_count)) || (((cljs.core.count(indices) + cljs.core.count(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)))) > app.kaboomv5.gfx.queue_count)))){
return app.kaboomv5.gfx.flush_BANG_(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)),new cljs.core.Keyword("program","id","program/id",-792212528).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
} else {
app.kaboomv5.gfx.set_tpu(tex,prog,uni__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.kaboomv5.gfx.create_index,indices),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.create_vertex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([verts], 0))], 0));
}
});
app.kaboomv5.gfx.draw_quad = (function app$kaboomv5$gfx$draw_quad(var_args){
var G__26672 = arguments.length;
switch (G__26672) {
case 0:
return app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"origin","origin",1037372088),app.kaboomv5.gfx.def_origin,new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null));
}));

(app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$1 = (function (p__26673){
var map__26674 = p__26673;
var map__26674__$1 = (((((!((map__26674 == null))))?(((((map__26674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26674):map__26674);
var rot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"rot","rot",757545242));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var tex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"tex","tex",1307057959));
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var quad = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"quad","quad",432820757));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26674__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var w = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var h = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var pos__$1 = (function (){var G__26676 = (function (){var or__4126__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(0));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var G__26677 = (function (){var or__4126__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(1));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26676,G__26677) : app.kaboomv5.math.core.vec2.call(null,G__26676,G__26677));
})();
var origin__$1 = app.kaboomv5.gfx.origin_pt((function (){var or__4126__auto__ = origin;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return app.kaboomv5.gfx.def_origin;
}
})());
var scale__$1 = (function (){var G__26678 = (function (){var or__4126__auto__ = scale;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})();
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$1(G__26678) : app.kaboomv5.math.core.vec2.call(null,G__26678));
})();
var q = (function (){var or__4126__auto__ = quad;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return app.kaboomv5.math.core.quad((0),(0),(1),(1));
}
})();
var z__$1 = ((1) - (function (){var or__4126__auto__ = z;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})());
var color__$1 = (function (){var or__4126__auto__ = color;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$4 ? app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1)) : app.kaboomv5.math.core.color.call(null,(1),(1),(1),(1)));
}
})();
var offset = (function (){var G__26679 = origin__$1;
var G__26680 = (function (){var G__26681 = (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(w,h) : app.kaboomv5.math.core.vec2.call(null,w,h));
var G__26682 = -0.5;
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26681,G__26682) : app.kaboomv5.math.core.scale.call(null,G__26681,G__26682));
})();
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26679,G__26680) : app.kaboomv5.math.core.scale.call(null,G__26679,G__26680));
})();
var rot__$1 = (function (){var or__4126__auto__ = rot;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
app.kaboomv5.gfx.push_transform();

app.kaboomv5.gfx.push_translate(pos__$1);

app.kaboomv5.gfx.push_scale(scale__$1);

app.kaboomv5.gfx.push_rot_z(rot__$1);

app.kaboomv5.gfx.push_translate(offset);

return app.kaboomv5.gfx.draw_raw(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var G__26683 = (app.kaboomv5.math.core.neg(width) / (2));
var G__26684 = (height / (2));
var G__26685 = z__$1;
return (app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3(G__26683,G__26684,G__26685) : app.kaboomv5.math.core.vec3.call(null,G__26683,G__26684,G__26685));
})(),new cljs.core.Keyword(null,"uv","uv",-1197749379),(function (){var G__26686 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(q);
var G__26687 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(q) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(q));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26686,G__26687) : app.kaboomv5.math.core.vec2.call(null,G__26686,G__26687));
})(),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var G__26688 = (app.kaboomv5.math.core.neg(width) / (2));
var G__26689 = app.kaboomv5.math.core.neg((height / (2)));
var G__26690 = z__$1;
return (app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3(G__26688,G__26689,G__26690) : app.kaboomv5.math.core.vec3.call(null,G__26688,G__26689,G__26690));
})(),new cljs.core.Keyword(null,"uv","uv",-1197749379),(function (){var G__26691 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(q);
var G__26692 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(q);
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26691,G__26692) : app.kaboomv5.math.core.vec2.call(null,G__26691,G__26692));
})(),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var G__26693 = (width / (2));
var G__26694 = (app.kaboomv5.math.core.neg(height) / (2));
var G__26695 = z__$1;
return (app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3(G__26693,G__26694,G__26695) : app.kaboomv5.math.core.vec3.call(null,G__26693,G__26694,G__26695));
})(),new cljs.core.Keyword(null,"uv","uv",-1197749379),(function (){var G__26696 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(q) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(q));
var G__26697 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(q);
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26696,G__26697) : app.kaboomv5.math.core.vec2.call(null,G__26696,G__26697));
})(),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var G__26698 = (width / (2));
var G__26699 = (height / (2));
var G__26700 = z__$1;
return (app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3 ? app.kaboomv5.math.core.vec3.cljs$core$IFn$_invoke$arity$3(G__26698,G__26699,G__26700) : app.kaboomv5.math.core.vec3.call(null,G__26698,G__26699,G__26700));
})(),new cljs.core.Keyword(null,"uv","uv",-1197749379),(function (){var G__26701 = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(q) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(q));
var G__26702 = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(q) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(q));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26701,G__26702) : app.kaboomv5.math.core.vec2.call(null,G__26701,G__26702));
})(),new cljs.core.Keyword(null,"color","color",1011675173),color__$1], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(3),(1),(2),(3)], null),tex,new cljs.core.Keyword(null,"cur-prog","cur-prog",-242512581).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),new cljs.core.Keyword(null,"cur-uniform","cur-uniform",1648937894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)));
}));

(app.kaboomv5.gfx.draw_quad.cljs$lang$maxFixedArity = 1);

app.kaboomv5.gfx.frame_start = (function app$kaboomv5$gfx$frame_start(gl){
gl.clear(gl.COLOR_BUFFER_BIT);

if(cljs.core.seq(new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state))))){
} else {
var w_26847 = app.kaboomv5.gfx.width();
var h_26848 = app.kaboomv5.gfx.height();
var sc_26849 = app.kaboomv5.gfx.scale();
app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w_26847,new cljs.core.Keyword(null,"height","height",1025178622),h_26848,new cljs.core.Keyword(null,"tex","tex",1307057959),new cljs.core.Keyword(null,"bg-tex","bg-tex",1973150635).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)),new cljs.core.Keyword(null,"quad","quad",432820757),app.kaboomv5.math.core.quad((0),(0),(w_26847 * (sc_26849 / app.kaboomv5.gfx.bg_grid_size)),(h_26848 * (sc_26849 / app.kaboomv5.gfx.bg_grid_size)))], null));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"transform-stack","transform-stack",-21072581),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"transform","transform",1381301764),(app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0 ? app.kaboomv5.math.core.mat4.cljs$core$IFn$_invoke$arity$0() : app.kaboomv5.math.core.mat4.call(null)),new cljs.core.Keyword(null,"draw-calls","draw-calls",-95870389),(0)], 0));
});
app.kaboomv5.gfx.frame_end = (function app$kaboomv5$gfx$frame_end(gl,id){
app.kaboomv5.gfx.flush_BANG_(gl,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"last-draw-calls","last-draw-calls",1483155831),new cljs.core.Keyword(null,"draw-calls","draw-calls",-95870389).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.gfx.gfx)));
});
app.kaboomv5.gfx.draw_rect = (function app$kaboomv5$gfx$draw_rect(config){
return app.kaboomv5.gfx.draw_quad.cljs$core$IFn$_invoke$arity$1(config);
});
app.kaboomv5.gfx.draw_rect_stroke = (function app$kaboomv5$gfx$draw_rect_stroke(p__26703){
var map__26704 = p__26703;
var map__26704__$1 = (((((!((map__26704 == null))))?(((((map__26704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26704):map__26704);
var config = map__26704__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26704__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26704__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26704__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26704__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var w = (function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var h = (function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var p = (function (){var G__26706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(0));
var G__26707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pos,(1));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26706,G__26707) : app.kaboomv5.math.core.vec2.call(null,G__26706,G__26707));
})();
var offset = (function (){var G__26708 = origin;
var G__26709 = (function (){var G__26710 = (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(w,h) : app.kaboomv5.math.core.vec2.call(null,w,h));
var G__26711 = -0.5;
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26710,G__26711) : app.kaboomv5.math.core.scale.call(null,G__26710,G__26711));
})();
return (app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.scale.cljs$core$IFn$_invoke$arity$2(G__26708,G__26709) : app.kaboomv5.math.core.scale.call(null,G__26708,G__26709));
})();
var p__$1 = (function (){var G__26712 = (function (){var G__26714 = p;
var G__26715 = (function (){var G__26716 = (app.kaboomv5.math.core.neg(w) / (2));
var G__26717 = (app.kaboomv5.math.core.neg(h) / (2));
return (app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.vec2.cljs$core$IFn$_invoke$arity$2(G__26716,G__26717) : app.kaboomv5.math.core.vec2.call(null,G__26716,G__26717));
})();
return (app.kaboomv5.math.core.add.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.add.cljs$core$IFn$_invoke$arity$2(G__26714,G__26715) : app.kaboomv5.math.core.add.call(null,G__26714,G__26715));
})();
var G__26713 = offset;
return (app.kaboomv5.math.core.subtract.cljs$core$IFn$_invoke$arity$2 ? app.kaboomv5.math.core.subtract.cljs$core$IFn$_invoke$arity$2(G__26712,G__26713) : app.kaboomv5.math.core.subtract.call(null,G__26712,G__26713));
})();
return null;
});
app.kaboomv5.gfx.buffer_init = (function app$kaboomv5$gfx$buffer_init(gl){
var vbuf = gl.createBuffer();
var ibuf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,vbuf);

gl.bufferData(gl.ARRAY_BUFFER,(app.kaboomv5.gfx.queue_count * (4)),gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER,null);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibuf);

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,(app.kaboomv5.gfx.queue_count * (2)),gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"vbuf","vbuf",303950747),vbuf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ibuf","ibuf",801056512),ibuf], 0));
});
app.kaboomv5.gfx.tex_init = (function app$kaboomv5$gfx$tex_init(etex,btex){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv5.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"bg-tex","bg-tex",1973150635),btex,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cur-tex","cur-tex",1273110134),etex], 0));
});
app.kaboomv5.gfx.get_clear_color = (function app$kaboomv5$gfx$get_clear_color(){
var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.kaboomv5.app.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"clear-color","clear-color",-1380949274)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$4 ? app.kaboomv5.math.core.color.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1)) : app.kaboomv5.math.core.color.call(null,(0),(0),(0),(1)));
}
});
app.kaboomv5.gfx.init = (function app$kaboomv5$gfx$init(gl){
var map__26718 = app.kaboomv5.gfx.get_clear_color();
var map__26718__$1 = (((((!((map__26718 == null))))?(((((map__26718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26718):map__26718);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26718__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var id = app.kaboomv5.gfx.make_program(gl);
var tex = app.kaboomv5.gfx.empty_tex.cljs$core$IFn$_invoke$arity$0();
var btex = app.kaboomv5.gfx.bg_tex.cljs$core$IFn$_invoke$arity$0();
app.kaboomv5.gfx.clear_color(gl,r,g,b,a);

gl.enable(gl.BLEND);

gl.blendFuncSeparate(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA,gl.ONE,gl.ONE_MINUS_SRC_ALPHA);

app.kaboomv5.gfx.buffer_init(gl);

app.kaboomv5.gfx.tex_init(tex,btex);

app.kaboomv5.gfx.frame_start(gl);

return app.kaboomv5.gfx.frame_end(gl,id);
});
app.kaboomv5.gfx.init_BANG_ = (function app$kaboomv5$gfx$init_BANG_(){
return app.kaboomv5.gfx.init(new cljs.core.Keyword(null,"gl","gl",-246422634).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv5.app.state.app_state)));
});

//# sourceMappingURL=app.kaboomv5.gfx.js.map
