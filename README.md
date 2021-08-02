# Patu v05

<img width="484" alt="Screen Shot 2021-07-31 at 9 50 53 PM" src="https://user-images.githubusercontent.com/67298065/127756609-f76eadfc-7fbc-49b2-a712-88c596431bcc.png">



Patu was the name of my grandmother's cow when I was little.

Patu is also a ClojureScript library that helps you make games fast and fun! :)

<img width="766" alt="Screen Shot 2021-07-24 at 3 34 13 PM" src="https://user-images.githubusercontent.com/43140948/126879382-1759a63d-5312-46f3-8497-f6807f0ab20b.png">

It is built on top of Kaboom.js

## Usage

A Flappy bird tutorial

https://user-images.githubusercontent.com/67298065/126885020-d021be8a-1746-4428-aea7-14982c805137.mov

```clj
(ns app.kaboom-examples.flappy
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs (5) ===
   [app.patu.core :as p]                            ;; Core
   [app.patu.loaders :as l]                         ;; Loaders
   [app.patu.audio :as a]                           ;; Audio
   [app.patu.components :as c]                      ;; Component Helpers
   [app.patu.events :refer [reg-event dispatch]]))  ;; Event System))

;; 0 Constants
(def pipe-open  80);
(def pipe-min-height  16)
(def jump-force  320)
(def speed  120)
(def ceiling  -60)

;; 1 Game Init
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :scale 2
         :debug true
         :clearColor [0 0 0 1]})

;; 2 Load Game Assets
(l/load-root "https://kaboomjs.com/pub/examples/")
(l/load-sprite :sprite/bg, "img/bg.png");
(l/load-sprite :sprite/birdy, "img/birdy.png");
(l/load-sprite :sprite/pipe, "img/pipe.png");
(l/load-sound :sound/score "sounds/score.mp3")
(l/load-sound :sound/wooosh "sounds/wooosh.mp3")
(l/load-sound :sound/hit "sounds/hit.mp3")

;; 3 Write dem event handlers (re-frame syntax)
;; Events ===
(reg-event
 :game/spawn-pipes
 (fn [_ _]
   (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open 10)))]
     (p/dispatch [:component/add-n
                  [[:sprite :sprite/pipe]
                   [:origin :botleft]
                   [:pos [(p/width) h1]]
                   [:prop :pipe]] ;; "give it tags to easier define behaviors see below"
                  [[:sprite :sprite/pipe]
                   [:origin :botleft]
                   [:scale 1 -1]
                   [:pos [(p/width) (+ h1 pipe-open 20)]]
                   [:prop :pipe]
                   [:prop {:passed false}]]])))) ;; "raw table just assigns every field to the game obj"

(defn add-score [score]
  (set! score -value (inc (.-value score)));
  (set! score -text (.-value score)));

(reg-event
 :pipe/handle-lifecycle
 (fn [_ [_ pipe pid sid]]
   (let [player (p/get-component pid)
         score  (p/get-component sid)]
     (.move pipe (* -1 speed) 0)
     (when (and (= (.-passed pipe) false)
                (<= (+ (.. pipe -pos -x) (.-width pipe))
                    (.. player -pos -x)))
       (set! pipe -passed true)
       (add-score score)))))

(reg-event
 :player/check-ffall
 (fn [_ [_ id score]]
   (let [player (p/get-component id)]
     (when (> (.. player -pos -y) (p/height))
       (p/go :scene/lose score))
     (when (<= (.. player -pos -y) ceiling)
       (p/go :scene/lose score)))))

(reg-event
 :scene/go
 (fn [_ [_ sid score]]
   (p/go sid (or score 0))))

(reg-event
 :comp/jump
 (fn [_ [_ cid force]]
   (let [player (p/get-component cid)]
     (c/jump! player force)
     (a/play :sound/wooosh))))

;; 4. A Scenes --- Main Scene - 4.1 Scene Init Function
(defn main-init []
  [[:game/gravity 1200]
   [:game/layers [:bg :game, :ui] :game]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:layer/bg [[:sprite :sprite/bg]
                [:scale (/ (p/width) 240) (/ (p/height) 240)]
                [:layer :bg]]]
    [:player [[:sprite :sprite/birdy]
              [:pos 120 0]
              [:scale 1]
              [:body {:jumpForce 320}]
              [:origin :center]
              [:prop {:speed 160}]]]
    [:ui/score [[:text "0" 16]
                [:pos 9 9]
                [:layer :ui]
                [:prop {:value  0}]]]]])

;; 4.2 Scene Event Handler
(defn main-action []
  (let [score (p/get-component :ui/score)]
    [[:evt/key-press :space          #(dispatch [:comp/jump :player jump-force])]
     [:game/loop     1               #(dispatch [:game/spawn-pipes])]
     [:evt/action    :player         #(dispatch [:player/check-ffall :player (.-value score)])]
     [:evt/action    :pipe           #(dispatch [:pipe/handle-lifecycle % :player :ui/score])]
     [:evt/collides  [:player :pipe] #(dispatch [:scene/go :scene/lose (.-value score)])]]))

;; 4,3 Scene Registration
(p/reg-scene :scene/main
             {:init main-init
              :evt main-action})

;; 4. B Lose Scene ===
(defn lose-init [score]
  (let [[x y] (p/center)]
    [[:comp/reg-n
      [:ui/score-board [[:text score 64]
                        [:pos x y]
                        [:origin :center]]]
      [:ui/score-board [[:text "Press space to restart" 16]
                        [:pos x (+ y 50)]
                        [:origin :center]]]]]))

(defn lose-action []
  [[:evt/key-press :space #(p/go :scene/main)]])
  
(p/reg-scene :scene/lose
             {:init lose-init
              :evt lose-action})

;; 5 Start App
(defn app []
  (p/start :scene/main))
```
