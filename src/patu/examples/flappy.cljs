(ns patu.examples.flappy
  (:require [patu.core :as p :refer
             [;; init
              kaboom
                ;; Loaders
              load-root
              load-sprite
               ;; state
              state
               ;; Components
              get-comp
              reg-comp
               ;; Event
              reg-event
              dispatch
              dispatch-n]]))

;; 0. Initialize
(p/kaboom {:canvas (js/document.getElementById "app")
           :global true
           :fullscreen false})

;; 1. Load Assets
(p/load-root "https://kaboomjs.com/pub/examples/");
(p/load-sprite  :bg, "img/bg.png");
(p/load-sprite  :birdy, "img/birdy.png");


;; Multiple component registration - ideal for spawning enemies
#_(reg-comp-n
   (for [n (range 10)]
     [[:sprite :birdy]
      [:pos [(+ 30 (* 60 n)) (+ 30 (* 60 n))]]
      [:solid]
      :birdy]))

;; Custom Event handler
(p/reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (get-comp (name id))]
     ; (js/console.log player)
     (set! (.. player -pos -y) (+ 10 (.. player -pos -y))))))

(p/dispatch-n
 [[:comp/reg :player [[:sprite :birdy]
                      [:solid]
                      [:pos [100 100]]]]
  [:comp/reg [[:sprite :birdy]
              [:solid]
              [:pos [250 100]]
              :birdy]]
  #_[:comp/reg-n
     (for [n (range 10)]
       [[:sprite :birdy]
        [:pos [(+ 30 (* 60 n)) (+ 30 (* 60 n))]]
        [:solid]
        :birdy])]])
;; Two ways to write handler function
(p/dispatch-n
 [[:action :player (fn [])]
  ;; Multiple Event Registation
  [:key-down
  ;; For simple cases use data syntax
   [:right [[:player {:x 10}]]]
   [:left  [[:player {:x -10}]]]
   [:up    {:player {:y -10}}]
  ;; For more complex scenario: use event registration
   [:down  #(dispatch [:player/go-south :player])]]])

(defn app [])
