(ns app.patu.cam
  (:require [app.patu.lib :as lib]
            [app.patu.state :refer [game-state]]))

(defn follow [comp]
  (lib/follow-comp (:game @game-state) comp))

(defn cam-pos
  ([] (lib/cam-pos (:game @game-state)))
  ([pos]
   (lib/cam-pos (:game @game-state) pos)))

(defn cam-scale
  ([]    (lib/cam-scale (:game @game-state)))
  ([pos] (lib/cam-scale (:game @game-state) pos)))

;;
(defn zoom-out
  ([] (zoom-out 0.5))
  ([minz]
   (let [val  (.sub (cam-scale) (lib/vec2 (:game @game-state) (lib/dt (:game @game-state))))]
     ; (when (> (.-x val) minz)
     (js/console.log val)
     (cam-scale val))))

(defn zoom-in
  ([] (zoom-in 3))
  ([maxz]
   (let [val  (.add (cam-scale) (lib/vec2 (:game @game-state) (lib/dt (:game @game-state))))]
     (when (< (.-x val) maxz)
       (cam-scale val)))))
