(ns patu.examples.flappy
  (:require [patu.core :as p]
            [patu.loaders :as l]
            [patu.events :as evt]
            [patu.utils :refer [jget  jset-in jget-in jset!]]))

;; 1. Initialize App
(p/kaboom {:canvas (js/document.getElementById "app")
           :global true
           :fullscreen false})

;; 2. Load Assets
(l/load-root "https://kaboomjs.com/pub/examples/");
(l/load-sprite [[:bg, "img/bg.png"];
                [:birdy, "img/birdy.png"]
                [:pipe, "img/pipe.png"]]);
(l/load-sound [[:score "sounds/score.mp3"]
               [:wooosh "sounds/wooosh.mp3"]
               [:hit "sounds/hit.mp3"]])

(comment
  (jget (p/get-comp :player) :pos)
  (jget-in (p/get-comp :player) [:pos :x]))

;; 3. Register Event handlers
(evt/reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (p/get-comp id)
         newy (+ 10 (jget-in player [:pos :y]))]
     (jset-in player [:pos :y] newy))))

;; 4. Register Components
(evt/dispatch-n
 [[:comp/reg :player [[:sprite :birdy]
                      [:solid]
                      [:pos [100 100]]]]
  [:comp/reg [[:sprite :birdy]
              [:solid]
              [:pos [250 100]]
              :birdy]]])

;; 5. Use Event Handlers
;; Two ways to write handler function
(evt/dispatch-n
 [[:action :player (fn [])]
                     ; (js/console.log "HELLO"))]
   ;; Multiple ways to register an Event
  [:key-down
   [:right [[:player {:x 10}]]]                         ;;  For simple cases use data syntax
   [:left  [[:player {:x -10}]]]
   [:up    {:player {:y -10}}]
   [:down  {:dispatch [:player/go-south :player]}]]])   ;;  For more complex scenario: use event registration (event handler needs to be registered first)
