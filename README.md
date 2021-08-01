# Patu

<img width="484" alt="Screen Shot 2021-07-31 at 9 50 53 PM" src="https://user-images.githubusercontent.com/67298065/127756609-f76eadfc-7fbc-49b2-a712-88c596431bcc.png">


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
  (:require [patu.core :as p] ;; Core
            [patu.utils       ;; JS helper functions
             :refer [jset-in! jset! jget-in jget]]))

;; 0 Constants
(def pipe-open  80);
(def pipe-min-height  16)
(def jump-force  320)
(def speed  120)
(def ceiling  -60)

;; 1. Initialize App
(p/dispatch [:kaboom {:canvas (js/document.getElementById "app")
                      :global true
                      :fullscreen true
                      :scale 3
                      :debug true
                      :clearColor [0 0 0 1]}])

;; 2. Load Assets
(p/dispatch-n
 [[:load/root "https://kaboomjs.com/pub/examples/"]
  [:load/sprite [[:bg, "img/bg.png"];
                 [:birdy, "img/birdy.png"]
                 [:pipe, "img/pipe.png"]]]
  [:load/sound [[:score "sounds/score.mp3"]
                [:wooosh "sounds/wooosh.mp3"]
                [:hit "sounds/hit.mp3"]]]])

;; Comments for testing
(comment
  (p/sub [:comp :player])
  (p/sub [:comp :player :pos])
  (p/sub [:comp :player :pos :x]))

;; 3. Register Event handlers
(p/reg-event
 :game/spawn-pipes
 (fn [_ _]
   (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open)))]
     (p/dispatch [:comp/reg-n [[[:sprite :pipe]
                                [:origin :botleft]
                                [:pos [(p/width) h1]]
                                :pipe] ;; "give it tags to easier define behaviors see below"
                               [[:sprite :pipe]
                                [:origin :botleft]
                                [:scale 1 -1]
                                [:pos [(p/width) (+ h1 pipe-open)]]
                                :pipe
                                {:passed false}]]])))) ;; "raw table just assigns every field to the game obj"

(p/reg-event
 :score/add
 (fn [_ _]
   (let [new-score (inc (p/sub [:comp :ui/score :value]))];]
     (-> (p/sub [:comp :ui/score])
         (jset! :value new-score)
         (jset! :text new-score)))))

(p/reg-event
 :pipe/destroy
 (fn [_ [_ pipe]]
   (.destroy pipe)))

(p/reg-event
 :pipe/handle-lifecycle
 (fn [_ [_ pipe pid]]
   (let [player (p/sub [:comp pid])]
     (.move pipe (* -1 speed) 0)
     (when (and (= (jget pipe :passed) false)
                (<= (+ (jget-in pipe [:pos :x]) (jget pipe :width))
                    (p/sub [:comp pid :pos :x])))
       (set! pipe -passed true)
       (p/dispatch [:score/add]))
     (when (< (jget-in pipe [:pos :x])
              ; 10)
              (/ (* -1 (p/width)) 2))
       (js/console.log "DESTROY")
       (p/dispatch [:pipe/destroy pipe])))))

(p/reg-event
 :player/go-south
 (fn [_ [_ id]]
   (let [player (p/sub [:comp id])
         newy (+ 10 (p/sub [:comp id :pos :y]))]
     (jset-in! player [:pos :y] newy))))

(p/reg-event
 :comp/jump
 (fn [_ [_ cid]]
   (p/dispatch-n [[:jump :player jump-force]
                  [:audio/play  :wooosh]])))

(p/reg-event
 :player/check-ffall
 (fn [_ [_ id]]
   (when (> (p/sub [:comp id :pos :y]) (p/height))
     (p/dispatch [:go :lose]))
   (when (<= (p/sub [:comp id :pos :y]) ceiling)
     (p/dispatch [:go :lose]))))

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
  (p/sub [:comp :player]))

(defn main-evt []
  [[:action :player (fn [])]
   ;; Multiple ways to register an Event
   [:key-down
    [:right [[:player {:x 10}]]]                         ;;  For simple cases use data syntax
    [:left  [[:player {:x -10}]]]
    [:up    {:player {:y -10}}]
    [:down  {:dispatch [:player/go-south :player]}]]     ;;  For more complex scenario: use event registration (event handler needs to be registered first)
   [:loop  1 #(p/dispatch [:game/spawn-pipes])]
   [:key-press :space  #(p/dispatch [:comp/jump :player])]
   [:action
    [:player  #(p/dispatch [:player/check-ffall :player :ui/score])]
    [:pipe    #(p/dispatch [:pipe/handle-lifecycle % :player])]]
   [:collides  [:player :pipe] #(p/dispatch [:go :lose])]])

;; === 4.2 Lose Scene
(defn lose-init []
  (let [[x y] (p/center)
              ;; :value means we want .-value property from ui/score component
        score (p/sub [:comp :ui/score :value])]
    [[:comp/reg-n [[[:text score 64]
                    [:pos [x y]]
                    [:origin :center]]
                   [[:text "Press space to restart" 16]
                    [:pos x (+ y 50)]
                    [:origin :center]]]]]))

(defn lose-evt []
  [[:key-press :space #(p/dispatch [:go :main])]])

;; === 4.3 Scene Registration
(p/dispatch-n
 [[:reg-scene :main main-init main-evt]
  [:reg-scene :lose lose-init lose-evt]])

;; === 5 Start App
(defn app []
  (p/dispatch [:go :main]))
```
