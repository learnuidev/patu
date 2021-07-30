(ns app.examples.drive
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [app.patu.core :as p]
   [app.patu.loaders :as l]
   [app.patu.cam :as cam]
   [app.patu.audio :as a]
   [app.patu.utils :refer [js-set! js-get]]
   [app.patu.components :as c]
   ;; Event System
   [app.patu.events :refer [reg-event dispatch]]))

(p/init {:canvas (js/document.getElementById "app")
         :global true
         :width 160
         :height 120
         ; :fullscreen true
         :scale 4
         :debug true
         :clearColor [0 0 0 1]})

;;
(l/load-root "https://kaboomjs.com/pub/examples/")
(l/load-sprite :sprite/car "img/car.png"
               {:sliceX 3
                :anims {:move {:from 0
                               :to 1}
                        :idle {:from 2
                               :to 2}}})
;
(l/load-sprite :sprite/sky, "img/sky.png");
(l/load-sprite :sprite/road, "img/road.png");
(l/load-sprite :sprite/apple, "img/apple.png");
(l/load-sprite :sprite/pineapple, "img/pineapple.png");


;; Constants
(def ubound 40)
(def lbound (- (p/height) 12))
(def speed 90)
(def speed-mod 1)

(defn main-init []
  [[:game/layers [:bg :game, :ui] :game]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:layer/bg [[:sprite :sprite/sky]
                [:layer :bg]]]
    [:bg/road [[:sprite :sprite/road]
               [:layer :bg]
               [:pos 0 0]
               [:prop :road]]]
    [:bg/road2 [[:sprite :sprite/road]
                [:layer :bg]
                [:pos (* (p/width) 2) 0]
                [:prop :road]]]
    [:player [[:sprite :sprite/car]
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
   (let [comp (rand-nth [:sprite/apple :sprite/pineapple])]
     (p/add-component! [[:sprite comp]
                        [:pos (p/width) (rand-nth (range ubound lbound))]
                        [:prop :obj]
                        [:prop comp]]))))

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
    [[:evt/key-down  :up     #(dispatch [:player/move-up :player])]
     [:evt/key-down  :down   #(dispatch [:player/move-down :player])]
     [:evt/key-down  :left   #(dispatch [:player/move-left :player])]
     [:evt/key-down  :right   #(dispatch [:player/move-right :player])]
     [:evt/key-down     :f   #(set! speed-mod 4)]
     [:evt/key-release  :f  #(set! speed-mod  1)]
     [:evt/key-down  :=     #(cam/zoom-in)]
     [:evt/key-down  :-     #(cam/zoom-out)]
     [:evt/action    :obj   #(dispatch [:obj/handle-lifecycle %])]
     [:evt/action    :ui/happiness   #(dispatch [:happiness/set-score :ui/happiness])]
     [:game/loop     0.6   #(dispatch [:game/handle-loop])]
     [:comp/play     :player :move]
     [:evt/collides  [:player :apple]    #(dispatch [:handle/apple %])]
     [:evt/collides  [:player :pineapple]  #(dispatch [:handle/pineapple %])]]))
;;

(p/reg-scene :scene/main {:init main-init :evt main-action})

(defn app []
  (p/start :scene/main))