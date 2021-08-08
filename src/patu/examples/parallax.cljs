(ns patu.examples.parallax
  (:require [patu.core :as p]
            [patu.events :refer [dispatch reg-event dispatch-n]]))
;; 0 Assets
(def main-map ["                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                        #                                "

               "                             ^   ^    ()                       "
               "=================="])

(defn level-handler []
  {:map main-map
   :width 32
   :height 32
   ; :origin :bottom
   :components  [[:=
                  [:sprite :tileset {:frame 40}]
                  [:solid]]]})

; 1 === Init game ===
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :fullscreen false
         :width 576
         :height 324
         :scale 1
         :debug true
         :clearColor [0,0,0, 0.9]})

;; 2 === Load resources ===
(dispatch-n [[:load/root  "assets/"];
             [:load/sprite
              [:tileset, "swamp/tiles/Tileset.png"
               {:sliceX 10
                :sliceY 6}];
              [:bg1, "swamp/backgrounds/Layers/1.png"]
              [:bg2, "swamp/backgrounds/Layers/2.png"]
              [:bg3, "swamp/backgrounds/Layers/3.png"]
              [:bg4, "swamp/backgrounds/Layers/4.png"]
              [:bg5, "swamp/backgrounds/Layers/5.png"]
              [:idle "aladdin/aladdin_idle.png"
               {:sliceY 2
                :anims {:idle {:from 0 :to 1}}}]
              [:run "aladdin/aladdin_running.png"
               {:sliceX 11
                :anims {:run {:from 0 :to 10}}}]
              [:run-stop "aladdin/aladdin_running_stop.png"
               {:sliceX 7
                :anims {:run-stop {:from 0 :to 6}}}]]])

(p/reg-level
 :level/one
 (fn []
   {:map main-map
    :width 32
    :height 32
    :components  [[:=
                   [:sprite :tileset {:frame 1}]
                   [:solid]]]}))

;;
(defn main-init []
  [[:gravity 980]
   [:add-level main-map :level/one]
   [:layers [:bg1 :bg2 :bg3 :bg4 :game :bg5 :ui] :game]
   [:parallax [[:bg2 1]
               [:bg3 2]
               [:bg4 3]
               [:bg5 4]]]
   [:comp/reg-n
    [[:sprite :bg1]
     [:layer :bg1]
     [:pos 0 0]
     [:props :bg1]]
    [[:sprite :bg1]
     [:layer :bg1]
     [:pos (* 2 (js/width)) 0]
     [:props :bg1]]
    [[:sprite :bg2]
     [:layer :bg2]
     [:pos 0 0]
     [:props :bg2]]
    [[:sprite :bg2]
     [:layer :bg2]
     [:pos (js/width) 0]
     [:props :bg2]]
    [[:sprite :bg2]
     [:layer :bg2]
     [:pos (* 2 (js/width)) 0]
     [:props :bg2]]
    [[:sprite :bg2]
     [:layer :bg2]
     [:pos (* 3 (js/width)) 0]
     [:props :bg2]]
    [[:sprite :bg3]
     [:layer :bg3]
     [:pos 0 0]
     [:props :bg3]]
    [[:sprite :bg3]
     [:layer :bg3]
     [:pos (js/width) 0]
     [:props :bg3]]
    [[:sprite :bg3]
     [:layer :bg3]
     [:pos (* (js/width) 2) 0]
     [:props :bg3]]
    [[:sprite :bg3]
     [:layer :bg3]
     [:pos (* (js/width) 3) 0]
     [:props :bg3]]
    [[:sprite :bg4]
     [:layer :bg4]
     [:pos 0 0]
     [:props :bg4]]
    [[:sprite :bg4]
     [:layer :bg4]
     [:pos (js/width) 0]
     [:props :bg4]]
    [[:sprite :bg4]
     [:layer :bg4]
     [:pos (* 2 (js/width)) 0]
     [:props :bg4]]
    [[:sprite :bg4]
     [:layer :bg4]
     [:pos (* 3 (js/width)) 0]
     [:props :bg4]]
    [[:sprite :bg5]
     [:pos 0 0]
     [:layer :bg5]
     [:props :bg5]]
    [[:sprite :bg5]
     [:pos (js/width) 0]
     [:layer :bg5]
     [:props :bg5]]
    [[:sprite :bg5]
     [:pos (* 2 (js/width)) 0]
     [:layer :bg5]
     [:props :bg5]]
    [[:sprite :bg5]
     [:pos (* 3 (js/width)) 0]
     [:layer :bg5]
     [:props :bg5]]
    [:player [[:sprite :idle]
              [:pos 120 0]
              [:scale 2.3]
              [:body {:jumpForce 320}]
              [:origin :center]
              [:props {:speed 160}]]]]])

;; ==== Testing Animation
(p/reg-anim
 :player/run
 (fn [_ [_ speed]]
   [:player [[:run :run 2000 speed]]]))

;;
(p/reg-anim
 :player/stop
 (fn [_ [_]]
   [:player [[:idle :idle 1000 0.2]]]))
;; Animation Testing
(comment
  (dispatch [:anim/play :player/stop])
  (dispatch [:anim/play :player/run 0.08])
  (dispatch [:anim/play :player/run]))

(defn main-action []
  [[:anim/play :player :idle 0.25]
   [:key-release
    [:right  #(dispatch [:anim/play :player/stop])]]
   [:key-press
    [:right #(dispatch [:anim/play :player/run 0.1])]]])

(comment)
;; 5 === Register a new scene by passing a scene id and a handler fn
(p/reg-scene :scene/main {:init main-init :evt main-action})
(defn app []
  (p/start :scene/main)
  (js/console.log "hello patu"))
