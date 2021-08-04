(ns patu.examples.contra
  (:require [patu.core :as p]
            [patu.loaders :as l]
            [patu.events :refer [dispatch dispatch-n]]))

;;
(def main-map ["                                           "
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
               "==============================================    ============="
               "==============================================    ============="])

(defn level-handler []
  {:map main-map
   :width 20
   :height 20
   ; :origin :bottom
   :components  []})

; 1 === Init game ===
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :fullscreen false
         :scale 1
         :debug true
         :clearColor [0,0,0, 0.9]})

;;

;;
(dispatch-n [[:load/root  "assets/contra/"];
             [:load/sprite :bg21, "bg/one.png"];
             [:load/sprite :bg22, "bg/two.png"];
             [:load/sprite :bg23, "bg/three.png"]])
             ;; Hero
             ; [:load/sprite :sprite-player "player/sprite.png"
             ;  {:sliceX 8
             ;   :sliceY 7
             ;   :anims {:lose {:from 0 :to 7}}}]])

(l/load-sprite
 :sprite-player
 "player/sprite.png"
 {:sliceX 8
  :sliceY 7
  :anims {:lose {:from 0 :to 7}}})
;;
(comment
  (dispatch [:anim/play :player :lose])
  (comment
    (p/play :player :lose)
    (.play (p/get-component :player) "lose")))

(p/reg-level :level/one level-handler)

;;
(defn main-init []
  [[:gravity 980]
   [:add-level main-map :level/one]
   [:layers [:background :game, :ui] :game]
   [:origin :botleft]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:player [[:sprite :sprite-player]
              ; [:solid]
              [:pos 160 200]]]]])
              ; [:body]


;;
(defn main-evt []
  [])

;;
(dispatch [:reg-scene :scene/main main-init main-evt])

(defn app []
  (dispatch [:start :scene/main]))
