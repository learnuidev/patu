(ns patu.examples.rogue.core
  (:require [patu.core :as p]
            [patu.loaders :as l]))

;;
(p/kaboom {:canvas (js/document.getElementById "app")
           :global true
           :fullscreen false
           :scale 2
           :debug true
           :clearColor [0 0 0 1]})
;; 1. Initialize App
; (p/dispatch-sync [:kaboom {:canvas (js/document.getElementById "app")
;                            :global true
;                            :fullscreen false
;                            :scale 2
;                            :debug true
;                            :clearColor [0 0 0 1]}])

;;

(l/load-root "assets/metro/")
(l/load-sprite :character
               "hero/herochar_spritesheet.png"
               {:sliceX 8
                :sliceY 15
                :anims {:lose {:from 0 :to 7}
                        :run {:from 8 :to 13}
                        :boom {:from 16 :to 21}
                        :nod {:from 24 :to 27}}})
; (p/dispatch-n
;  [[:load/root "assets/metro/"]
;   [:load/sprite :character
;    "hero/herochar_spritesheet.png"
;    {:sliceX 8
;     :sliceY 15
;     :anims {:lose {:from 0 :to 7}
;             :run {:from 8 :to 13}
;             :boom {:from 16 :to 21}
;             :nod {:from 24 :to 27}}}]])
  ; [:load/sprite :tiles "platformer/Tilemap/monochrome_tilemap_transparent_packed.png"
  ;  {:sliceX 20
  ;   :sliceY 20}]])

;;
; (p/reg-event
;  :player/idle
;  (fn [_ [_ player]]
;    (when (or  (not (key-down? [:left :right :x]))
;               (not (c/cur-anim? player :player/attack))
;               (not (c/cur-anim? player :run))
;               (not (c/cur-anim? player :nod)))
;      (p/play :player :player/nod))))

;;
(p/reg-event
 :comp/jump
 (fn [_ [_ cid]]
   [:dispatch [:jump :player 320]]))

(defn cur-anim [id]
  (keyword (.curAnim (p/sub [:comp id]))))

(comment
  (cur-anim :player)
  (js/console.log (.play (p/sub [:comp :player]) "run")))
(comment)
;; 4. Scenes
;; ==== 4.1 Main Scene
(defn main-init []
  [[:layers [:bg :game, :ui] :game]
   [:gravity 1000]
   [:cam/ignore [:ui]]
   [:comp/reg
    [:player [[:sprite :character]
              [:scale 1]
              [:pos 190 90]
              [:origin :botleft]
              ;; [:body]
              {:animSpeed 300}]]]])

(defn main-evt []
  []
  [[:anim/play :player :run]
   [:key-press :space  #(p/dispatch [:comp/jump :player])]])

;; === 4.3 Scene Registration
(p/dispatch-n
 [[:reg-scene :main main-init main-evt]])

(defn app []
  (p/dispatch [:go :main]))
