(ns patu.examples.drive
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.utils :refer [js-set! js-get]]
   [patu.components :as c]
   ;; Event System
   [patu.events :refer [reg-event dispatch dispatch-n]]))

(dispatch [:init {:canvas (js/document.getElementById "app")
                  :global true
                  :width 160
                  :height 120
                  ; :fullscreen true
                  :scale 4
                  :debug true
                  :clearColor [0 0 0 1]}])

;;
(dispatch-n [[:load/root "https://kaboomjs.com/pub/examples/"]
             [:load/sprite :car "img/car.png"
              {:sliceX 3
               :anims {:move {:from 0
                              :to 1}
                       :idle {:from 2
                              :to 2}}}]
             [:load/sprite :sky, "img/sky.png"];
             [:load/sprite :road, "img/road.png"];
             [:load/sprite :apple, "img/apple.png"];
             [:load/sprite :pineapple, "img/pineapple.png"]]);


;; Constants
(def ubound 40)
(def lbound (- (p/height) 12))
(def speed 90)
(def speed-mod 1)

(defn main-init []
  [[:layers [:bg :game, :ui] :game]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:layer/bg [[:sprite :sky]
                [:layer :bg]]]
    [:bg/road [[:sprite :road]
               [:layer :bg]
               [:pos 0 0]
               [:prop :road]]]
    [:bg/road2 [[:sprite :road]
                [:layer :bg]
                [:pos (* (p/width) 2) 0]
                [:prop :road]]]
    [:player [[:sprite :car]
              [:pos 24 (/ (p/height) 2)]
              [:scale 1]
              [:origin :center]
              [:area -12 -6 12 8]
              [:prop {:speed 120}]]]
    [:ui/happiness [[:text "0" 4]
                    [:pos 4 4]
                    [:layer :ui]
                    [:prop {:value 0}]]]]])

(reg-event
 :player/move-up
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (> (.. player -pos -y) ubound)
       (c/move! player [0 (p/neg (c/speed player))])))))

(reg-event
 :player/move-down
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (< (.. player -pos -y) lbound)
       (c/move! player [0 (c/speed player)])))))

(reg-event
 :player/move-left
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (< (.. player -pos -y) lbound)
       (c/move! player [(p/neg (c/speed player)) 0])))))
(reg-event
 :player/move-right
 (fn [_ [_ pid]]
   (let [player (p/get-component pid)]
     (when (< (.. player -pos -y) lbound)
       (c/move! player [(c/speed player) 0])))))

(reg-event
 :game/handle-loop
 (fn [_ _]
   (let [comp (rand-nth [:apple :pineapple])]
     (dispatch [:comp/reg [[:sprite comp]
                           [:pos (p/width) (rand-nth (range ubound lbound))]
                           [:prop :obj]
                           [:prop comp]]]))))

(reg-event
 :obj/handle-lifecycle
 (fn [_ [_ obj]]
   (.move obj (* -1 speed speed-mod) 0)
   (if (<= (.. obj -pos -x) (- (p/width)))
     (p/destroy obj))))

(reg-event
 :handle/apple
 (fn [_ [_ obj]]
   (let [happiness (p/get-component :ui/happiness)]
     (js-set! happiness :value (+ (.-value happiness) 250))
     (p/destroy obj))))
(reg-event
 :handle/pineapple
 (fn [_ [_ obj]]
   (let [happiness (p/get-component :ui/happiness)]
     (js-set! happiness :value (+ (.-value happiness) 125))
     (p/destroy obj))))
(reg-event
 :happiness/set-score
 (fn [_ [_ id]]
   (let [happiness (p/get-component id)]
     (js-set! happiness :value (js/Math.floor (+ (.-value happiness) 1)))
     (js-set! happiness :text (.-value happiness)))))
     ; (p/destroy obj))))

(js/Math.min 10 1)
(defn main-action []
  (let [player (p/get-component :player)
        happiness (p/get-component :ui/happiness)
        score 0]
    ; (.play player "move")
    [[:anim/play     :player :move]
     [:key-down
      [:up     #(dispatch [:player/move-up :player])]
      [:down   #(dispatch [:player/move-down :player])]
      [:left   #(dispatch [:player/move-left :player])]
      [:right   #(dispatch [:player/move-right :player])]
      [:f   #(set! speed-mod 4)]
      [:=     #(cam/zoom-in)]
      [:-     #(cam/zoom-out)]]
     [:key-release
      [:f  #(set! speed-mod  1)]]
     [:action
      [:obj   #(dispatch [:obj/handle-lifecycle %])]
      [:ui/happiness   #(dispatch [:happiness/set-score :ui/happiness])]]
     [:loop     0.6   #(dispatch [:game/handle-loop])]
     [:collides
      [[:player :apple]    #(dispatch [:handle/apple %])]
      [[:player :pineapple]  #(dispatch [:handle/pineapple %])]]]))
;;

(p/reg-scene :scene/main {:init main-init :evt main-action})

(defn app []
  (p/start :scene/main)
  #_(p/go :scene/main))
