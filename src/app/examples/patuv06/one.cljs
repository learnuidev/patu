(ns app.examples.patuv06.one
  (:require [app.examples.patuv06.core :refer
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
(kaboom {:canvas (js/document.getElementById "app")
         :global true
         :fullscreen false})

;; 1. Load
(load-root "https://kaboomjs.com/pub/examples/");
(load-sprite  :bg, "img/bg.png");
(load-sprite  :birdy, "img/birdy.png");


;; Multiple component registration - ideal for spawning enemies
#_(reg-comp-n
   (for [n (range 10)]
     [[:sprite :birdy]
      [:pos [(+ 30 (* 60 n)) (+ 30 (* 60 n))]]
      [:solid]
      :birdy]))

(comment
  (get-comp :birdy)
  (get-comp :player))

(dispatch-n
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

(reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (get-comp (name id))]
     ; (js/console.log player)
     (set! (.. player -pos -y) (+ 10 (.. player -pos -y))))))

;; Two ways to write handler function
(dispatch-n
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

(comment
  (= js/Function (type app)))
