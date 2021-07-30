(ns patu.loaders
  (:require  [patu.state :refer [state]]))

;; Kaboom Helpers
;; === Loaders ===
(defn load-root [val]
  (.loadRoot (:k @state) val));

(defn load-sprite [id val]
  (.loadSprite (:k @state) (name id) val));

(defn load-sprite-n [vals]
  (doseq [[id val] vals]
    (load-sprite id val)))
