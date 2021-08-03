(ns patu.examples.metro.scenes.two
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]
   [patu.utils :refer [js-get]]
   ;; Event System
   [patu.events :refer [dispatch reg-event]]
   ;; Assets
   [patu.examples.metro.assets :refer [main-map level-handler level-two-handler]]))

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
