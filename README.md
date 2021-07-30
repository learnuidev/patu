# Patu v0.6

Patu was the name of my grandmother's cow when I was little.

Patu is also a ClojureScript library that helps you make games fast and fun! :)

<img width="766" alt="Screen Shot 2021-07-24 at 3 34 13 PM" src="https://user-images.githubusercontent.com/43140948/126879382-1759a63d-5312-46f3-8497-f6807f0ab20b.png">

It is built on top of Kaboom.js

## Usage

A Flappy bird tutorial

https://user-images.githubusercontent.com/67298065/126885020-d021be8a-1746-4428-aea7-14982c805137.mov

This is tutorial has been updated for kaboom v0.6. For v0.5 examples please see v05 directory

```clj
(ns patu.examples.flappy
  (:require [patu.core :as p]
            [patu.loaders :as l]
            [patu.audio :as a]
            [patu.components :as c]
            [patu.subs :refer [sub reg-sub]]
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
  (jget (sub [:comp :player]) :pos)
  (jget-in (sub [:comp :player]) [:pos :x]))

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
   (let [player (sub [:comp pid])
         score  (sub [:comp sid])]
     (.move pipe (* -1 speed) 0)
     (when (and (= (.-passed pipe) false)
                (<= (+ (.. pipe -pos -x) (.-width pipe))
                    (.. player -pos -x)))
       (set! pipe -passed true)
       (dispatch [:score/add score])))))

(reg-event
 :player/check-ffall
 (fn [_ [_ id score]]
   (let [player (sub [:comp id])]
     (when (> (.. player -pos -y) (p/height))
       (dispatch [:go :lose score]))
     (when (<= (.. player -pos -y) ceiling)
       (dispatch [:go :lose score])))))

(reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (sub [:comp id])
         newy (+ 10 (jget-in player [:pos :y]))]
     (jset-in player [:pos :y] newy))))

(reg-event
 :comp/jump
 (fn [_ [_ cid force]]
   (let [player (sub [:comp cid])]
     (c/jump! player force)
     (a/play :wooosh))))

;; 4. Scenes
;; ==== 4.1 Main Scene
(defn main-init []
  [[:layers [:bg :game, :ui] :game]
   [:gravity 500]
   [:comp/reg-n
    [[:bg [[:sprite :bg {:noArea true}]
           [:scale (/ (p/width) 240) (/ (p/height) 240)]
           [:layer :bg]]]
     [:player [[:sprite :birdy]
               [:pos 420 120]
               [:scale 2]
               [:body {:jumpForce 420}]
               [:layer :ui]]]]]])

(comment
  (sub [:comp :player]))

(defn main-evt []
  [[:action :player (fn [])]
   ;; Multiple ways to register an Event
   [:key-down
    [:right [[:player {:x 10}]]]                         ;;  For simple cases use data syntax
    [:left  [[:player {:x -10}]]]
    [:up    {:player {:y -10}}]
    [:down  {:dispatch [:player/go-south :player]}]]     ;;  For more complex scenario: use event registration (event handler needs to be registered first)
   [:loop  1 #(dispatch [:game/spawn-pipes])]
   [:key-press :space  #(dispatch [:comp/jump :player jump-force])]])

;; === 4.2 Lose Scene
(defn lose-init [])
(defn lose-evt [])

;; === 4.3 Scene Registration
(dispatch-n
 [[:reg-scene :main main-init main-evt]
  [:reg-scene :lose lose-init lose-evt]])

;; === 5 Start App
(defn app []
  (dispatch [:go :main]))
```
