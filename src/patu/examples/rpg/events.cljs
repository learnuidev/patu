(ns patu.examples.rpg.events
  (:require
   [patu.utils :refer [js-get js-set!]]
   [patu.core :as p]
   [patu.events :refer [reg-event]]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]))

; === Events ====
(reg-event
 :camera/follow
 (fn [_ [_ id]]
   (cam/follow (p/get-component id))))

(reg-event
 :player/respawn
 (fn [_ [_ id]]
   (let [player (p/get-component id)]
     (p/respawn player 0))))

(reg-event
 :player/respawn?
 (fn [_ [_ id]]
   (let [player (p/get-component id)]
     (when (> (.. player -pos -y) 320)
       (p/respawn player 0)))))

(reg-event
 :player/super-jump
 (fn [_ [_ id val]]
   (let [player (p/get-component id)]
     (c/jump player (* (js-get player :jumpForce) (or val 2))))))

(reg-event
 :player/collect-coin
 (fn [_ [_ coin pid sid]]
   (let [player (p/get-component sid)
         score (p/get-component sid)]
     (p/destroy coin)
     (a/play :sound/coin)
     (js-set! score :value (inc (js-get score :value)))
     (js-set! score :text (js-get score :value)))))

(reg-event
 :player/move
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (and (c/grounded? player) (not (c/cur-anim? player :move)))
       (c/play player :move)))))

(reg-event
 :player/idle
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (and (not (p/key-down? :right)) (not (p/key-down? :right)))
       (c/play player :idle)))))

(reg-event
 :player/move-left
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (c/flip-x player -1)
     (c/move! player [(p/neg (c/speed player)) 0]))))
(reg-event
 :player/move-right
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (c/flip-x player 1)
     (c/move! player [(c/speed player) 0]))))

(reg-event
 :scene/go
 (fn [_ [_ sid]]
   (p/go sid)))
