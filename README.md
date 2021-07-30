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
            [patu.utils :refer [jset-in! jset!]]))

;; 0 Constants
(def pipe-open  80);
(def pipe-min-height  16)
(def jump-force  320)
(def speed  120)
(def ceiling  -60)

;; 1. Initialize App
(dispatch [:kaboom {:canvas (js/document.getElementById "app")
                    :global true
                    :fullscreen true
                    :scale 3
                    :debug true
                    :clearColor [0 0 0 1]}])

;; 2. Load Assets
(dispatch-n
 [[:load/root "https://kaboomjs.com/pub/examples/"]
  [:load/sprite [[:bg, "img/bg.png"];
                 [:birdy, "img/birdy.png"]
                 [:pipe, "img/pipe.png"]]]
  [:load/sound [[:score "sounds/score.mp3"]
                [:wooosh "sounds/wooosh.mp3"]
                [:hit "sounds/hit.mp3"]]]])

;; Comments for testing
(comment
  (sub [:comp :player])
  (sub [:comp :player :pos])
  (sub [:comp :player :pos :x]))

;; 3. Register Event handlers
(reg-event
 :game/spawn-pipes
 (fn [_ _]
   (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open)))]
     (dispatch [:comp/reg-n [[[:sprite :pipe]
                              [:origin :botleft]
                              [:pos [(p/width) h1]]
                              :pipe] ;; "give it tags to easier define behaviors see below"
                             [[:sprite :pipe]
                              [:origin :botleft]
                              [:scale 1 -1]
                              [:pos [(p/width) (+ h1 pipe-open)]]
                              :pipe
                              {:passed false}]]])))) ;; "raw table just assigns every field to the game obj"

(reg-event
 :score/add
 (fn [_ _]
   (let [new-score (inc (sub [:comp :ui/score :value]))];]
     (-> (sub [:comp :ui/score])
         (jset! :value new-score)
         (jset! :text new-score)))))

(reg-event
 :pipe/destroy
 (fn [_ [_ pipe]]
   (.destroy pipe)))

(reg-event
 :pipe/handle-lifecycle
 (fn [_ [_ pipe pid]]
   (let [player (sub [:comp pid])]
     (.move pipe (* -1 speed) 0)
     (when (and (= (.-passed pipe) false)
                (<= (+ (.. pipe -pos -x) (.-width pipe))
                    (.. player -pos -x)))
       (set! pipe -passed true)
       (dispatch [:score/add]))
     (when (< (.. pipe -pos -x)
              ; 10)
              (/ (* -1 (p/width)) 2))
       (js/console.log "DESTROY")
       (dispatch [:pipe/destroy pipe])))))

(reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (sub [:comp id])
         newy (+ 10 (sub [:comp id :pos :y]))]
     (jset-in! player [:pos :y] newy))))

(reg-event
 :comp/jump
 (fn [_ [_ cid]]
   (dispatch-n [[:jump :player jump-force]
                [:audio/play  :wooosh]])))

(reg-event
 :player/check-ffall
 (fn [_ [_ id]]
   (when (> (sub [:comp id :pos :y]) (p/height))
     (dispatch [:go :lose]))
   (when (<= (sub [:comp id :pos :y]) ceiling)
     (dispatch [:go :lose]))))

;; 4. Scenes
;; ==== 4.1 Main Scene
(defn main-init []
  [[:layers [:bg :game, :ui] :game]
   [:gravity 1000]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [[:bg [[:sprite :bg {:noArea true}]
           [:scale (/ (p/width) 240) (/ (p/height) 240)]
           [:layer :bg]]]
     [:player [[:sprite :birdy]
               [:pos (/ (p/width) 4) 120]
               [:scale 1]
               [:body]]]
     [:ui/score [[:text "0" 16]
                 [:pos 9 9]
                 [:layer :ui]
                 {:value 0}]]]]])

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
   [:key-press :space  #(dispatch [:comp/jump :player])]
   [:action
    [:player  #(dispatch [:player/check-ffall :player :ui/score])]
    [:pipe    #(dispatch [:pipe/handle-lifecycle % :player])]]
   [:collides  [:player :pipe] #(dispatch [:go :lose])]])

;; === 4.2 Lose Scene
(defn lose-init []
  (let [[x y] (p/center)
              ;; :value means we want .-value property from ui/score component
        score (sub [:comp :ui/score :value])]
    [[:comp/reg-n [[[:text score 64]
                    [:pos [x y]]
                    [:origin :center]]
                   [[:text "Press space to restart" 16]
                    [:pos x (+ y 50)]
                    [:origin :center]]]]]))

(defn lose-evt []
  [[:key-press :space #(dispatch [:go :main])]])

;; === 4.3 Scene Registration
(dispatch-n
 [[:reg-scene :main main-init main-evt]
  [:reg-scene :lose lose-init lose-evt]])

;; === 5 Start App
(defn app []
  (dispatch [:go :main]))
```
