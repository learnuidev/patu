(ns app.examples.metro.scenes.two
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [app.patu.core :as p]
   [app.patu.loaders :as l]
   [app.patu.cam :as cam]
   [app.patu.audio :as a]
   [app.patu.components :as c]
   [app.patu.utils :refer [js-get]]
   ;; Event System
   [app.patu.events :refer [dispatch reg-event]]
   ;; Assets
   [app.examples.metro.assets :refer [main-map level-handler level-two-handler]]))

;;
(defn init  [score]
  (let [[x y] (p/center)]
    [[:comp/reg-n
      [:dialog
       [[:text  "Scene Two"]
        [:origin :center]
        [:pos [x y]]]]
      [:dialog-2
       [[:text "TODO!" 10]
        [:origin :center]
        [:pos [x (+ 80 y)]]]]]]))

(defn event []
  [[:evt/key-press :space #(p/go :scene/one)]])
