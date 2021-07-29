goog.provide('app.kaboomv1.gfx');
goog.require('cljs.core');
goog.require('app.kaboomv1.math');
app.kaboomv1.gfx.gfx_init = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vbuf","vbuf",303950747),(0),new cljs.core.Keyword(null,"ibuf","ibuf",801056512),(0),new cljs.core.Keyword(null,"prog","prog",-342988015),(0),new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"transform","transform",1381301764),app.kaboomv1.math.mat4.cljs$core$IFn$_invoke$arity$0()], null);
app.kaboomv1.gfx.gfx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(app.kaboomv1.gfx.gfx_init);
app.kaboomv1.gfx.ex_obj = ({});
app.kaboomv1.gfx.create_texture = (function app$kaboomv1$gfx$create_texture(gl){
return gl.createTexture();
});
app.kaboomv1.gfx.make_texture = (function app$kaboomv1$gfx$make_texture(gl,w,h,data){
var id = app.kaboomv1.gfx.create_texture(gl);
gl.bindTexture(gl.TEXTURE_2D,id);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,data);

gl.bindTexture(gl.TEXTURE_2D,null);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,id);
}),new cljs.core.Keyword(null,"unbind","unbind",716905720),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
})], null);
});
if((typeof app !== 'undefined') && (typeof app.kaboomv1 !== 'undefined') && (typeof app.kaboomv1.gfx !== 'undefined') && (typeof app.kaboomv1.gfx.gl !== 'undefined')){
} else {
app.kaboomv1.gfx.gl = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.kaboomv1.gfx.new_sprite = (function app$kaboomv1$gfx$new_sprite(gl,p__28103){
var map__28104 = p__28103;
var map__28104__$1 = (((((!((map__28104 == null))))?(((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28104):map__28104);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28104__$1,new cljs.core.Keyword(null,"conf","conf",-983921284),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"anims","anims",300543630),cljs.core.PersistentArrayMap.EMPTY], null));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tex","tex",1307057959),(1),new cljs.core.Keyword(null,"conf","conf",-983921284),conf], null);
});
cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
app.kaboomv1.gfx.load_sprite = (function app$kaboomv1$gfx$load_sprite(gl,p__28106){
var map__28107 = p__28106;
var map__28107__$1 = (((((!((map__28107 == null))))?(((((map__28107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28107):map__28107);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28107__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28107__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var conf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28107__$1,new cljs.core.Keyword(null,"conf","conf",-983921284));
var new_sprite = app.kaboomv1.gfx.new_sprite(gl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"conf","conf",-983921284),conf], null));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.kaboomv1.gfx.gfx,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sprites","sprites",-1835833922),id], null),new_sprite);
});
app.kaboomv1.gfx.push_verts = (function app$kaboomv1$gfx$push_verts(verts,indices){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv1.gfx.gfx,cljs.core.update,new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([verts], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv1.gfx.gfx,cljs.core.update,new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([indices], 0));
});
app.kaboomv1.gfx.sprite = (function app$kaboomv1$gfx$sprite(){
return app.kaboomv1.gfx.push_verts(cljs.core.PersistentVector.fromArray([0.0,0.5,0.0,0.0,0.0,1.0,0.0,0.0,1.0,0.0,0.0,1.0,-0.5,-0.5,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0,0.0,1.0,0.5,-0.5,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,1.0], true),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null));
});
app.kaboomv1.gfx.default_vert = "\nattribute vec3 a_pos;\nattribute vec3 a_normal;\nattribute vec2 a_uv;\nattribute vec4 a_color;\nvarying vec3 v_pos;\nvarying vec3 v_normal;\nvarying vec2 v_uv;\nvarying vec4 v_color;\nuniform mat4 u_model;\nuniform mat4 u_view;\nuniform mat4 u_proj;\nvoid main() {\n\tv_pos = a_pos;\n\tv_uv = a_uv;\n\tv_color = a_color;\n\tv_normal = normalize(a_normal);\n\tgl_Position = vec4(v_pos, 1.0);\n}";
app.kaboomv1.gfx.default_frag = "\n  precision mediump float;\n  varying vec3 v_pos;\n  varying vec3 v_normal;\n  varying vec2 v_uv;\n  varying vec4 v_color;\n  uniform sampler2D u_tex;\n  uniform vec4 u_color;\n  void main() {\n  \tgl_FragColor = v_color * u_color;\n  \tif (gl_FragColor.a == 0.0) {\n  \t\tdiscard;\n  \t}\n  }";
app.kaboomv1.gfx.init_gl = (function app$kaboomv1$gfx$init_gl(gl_ctx){
return cljs.core.reset_BANG_(app.kaboomv1.gfx.gl,gl_ctx);
});
app.kaboomv1.gfx.reg_shader = (function app$kaboomv1$gfx$reg_shader(gl,template,shader_type){
var shader = gl.createShader(shader_type);
gl.shaderSource(shader,template);

gl.compileShader(shader);

var temp__5735__auto___28114 = gl.getShaderInfoLog(shader);
if(cljs.core.truth_(temp__5735__auto___28114)){
var warning_msg_28115 = temp__5735__auto___28114;
console.log(warning_msg_28115);

console.warn(warning_msg_28115);
} else {
}

return shader;
});
app.kaboomv1.gfx.make_vert = (function app$kaboomv1$gfx$make_vert(gl,template){
return app.kaboomv1.gfx.reg_shader(gl,template,gl.VERTEX_SHADER);
});
app.kaboomv1.gfx.make_frag = (function app$kaboomv1$gfx$make_frag(gl,template){
return app.kaboomv1.gfx.reg_shader(gl,template,gl.FRAGMENT_SHADER);
});
app.kaboomv1.gfx.attach_shader = (function app$kaboomv1$gfx$attach_shader(gl,id,shader){
return gl.attachShader(id,shader);
});
app.kaboomv1.gfx.bind_attrib_location = (function app$kaboomv1$gfx$bind_attrib_location(gl,id,index,type){
return gl.bindAttribLocation(id,index,type);
});
app.kaboomv1.gfx.create_program = (function app$kaboomv1$gfx$create_program(gl){
return gl.createProgram();
});
if((typeof app !== 'undefined') && (typeof app.kaboomv1 !== 'undefined') && (typeof app.kaboomv1.gfx !== 'undefined') && (typeof app.kaboomv1.gfx.get_info_log !== 'undefined')){
} else {
app.kaboomv1.gfx.get_info_log = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28109 = cljs.core.get_global_hierarchy;
return (fexpr__28109.cljs$core$IFn$_invoke$arity$0 ? fexpr__28109.cljs$core$IFn$_invoke$arity$0() : fexpr__28109.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboomv1.gfx","get-info-log"),(function (gl,id,type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboomv1.gfx.get_info_log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (gl,id,_){
return gl.getProgramInfoLog(id);
}));
app.kaboomv1.gfx.link_program = (function app$kaboomv1$gfx$link_program(gl,id){
return gl.linkProgram(id);
});
app.kaboomv1.gfx.create_program_BANG_ = (function app$kaboomv1$gfx$create_program_BANG_(gl){
var id = app.kaboomv1.gfx.create_program(gl);
app.kaboomv1.gfx.attach_shader(gl,id,app.kaboomv1.gfx.reg_shader(gl,app.kaboomv1.gfx.default_vert,gl.VERTEX_SHADER));

app.kaboomv1.gfx.attach_shader(gl,id,app.kaboomv1.gfx.reg_shader(gl,app.kaboomv1.gfx.default_frag,gl.FRAGMENT_SHADER));

app.kaboomv1.gfx.bind_attrib_location(gl,id,(0),"a_pos");

app.kaboomv1.gfx.bind_attrib_location(gl,id,(1),"a_normal");

app.kaboomv1.gfx.bind_attrib_location(gl,id,(2),"a_uv");

app.kaboomv1.gfx.bind_attrib_location(gl,id,(3),"a_color");

app.kaboomv1.gfx.link_program(gl,id);

var temp__5735__auto___28120 = app.kaboomv1.gfx.get_info_log.cljs$core$IFn$_invoke$arity$3(gl,id,new cljs.core.Keyword(null,"program","program",781564284));
if(cljs.core.truth_(temp__5735__auto___28120)){
var warning_msg_28121 = temp__5735__auto___28120;
console.warn(warning_msg_28121);
} else {
}

return id;
});
if(cljs.core.truth_(cljs.core.deref(app.kaboomv1.gfx.gl))){
app.kaboomv1.gfx.gid = app.kaboomv1.gfx.create_program_BANG_(cljs.core.deref(app.kaboomv1.gfx.gl));
} else {
}
if(cljs.core.truth_(cljs.core.deref(app.kaboomv1.gfx.gl))){
console.log(cljs.core.deref(app.kaboomv1.gfx.gl));
} else {
}
app.kaboomv1.gfx.use_program = (function app$kaboomv1$gfx$use_program(var_args){
var G__28111 = arguments.length;
switch (G__28111) {
case 1:
return app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$1 = (function (gl){
return app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$2(gl,null);
}));

(app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$2 = (function (gl,id){
return gl.useProgram(id);
}));

(app.kaboomv1.gfx.use_program.cljs$lang$maxFixedArity = 2);

app.kaboomv1.gfx.bind = (function app$kaboomv1$gfx$bind(gl,id){
return app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$2(gl,id);
});
app.kaboomv1.gfx.unbind = (function app$kaboomv1$gfx$unbind(gl){
return app.kaboomv1.gfx.use_program.cljs$core$IFn$_invoke$arity$1(gl);
});
app.kaboomv1.gfx.send_float = (function app$kaboomv1$gfx$send_float(gl,id,name,val){
var loc = gl.getUniformLocation(id,name);
return gl.uniform1f(loc,val);
});
app.kaboomv1.gfx.send_vec2 = (function app$kaboomv1$gfx$send_vec2(gl,id,name,x,y){
var loc = gl.getUniformLocation(id,name);
return gl.uniform2f(loc,x,y);
});
app.kaboomv1.gfx.send_vec3 = (function app$kaboomv1$gfx$send_vec3(gl,id,name,x,y,z){
var loc = gl.getUniformLocation(id,name);
return gl.uniform3f(loc,x,y,z);
});
app.kaboomv1.gfx.send_vec4 = (function app$kaboomv1$gfx$send_vec4(gl,id,name,x,y,z,w){
var loc = gl.getUniformLocation(id,name);
return gl.uniform4f(loc,x,y,z,w);
});
app.kaboomv1.gfx.send_mat4 = (function app$kaboomv1$gfx$send_mat4(gl,id,name,m){
var loc = gl.getUniformLocation(id,name);
return gl.uniformMatrix4fv(loc,false,loc,(new Float32Array(cljs.core.clj__GT_js(m))));
});
app.kaboomv1.gfx.clear_color = (function app$kaboomv1$gfx$clear_color(gl,r,b,g,a){
return gl.clearColor(r,b,g,a);
});
app.kaboomv1.gfx.flush_BANG_ = (function app$kaboomv1$gfx$flush_BANG_(gl,id){
gl.bindBuffer(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx)));

gl.bufferSubData(gl.ARRAY_BUFFER,(0),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx))))));

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx)));

gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER,(0),(new Float32Array(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx))))));

app.kaboomv1.gfx.bind(gl,id);

app.kaboomv1.gfx.send_vec4(gl,id,"u_color",1.0,1.0,1.0,1.0);

gl.vertexAttribPointer((0),(3),gl.FLOAT,false,(48),(0));

gl.enableVertexAttribArray((0));

gl.vertexAttribPointer((1),(3),gl.FLOAT,false,(48),(12));

gl.enableVertexAttribArray((1));

gl.vertexAttribPointer((2),(3),gl.FLOAT,false,(48),(24));

gl.enableVertexAttribArray((2));

gl.vertexAttribPointer((3),(3),gl.FLOAT,false,(48),(32));

gl.enableVertexAttribArray((3));

gl.drawElements(gl.TRIANGLES,cljs.core.count(new cljs.core.Keyword(null,"iqueue","iqueue",-291960746).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx))),gl.UNSIGNED_SHORT,(0));

app.kaboomv1.gfx.unbind(gl);

gl.bindBuffer(gl.ARRAY_BUFFER,null);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv1.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"vqueue","vqueue",-1882544846),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"iqueue","iqueue",-291960746),cljs.core.PersistentVector.EMPTY], 0));
});
app.kaboomv1.gfx.frame_start = (function app$kaboomv1$gfx$frame_start(gl){
return gl.clear(gl.COLOR_BUFFER_BIT);
});
app.kaboomv1.gfx.frame_end = (function app$kaboomv1$gfx$frame_end(gl,id){
return app.kaboomv1.gfx.flush_BANG_(gl,id);
});
app.kaboomv1.gfx.init = (function app$kaboomv1$gfx$init(gl){
app.kaboomv1.gfx.clear_color(gl,0.0,0.0,0.0,1.0);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.kaboomv1.gfx.gfx,cljs.core.assoc,new cljs.core.Keyword(null,"vbuf","vbuf",303950747),gl.createBuffer(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ibuf","ibuf",801056512),gl.createBuffer()], 0));

gl.bindBuffer(gl.ARRAY_BUFFER,new cljs.core.Keyword(null,"vbuf","vbuf",303950747).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx)));

gl.bufferData(gl.ARRAY_BUFFER,((65536) * (48)),gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER,null);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,new cljs.core.Keyword(null,"ibuf","ibuf",801056512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.kaboomv1.gfx.gfx)));

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,((65536) * (2)),gl.DYNAMIC_DRAW);

gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);

return app.kaboomv1.gfx.create_program_BANG_(gl);
});

//# sourceMappingURL=app.kaboomv1.gfx.js.map
