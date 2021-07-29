goog.provide('app.kaboom_next.log');
goog.require('cljs.core');
app.kaboom_next.log.clear = (function app$kaboom_next$log$clear(){
return console.clear();
});
app.kaboom_next.log.log = (function app$kaboom_next$log$log(val){
app.kaboom_next.log.clear();

return console.log(val);
});

//# sourceMappingURL=app.kaboom_next.log.js.map
