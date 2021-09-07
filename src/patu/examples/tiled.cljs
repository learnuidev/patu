(ns patu.examples.tiled
  (:require [patu.plugins.tiledmap :refer [tiledmap-plugin]]))

(def k (js/kaboom (clj->js {:canvas (js/document.getElementById "app")
                            :global true})))

(js/addSprite "mark" (clj->js  {:scale 10}));

(comment
 ;; this is used
  (.inflate pako (js/Uint8Array.))
  (.deflate pako (js/Uint8Array.)))

(defn app []
  (js/console.log "TILED MAPS yo"))
