(ns patu.examples.aladdin
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
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :scale 1
         :debug true
         :clearColor [0 0 0 1]})

;; 2 Load Game Assets
(dispatch-n [[:load/root  "assets/aladdin/"];
             [:load/sprite :run "aladdin_running.png"
              {:sliceX 11
               :anims {:run {:from 0 :to 10}}}]
             [:load/sprite :idle "aladdin_idle.png"
              {:sliceY 2
               :anims {:idle {:from 0 :to 1}}}]
             [:load/sprite :throw "aladdin_throw.png"
              {:sliceX 4
               :anims {:throw {:from 0 :to 3}}}]
             [:load/sprite :run-stop "aladdin_running_stop.png"
              {:sliceX 7
               :anims {:run-stop {:from 0 :to 6}}}]
             [:load/sprite :jump "aladdin_jump.png"
              {:sliceX 11
               :anims {:jump {:from 0 :to 10}}}]
             [:load/sprite :parachute "aladdin_parachute.png"
              {:sliceX 2
               :anims {:parachute {:from 0 :to 1}}}]
             [:load/sprite :climb-01 "aladdin_climb_01.png"
              {:sliceX 4
               :anims {:climb-01 {:from 0 :to 3}}}]
             [:load/sprite :climb-02 "aladdin_climb_02.png"
              {:sliceX 2
               :anims {:climb-02 {:from 0 :to 1}}}]
             [:load/sprite :climb-03 "aladdin_climb_03.png"
              {:sliceX 3
               :anims {:climb-03 {:from 0 :to 2}}}]
             [:load/sprite :climb "aladdin_climb_final.png"
              {:sliceX 9
               :anims {:climb {:from 0 :to 8}}}]
             [:load/sprite :angry "aladdin_angry.png"
              {:sliceX 4
               :anims {:angry {:from 0 :to 3}}}]
             [:load/sprite :swing "aladdin_swing.png"
              {:sliceX 22
               :anims {:swing {:from 0 :to 21}}}]])

;; 3 Write dem event handlers (re-frame syntax)
;; Events ===
(reg-event
 :comp/jump
 (fn [_ [_ cid]]
   (dispatch-n
    [[:jump cid jump-force]])))

;; 4. A Scenes --- Main Scene - 4.1 Scene Init Function
(defn main-init []
  [[:gravity 1200]
   [:layers [:bg :game, :ui] :game]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:player [[:sprite :idle {:animSpeed 1}]
              [:pos 120 200]
              [:scale 3]
              ; [:body {:jumpForce 320}]
              [:origin :center]
              [:props {:speed 160
                       :animSpeed 0.1}]]]]])

;; Animation Testing
(comment
  (p/play-anims-and-destroy (p/get-component :player) [[:throw :throw 1000 0.13]
                                                       [:run :run 1000 0.08]
                                                       [:run-stop :run-stop 200 0.08]
                                                       [:idle :idle 1000 1]])
  (p/play-anims :player [[:run :run 1000 0.1]
                         [:run-stop :run-stop 200 0.08]
                         [:idle :idle 1000 1]])
  (dispatch [:anim/play :player :throw 0.13])
  (dispatch [:anim/play :player :climb 0.16 false])
  (dispatch [:anim/play :player :angry 0.16 false])
  (dispatch [:anim/play :player :climb 0.16])
  (dispatch [:anim/play :player :jump 0.1])
  (dispatch [:anim/play :player :jump 0.1 false])
  (dispatch [:anim/play :player :run 0.08])
  (dispatch [:anim/play :player :run-stop 0.1 false])
  (dispatch [:anim/play :player :idle 0.3])
  (dispatch [:anim/play :player :swing 0.1])
  (dispatch [:anim/play :player [[:throw :throw 1000 0.1]
                                 [:run :run 1000 0.08]
                                 [:run-stop :run-stop 300 0.08]
                                 [:jump :jump 2000 0.1]
                                 [:parachute :parachute 2000 0.3]
                                 [:idle :idle 1000 0.3]]])
  (dispatch [:anim/play :player :jump 0.2])
  (dispatch [:anim/play :player :parachute 0.13]))

;; ================    Custom Animation event ==========================
;; Two ways to register
;; 1 function that returns a animation side effect
(p/reg-anim
 :anim/example
 (fn [_ [_]]   ;; sprite-id ; anim id    ;; anim duration     ;; anim speed
   (p/play-anims :player [[:throw      :throw        1000                0.13]
                          [:run        :run          1000                0.08]
                          [:run-stop   :run-stop     300                 0.08]
                          [:idle       :idle         1000                0.1]])))

;; data driven
;; 2 function that returns data and behind the scenes, patu takes care of all the
;; side effects
(p/reg-anim
 :anim/example-2
 (fn [_ [_]]
   ;; comp id   ;; sprite-id  ;; anim id   ;; anim duration   ;; anim speed
   [:player     [[:throw       :throw        1000                0.13]
                 [:run         :run          1000                0.08]
                 [:run-stop    :run-stop     300                 0.08]
                 [:jump        :jump         1000                0.1]
                 [:idle        :idle         1000                0.1]]]))

(p/reg-anim
 :player/climb
 (fn [_ [_]]
   ;; comp id   ;; sprite-id  ;; anim id   ;; anim duration   ;; anim speed
   [:player     [[:climb-01    :climb-01     300           0.13]
                 [:climb-02    :climb-02     230           0.15]
                 [:climb-03    :climb-03     230           0.15]
                 [:idle        :idle         300         0.13]]]))
(p/reg-anim
 :player/climb-2
 (fn [_ [_]]
   ;; comp id   ;; sprite-id  ;; anim id   ;; anim duration   ;; anim speed
   [:player     [[:climb    :climb    1300           0.13]
                 [:idle        :idle         300         0.13]]]))

(p/reg-anim
 :player/run
 (fn [_ [_ speed]]
   [:player [[:run :run 2000 speed]]]))

(p/reg-anim
 :player/stop
 (fn [_ [_]]
   [:player [[:run-stop :run-stop 200 0.08]
             [:idle :idle 1000 0.2]]]))

(comment
  (dispatch [:anim/play :player/stop])
  (dispatch [:anim/play :player/run 0.08])
  (dispatch [:anim/play :player/run]))
(comment
  ; (dispatch [:anim/play :anim/example])
  (dispatch [:anim/play :player/climb-2])
  (dispatch [:anim/play :player :climb 0.16])
  (dispatch [:anim/play :anim/example-2]))
;; 4.2 Scene Event Handler
(defn main-evt []
  [[:key-press :space  #(dispatch [:comp/jump :player])]
   [:anim/play :player :idle 0.25]])

;; 4. B Lose Scene ===
(defn lose-init []
  (let [[x y] (p/center)
        score (p/get-component :ui/score)]
    [[:comp/reg-n
      [:ui/score-board [[:text (.-value score) 64]
                        [:pos x y]
                        [:origin :center]]]
      [:ui/score-board [[:text "Press space to restart" 16]
                        [:pos x (+ y 50)]
                        [:origin :center]]]]]) (.changeSprite (p/get-component :player) "throw"))
(defn lose-evt []
  [[:key-press :space #(p/go :scene/main)]])

;; 4,3 Scene Registration
(dispatch-n
 [[:reg-scene :scene/main main-init main-evt]
  [:reg-scene :scene/lose lose-init lose-evt]])

;; 5 Start App
(defn app []
  (dispatch [:start :scene/main]))
