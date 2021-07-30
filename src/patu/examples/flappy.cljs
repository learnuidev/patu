(ns patu.examples.flappy
  (:require [patu.core :as p]
            [patu.loaders :as l]
            [patu.events :as evt]))

;; 0. Initialize
(p/kaboom {:canvas (js/document.getElementById "app")
           :global true
           :fullscreen false})

;; 1. Load Assets
(l/load-root "https://kaboomjs.com/pub/examples/");
(l/load-sprite  :bg, "img/bg.png");
(l/load-sprite  :birdy, "img/birdy.png");


;; Custom Event handler
(evt/reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (p/get-comp id)]
     (set! (.. player -pos -y) (+ 10 (.. player -pos -y))))))

(evt/dispatch-n
 [[:comp/reg :player [[:sprite :birdy]
                      [:solid]
                      [:pos [100 100]]]]
  [:comp/reg [[:sprite :birdy]
              [:solid]
              [:pos [250 100]]
              :birdy]]
  ;; Multiple component registration - ideal for spawning enemies
  #_[:comp/reg-n
     (for [n (range 10)]
       [[:sprite :birdy]
        [:pos [(+ 30 (* 60 n)) (+ 30 (* 60 n))]]
        [:solid]
        :birdy])]])

;; Two ways to write handler function
(evt/dispatch-n
 [[:action :player (fn [])]
                     ; (js/console.log "HELLO"))]
   ;; Multiple Event Registation
  [:key-down
   ;; For simple cases use data syntax
   [:right [[:player {:x 10}]]]
   [:left  [[:player {:x -10}]]]
   [:up    {:player {:y -10}}]
   ;; For more complex scenario: use event registration
   [:down  {:dispatch [:player/go-south :player]}]
   #_[:down  {:player {:y 10}}]]])

(defn app [])
