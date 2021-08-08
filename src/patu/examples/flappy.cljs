(ns patu.examples.flappy
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs (5) ===
   [patu.core :as p]
   [patu.components :as c]                      ;; Component Helpers
   [patu.events :refer [reg-event dispatch dispatch-n]]))    ;; Event System))


;; 0 Constants
(def pipe-open  80);
(def pipe-min-height  16)
(def jump-force  320)
(def speed  120)
(def ceiling  -60)

;; 1 Initialize the game
(dispatch [:init {:canvas (js/document.getElementById "app")
                  :global true
                  :scale 3
                  :debug true
                  :fullscreen true
                  :clearColor [0 0 0 1]}])

;; 2 Load Game Assets
(dispatch-n [[:load/root  "https://kaboomjs.com/pub/examples/"];
             [:load/sprite
              [:sprite/bg, "img/bg.png"];
              [:sprite/birdy, "img/birdy.png"];
              [:sprite/pipe, "img/pipe.png"]];
             [:load/sound :sound/score "sounds/score.mp3"]
             [:load/sound :sound/wooosh "sounds/wooosh.mp3"]
             [:load/sound :sound/hit "sounds/hit.mp3"]])

;; 3 Write dem event handlers (re-frame syntax)
;; Events ===
(reg-event
 :game/spawn-pipes
 (fn [_ _]
   (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open 10)))]
     (dispatch [:comp/reg-n
                [[:sprite :sprite/pipe]
                 [:origin :botleft]
                 [:pos [(p/width) h1]]
                 [:props :pipe]] ;; "give it tags to easier define behaviors see below"
                [[:sprite :sprite/pipe]
                 [:origin :botleft]
                 [:scale 1 -1]
                 [:pos [(p/width) (+ h1 pipe-open 20)]]
                 [:props :pipe]
                 [:props {:passed false}]]])))) ;; "raw table just assigns every field to the game obj"

(defn add-score [score]
  (set! score -value (inc (js/parseInt (.-value score))));
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
 (fn [_ [_ id]]
   (let [player (p/get-component id)]
     (when (> (.. player -pos -y) (p/height))
       (p/go :scene/lose))
     (when (<= (.. player -pos -y) ceiling)
       (p/go :scene/lose)))))

(reg-event
 :scene/go
 (fn [_ [_ sid score]]
   (p/go sid (or score 0))))

(reg-event
 :comp/jump
 (fn [_ [_ cid force]]
   (dispatch-n
    [[:jump cid force]
     [:audio/play :sound/wooosh]])))

;; 4. A Scenes --- Main Scene - 4.1 Scene Init Function
(defn main-init []
  [[:gravity 1200]
   [:layers [:bg :game, :ui] :game]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:layer/bg [[:sprite :sprite/bg]
                [:scale (/ (p/width) 240) (/ (p/height) 240)]
                [:layer :bg]]]
    [:player [[:sprite :sprite/birdy]
              [:pos  (/ (p/width) 4) 0]
              [:scale 1]
              [:body {:jumpForce 320}]
              [:origin :center]
              [:props {:speed 160}]]]
    [:ui/score [[:text "0" 16]
                [:pos 9 9]
                [:layer :ui]
                [:props {:value  0}]]]]])

;; 4.2 Scene Event Handler
(defn main-evt []
  [[:key-press :space  #(dispatch [:comp/jump :player jump-force])]
   [:loop  1           #(dispatch [:game/spawn-pipes])]
   [:action
    [:player         #(dispatch [:player/check-ffall :player])]
    [:pipe           #(dispatch [:pipe/handle-lifecycle % :player :ui/score])]]
   [:collides [:player :pipe] #(dispatch [:scene/go :scene/lose])]])

;; 4. B Lose Scene ===
(defn lose-init []
  (let [[x y] (p/center)
        score (p/get-component :ui/score)]
    [[:comp/reg-n
      [:ui/score-board [[:text (.-value score) 24]
                        [:pos x y]
                        [:origin :center]]]
      [:ui/score-board [[:text "Press space to restart" 8]
                        [:pos x (+ y 50)]
                        [:origin :center]]]]]))

(defn lose-evt []
  [[:key-press :space #(p/go :scene/main)]])

;; 4,3 Scene Registration
(dispatch-n
 [[:reg-scene :scene/main main-init main-evt]
  [:reg-scene :scene/lose lose-init lose-evt]])

;; 5 Start App
(defn app []
  (dispatch [:start :scene/main]))
