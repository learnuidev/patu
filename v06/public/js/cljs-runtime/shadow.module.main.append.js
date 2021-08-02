
shadow.cljs.devtools.client.env.module_loaded('main');

try { patu.examples.core.init(); } catch (e) { console.error("An error occurred when calling (patu.examples.core/init)"); throw(e); }