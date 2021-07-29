
shadow.cljs.devtools.client.env.module_loaded('main');

try { app.core.init(); } catch (e) { console.error("An error occurred when calling (app.core/init)"); throw(e); }