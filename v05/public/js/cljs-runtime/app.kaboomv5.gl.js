goog.provide('app.kaboomv5.gl');
goog.require('cljs.core');
goog.require('clojure.string');
app.kaboomv5.gl.power_of_two = (function app$kaboomv5$gl$power_of_two(n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rem((Math.log(n) / Math.log((2))),(1)));
});
app.kaboomv5.gl.create_texture = (function app$kaboomv5$gl$create_texture(gl){
return gl.createTexture();
});
app.kaboomv5.gl.tex_filter = (function app$kaboomv5$gl$tex_filter(gl,fil){
var G__48044 = fil;
var G__48044__$1 = (((G__48044 instanceof cljs.core.Keyword))?G__48044.fqn:null);
switch (G__48044__$1) {
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
app.kaboomv5.gl.make_texture = (function app$kaboomv5$gl$make_texture(gl,data,fil){
var id = app.kaboomv5.gl.create_texture(gl);
var wrap = ((((app.kaboomv5.gl.power_of_two(data.width)) && (app.kaboomv5.gl.power_of_two(data.height))))?gl.REPEAT:gl.CLAMP_TO_EDGE);
gl.bindTexture(gl.TEXTURE_2D,id);

gl.texImage2D(gl.TEXTURE_2D,(0),gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,data);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,app.kaboomv5.gl.tex_filter(gl,fil));

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,app.kaboomv5.gl.tex_filter(gl,fil));

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,wrap);

gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,wrap);

gl.bindTexture(gl.TEXTURE_2D,null);

return cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"width","width",-384071477),data.width,new cljs.core.Keyword(null,"height","height",1025178622),data.height,new cljs.core.Keyword(null,"bind","bind",-113428417),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,id);
}),new cljs.core.Keyword(null,"unbind","unbind",716905720),(function (gl__$1){
return gl__$1.bindTexture(gl__$1.TEXTURE_2D,null);
})], null));
});
app.kaboomv5.gl.tex_bind = (function app$kaboomv5$gl$tex_bind(gl,id){
return gl.bindTexture(gl.TEXTURE_2D,id);
});
app.kaboomv5.gl.tex_unbind = (function app$kaboomv5$gl$tex_unbind(gl){
return gl.bindTexture(gl.TEXTURE_2D,null);
});
app.kaboomv5.gl.bind_buffer = (function app$kaboomv5$gl$bind_buffer(gl,attr,val){
return gl.bindBuffer(attr,val);
});
app.kaboomv5.gl.create_shader = (function app$kaboomv5$gl$create_shader(gl,shader_type){
return gl.createShader(shader_type);
});
app.kaboomv5.gl.compile_shader = (function app$kaboomv5$gl$compile_shader(gl,template,shader){
gl.shaderSource(shader,template);

gl.compileShader(shader);


var warning_msg = gl.getShaderInfoLog(shader);
if(cljs.core.seq(warning_msg)){
throw (new Error(warning_msg));
} else {
return null;
}
});
app.kaboomv5.gl.reg_shader = (function app$kaboomv5$gl$reg_shader(gl,template,shader_type){
var shader = gl.createShader(shader_type);
gl.shaderSource(shader,template);

gl.compileShader(shader);


var warning_msg_48049 = gl.getShaderInfoLog(shader);
if(cljs.core.seq(warning_msg_48049)){
throw (new Error(warning_msg_48049));
} else {
}

return shader;
});
app.kaboomv5.gl.attach_shader = (function app$kaboomv5$gl$attach_shader(gl,id,shader){
return gl.attachShader(id,shader);
});
app.kaboomv5.gl.bind_attrib_location = (function app$kaboomv5$gl$bind_attrib_location(gl,id,index,type){
return gl.bindAttribLocation(id,index,type);
});
app.kaboomv5.gl.get_attrib_location = (function app$kaboomv5$gl$get_attrib_location(gl,program,attrib){
return gl.getAttribLocation(program,attrib);
});
app.kaboomv5.gl.create_program = (function app$kaboomv5$gl$create_program(gl){
return gl.createProgram();
});
if((typeof app !== 'undefined') && (typeof app.kaboomv5 !== 'undefined') && (typeof app.kaboomv5.gl !== 'undefined') && (typeof app.kaboomv5.gl.get_info_log !== 'undefined')){
} else {
app.kaboomv5.gl.get_info_log = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48045 = cljs.core.get_global_hierarchy;
return (fexpr__48045.cljs$core$IFn$_invoke$arity$0 ? fexpr__48045.cljs$core$IFn$_invoke$arity$0() : fexpr__48045.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.kaboomv5.gl","get-info-log"),(function (gl,id,type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
app.kaboomv5.gl.get_info_log.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"program","program",781564284),(function (gl,id,_){
return gl.getProgramInfoLog(id);
}));
app.kaboomv5.gl.link_program = (function app$kaboomv5$gl$link_program(gl,id){
return gl.linkProgram(id);
});
app.kaboomv5.gl.use_program = (function app$kaboomv5$gl$use_program(var_args){
var G__48047 = arguments.length;
switch (G__48047) {
case 1:
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$1 = (function (gl){
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$2(gl,null);
}));

(app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$2 = (function (gl,id){
return gl.useProgram(id);
}));

(app.kaboomv5.gl.use_program.cljs$lang$maxFixedArity = 2);

app.kaboomv5.gl.bind = (function app$kaboomv5$gl$bind(gl,id){
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$2(gl,id);
});
app.kaboomv5.gl.unbind = (function app$kaboomv5$gl$unbind(gl){
return app.kaboomv5.gl.use_program.cljs$core$IFn$_invoke$arity$1(gl);
});
app.kaboomv5.gl.send_float = (function app$kaboomv5$gl$send_float(gl,id,name,val){
var loc = gl.getUniformLocation(id,name);
return gl.uniform1f(loc,val);
});
app.kaboomv5.gl.send_vec2 = (function app$kaboomv5$gl$send_vec2(gl,id,name,x,y){
var loc = gl.getUniformLocation(id,name);
return gl.uniform2f(loc,x,y);
});
app.kaboomv5.gl.send_vec3 = (function app$kaboomv5$gl$send_vec3(gl,id,name,x,y,z){
var loc = gl.getUniformLocation(id,name);
return gl.uniform3f(loc,x,y,z);
});
app.kaboomv5.gl.send_vec4 = (function app$kaboomv5$gl$send_vec4(gl,id,name,x,y,z,w){
var loc = gl.getUniformLocation(id,name);
return gl.uniform4f(loc,x,y,z,w);
});
app.kaboomv5.gl.send_mat4 = (function app$kaboomv5$gl$send_mat4(gl,id,name,m){
var loc = gl.getUniformLocation(id,name);
return gl.uniformMatrix4fv(loc,false,loc,(new Float32Array(cljs.core.clj__GT_js(m))));
});
app.kaboomv5.gl.clear_color = (function app$kaboomv5$gl$clear_color(gl,r,b,g,a){
return gl.clearColor(r,b,g,a);
});
app.kaboomv5.gl.clear_color_bbit = (function app$kaboomv5$gl$clear_color_bbit(gl){
return gl.clear(gl.COLOR_BUFFER_BIT);
});

//# sourceMappingURL=app.kaboomv5.gl.js.map
