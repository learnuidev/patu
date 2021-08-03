(ns patu.examples.metro.events
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
   [patu.events :refer [dispatch reg-event key-down?]]
   ;; Assets
   [patu.examples.metro.assets :refer [main-map level-handler level-two-handler]]))

(reg-event
 :player/move-left
 (fn [_ [_ player]]
   (if (< 20 (.-x (.-pos player)))
     (.move player (.scale (p/vec2 [-1 0]) (+ (.-speed player) 30)))
     (p/go :scene/two))
   (.flipX (p/get-component :player) -1)
   (when (and (c/grounded? player)
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :attack)))
     (p/play :player :player/run))))

(reg-event
 :player/move-right
 (fn [_ [_ player]]
   (when (> 650 (.-x (.-pos player)))
     (.move player (.scale (p/vec2 [1 0]) (.-speed player))))
   (.flipX (p/get-component :player) 1)
   (when (and (c/grounded? player)
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :attack)))
     (p/play :player :player/run))))

(reg-event
 :player/jump
 (fn [_ [_ player]]
   (if (c/grounded? player)
     (c/jump! player 540))))

(reg-event
 :player/zoom
 (fn [_ [_ player]]
   (let [diff (if (key-down? :left) -800 400)]
     (when (not (c/grounded? player))
       (.move player (.scale (p/vec2 [1 0]) (+ diff (.-speed player))))
       (p/play :player :player/boom)))))

(reg-event
 :player/idle
 (fn [_ [_ player]]
   (when (or  (not (key-down? [:left :right :x]))
              (not (c/cur-anim? player :player/attack))
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :nod)))
     (p/play :player :player/idle))))

(reg-event
 :player/process-lever
 (fn [_ [_ player lever]]
   ; (when (c/cur-anim? player :player/attack)
   (set! lever -open true)
   (p/change-sprite [lever :lever-right])))
     ; (p/play :player :player/idle))))
