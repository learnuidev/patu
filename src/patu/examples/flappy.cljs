(ns patu.examples.flappy
  (:require [patu.core :as p]
            [patu.loaders :as l]
            [patu.events :refer [reg-event dispatch dispatch-n]]
            [patu.utils :refer [jget  jset-in jget-in jset!]]))

;; 0 Constants
(def pipe-open  80);
(def pipe-min-height  16)
(def jump-force  320)
(def speed  120)
(def ceiling  -60)

;; 1. Initialize App
(p/kaboom {:canvas (js/document.getElementById "app")
           :global true
           :scale 1
           :debug true
           :clearColor [0 0 0 1]})

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
(reg-event
 :game/spawn-pipes
 (fn [_ _]
   (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open 10)))]
     (dispatch [:comp/reg-n [[[:sprite :pipe]
                              [:origin :botleft]
                              [:pos [(p/width) h1]]
                              :pipe] ;; "give it tags to easier define behaviors see below"
                             [[:sprite :pipe]
                              [:origin :botleft]
                              [:scale 1 -1]
                              [:pos [(p/width) (+ h1 pipe-open 20)]]
                              :pipe
                              {:passed false}]]])))) ;; "raw table just assigns every field to the game obj"

(reg-event
 :score/add
 (fn [_ [_ score]]
   (set! score -value (inc (.-value score)));
   (set! score -text (.-value score))));

(reg-event
 :pipe/handle-lifecycle
 (fn [_ [_ pipe pid sid]]
   (let [player (p/get-comp pid)
         score  (p/get-comp sid)]
     (.move pipe (* -1 speed) 0)
     (when (and (= (.-passed pipe) false)
                (<= (+ (.. pipe -pos -x) (.-width pipe))
                    (.. player -pos -x)))
       (set! pipe -passed true)
       (dispatch [:score/add score])))))

(reg-event
 :player/check-ffall
 (fn [_ [_ id score]]
   (let [player (p/get-comp id)]
     (when (> (.. player -pos -y) (p/height))
       (p/go :scene/lose score))
     (when (<= (.. player -pos -y) ceiling)
       (p/go :scene/lose score)))))

(reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (p/get-comp id)
         newy (+ 10 (jget-in player [:pos :y]))]
     (jset-in player [:pos :y] newy))))

;; 4. Register Scenes
;; ==== 4.1 Main Scene
(defn main-init []
  [[:comp/reg
    [:player [[:sprite :birdy]
              [:solid]
              [:pos [100 100]]]]]])

(defn main-evt []
  [[:action :player (fn [])]
   ;; Multiple ways to register an Event
   [:key-down
    [:right [[:player {:x 10}]]]                         ;;  For simple cases use data syntax
    [:left  [[:player {:x -10}]]]
    [:up    {:player {:y -10}}]
    [:down  {:dispatch [:player/go-south :player]}]]   ;;  For more complex scenario: use event registration (event handler needs to be registered first)
   [:loop  1 #(dispatch [:game/spawn-pipes])]])

(p/reg-scene :main {:init main-init
                    :evt main-evt})

;; === 4.2 Lose Scene
(defn lose-init [])
(defn lose-evt [])
(p/reg-scene :lose {:evt lose-init
                    :init lose-evt})

(defn app []
  (p/go :main))
