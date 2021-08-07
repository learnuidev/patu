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
               "                   %   =*=%=                                    "
               "                                                       "
               "                                      -+                       "
               "                             ^   ^    ()                       "
               "==============================================    ============="])

(defn level-handler []
  {:map main-map
   :width 20
   :height 20
   ; :origin :bottom
   :components  [[:=
                  [:sprite :tileset {:frame 40}]
                  [:solid]]]})

; 1 === Init game ===
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :fullscreen false
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
                :anims {:idle {:from 0 :to 1}}}]]])

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
   [:comp/reg-n
    [:bg1 [[:sprite :bg1]
           [:layer :bg1]
           [:props :bg1]]]
    [:bg2 [[:sprite :bg2]
           [:layer :bg2]
           [:props :bg2]]]
    [:bg3 [[:sprite :bg3]
           [:layer :bg3]
           [:props :bg3]]]
    [:bg4 [[:sprite :bg4]
           [:scale (/ (p/width) 240) (/ (p/height) 240)]
           [:layer :bg4]
           [:props :bg4]]]
    [:bg5 [[:sprite :bg5]
           [:scale (/ (p/width) 240) (/ (p/height) 240)]
           [:layer :bg5]
           [:props :bg5]]]
    [:player [[:sprite :idle]
              [:pos 120 0]
              [:scale 1]
              [:body {:jumpForce 320}]
              [:origin :center]
              [:props {:speed 160}]]]]])

(defn main-action []
  [[:anim/play :player :idle 0.25]])

;; 5 === Register a new scene by passing a scene id and a handler fn
(p/reg-scene :scene/main {:init main-init :evt main-action})
(defn app []
  (p/start :scene/main)
  (js/console.log "hello patu"))
