(ns app.examples.patuv06.one
  (:require  ["/kaboom/v06.js" :as kaboom6]))

;;
(def kaboom (.-default kaboom6))

(comment
  (kaboom))

(defn app []
  (kaboom (clj->js {:canvas (js/document.getElementById "app")})))
