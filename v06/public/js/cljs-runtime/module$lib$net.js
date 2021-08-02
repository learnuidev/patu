function netInit$$module$lib$net(url) {
  function connected() {
    return socket !== null && socket.readyState === 1;
  }
  function connect() {
    /** @const */ var ws = new WebSocket(url);
    return new Promise < WebSocket > function(resolve, reject) {
      ws.onopen = function() {
        resolve(ws);
        socket = ws;
        var $jscomp$iter$4 = $jscomp.makeIterator(sendQueue);
        for (var $jscomp$key$msg = $jscomp$iter$4.next(); !$jscomp$key$msg.done; $jscomp$key$msg = $jscomp$iter$4.next()) {
          /** @const */ var msg = $jscomp$key$msg.value;
          {
            ws.send(msg);
          }
        }
      };
      ws.onerror = function() {
        reject("failed to connect to " + url);
      };
      ws.onmessage = function(e) {
        /** @const */ var msg = JSON.parse(e.data);
        if (handlers[msg.type]) {
          var $jscomp$iter$5 = $jscomp.makeIterator(handlers[msg.type]);
          for (var $jscomp$key$handler = $jscomp$iter$5.next(); !$jscomp$key$handler.done; $jscomp$key$handler = $jscomp$iter$5.next()) {
            /** @const */ var handler = $jscomp$key$handler.value;
            {
              handler(msg.id, msg.data);
            }
          }
        }
      };
    };
  }
  function recv(type, handler) {
    if (!handlers[type]) {
      handlers[type] = [];
    }
    handlers[type].push(handler);
  }
  function send(type, data) {
    /** @const */ var msg = JSON.stringify({type:type, data:data});
    if (socket) {
      socket.send(msg);
    } else {
      sendQueue.push(msg);
    }
  }
  function close() {
    if (socket) {
      socket.close();
    }
  }
  /** @const */ var handlers = {};
  /** @const */ var sendQueue = [];
  var socket = null;
  return {connect:connect, close:close, connected:connected, recv:recv, send:send};
}
/** @const */ var module$lib$net = {};
/** @const */ module$lib$net.netInit = netInit$$module$lib$net;

$CLJS.module$lib$net=module$lib$net;
//# sourceMappingURL=module$lib$net.js.map
