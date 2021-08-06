(ns patu.examples.contra.core
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]
   [patu.utils :refer [js-get]]
   ;; Event System
   [patu.events :refer [dispatch reg-event key-down?]]
   ;; ======= Game =======
   ;; 1. Assets
   [patu.examples.contra.assets :refer [main-map level-handler level-two-handler]]
   ;; 2. Events
   [patu.examples.contra.events]
   ;; 3. Scenes
   [patu.examples.contra.scenes.one :as one]
   [patu.examples.contra.scenes.two :as two]))

(comment
  (js/console.clear)
  (doc p/start)
  (doc p/init))

;; Step 1: Initialize Game
(p/init {:canvas (js/document.getElementById "app")
         :fullscreen true
         :scale 2
         :debug true
         :clearColor [0 0 0 1]})
;; Load Assets
(l/load-root "assets/metro/")
(l/load-sprite :bg0 "tiles/bg_0.png")
(l/load-sprite :bg1 "tiles/bg_1.png")
(l/load-sprite :bg2 "tiles/bg_2.png")
(l/load-sprite :fg0 "tiles/fg_1.png")
(l/load-sprite
 :tiles
 "tiles/tileset32.png"
 {:sliceX 12
  :sliceY 6})

(l/load-sprite
 :coin
 "misc/coin_anim_strip_6.png"
 {:sliceX 6
  :anims {:coin {:from 0 :to 5}}})

(l/load-sprite
 :coin-pickup
 "misc/coin_pickup_anim_strip_6.png"
 {:sliceX 6
  :anims {:coin-pickup {:from 0 :to 5}}})

(l/load-sprite
 :door/closed
 "misc/strange_door_closed_anim_strip_10.png"
 {:sliceX 10
  :anims {:door/closed {:from 0 :to 9}}})
(l/load-sprite
 :door-open
 "misc/strange_door_opening_anim_strip_14.png"
 {:sliceX 14
  :anims {:door-open {:from 0 :to 13}}})

;;
(l/load-sprite :trap/suspended
               "misc/trap_suspended_anim_strip_18.png"
               {:sliceX 18
                :anims {:pendulum {:from 0 :to 17}}})

(l/load-sprite :explosion
               "misc/explosion_anim_strip_10.png"
               {:sliceX 10
                :anims {:explosion {:from 0 :to 9}}})
(l/load-sprite :tiki-torch
               "misc/tiki_torch_props_strip_12.png"
               {:sliceX 12
                :anims {:tiki-torch {:from 0 :to 11}}})
;;
(l/load-sprite :orb-anim
               "misc/orb_anim_strip_6.png"
               {:sliceX 6
                :anims {:orb-anim {:from 0 :to 5}}})
(l/load-sprite :orb-pickup
               "misc/orb_collected_anim_strip_5.png"
               {:sliceX 5
                :anims {:orb-pickup {:from 0 :to 4}}})

(l/load-sprite :wooden-plate "misc/wooden_plate.png")
(l/load-sprite :flower-props "misc/flowers_props.png")
(l/load-sprite :grass-props "misc/grass_props.png")

;; Lever
(l/load-sprite :lever-right "misc/lever_turned_right.png")
(l/load-sprite :lever-left "misc/lever_turned_left.png")

;
(l/load-sprite
 :bird
 "fauna/bird_flying_anim_strip_3.png"
 {:sliceX 3
  :anims {:flying {:from 0 :to 2}}})

;; === CHaracter Animations ===
(l/load-sprite :character
               "hero/herochar_idle_anim_strip_4.png"
               {:sliceX 4
                :anims {:idle {:from 0 :to 3}}})

(l/load-sprite :character/tileset
               "hero/herochar_spritesheet.png"
               {:sliceX 8
                :sliceY 15
                :anims {:player/lose {:from 0 :to 7}
                        :player/run {:from 8 :to 13}
                        :player/boom {:from 16 :to 21}
                        :punch {:from 24 :to 27}
                        :player/nod {:from 40 :to 43}
                        :jump {:from 48 :to 50}
                        :fly {:from 56 :to 58}
                        :impact {:from 64 :to 66}
                        :djump {:from 72 :to 74}
                        :read {:from 80 :to 81}
                        :sparkle {:from 88 :to 91}}})

(l/load-sprite :character/attack
               "hero/herochar_sword_attack_anim_strip_4.png"
               {:sliceX 4
                :anims {:attack {:from 0 :to 3}}})

(l/load-sprite :character/death
               "hero/herochar_death_anim_strip_8.png"
               {:sliceX 8
                :anims {:attack {:from 0 :to 7}}})

(l/load-sprite :character/hit
               "hero/herochar_hit_anim_strip_3.png"
               {:sliceX 3
                :anims {:attack {:from 0 :to 2}}})

;; Enemies
;; 1. Worm = 3 Animations
(l/load-sprite :worm-walk
               "enemies/worm/worm_walk_anim_strip_6.png"
               {:sliceX 6
                :anims {:worm-walk {:from 0 :to 5}}})
(l/load-sprite :worm-hit
               "enemies/worm/worm_hit_anim_strip_3.png"
               {:sliceX 3
                :anims {:worm-hit {:from 0 :to 2}}})
(l/load-sprite :worm-death
               "enemies/worm/worm_death_anim_strip_6.png"
               {:sliceX 6
                :anims {:worm-death {:from 0 :to 5}}})
;; ===
;; 2. Slime
(l/load-sprite :slime-walk
               "enemies/slime/slime_walk_anim_strip_15.png"
               {:sliceX 15
                :anims {:slime-walk {:from 0 :to 14}}})

;;
(defn sleep [f ms]
  (js/setTimeout f ms))

(defn change-sprite
  [[id sid aid]]
  (when-let [comp (p/get-component id)]
    (.changeSprite comp (name sid))
    (when aid
      (p/play id aid))))

(defn change-sprite-and-destroy
  [comp sid aid]
  (.changeSprite comp (name sid))
  (when aid
    (p/play comp aid))
  (sleep #(p/destroy comp) 600))

(defn attack
  "Triggers attack animation"
  [id]
  (when-let [comp (p/get-component id)]
    (when (not (c/cur-anim? comp :attack))
      (.changeSprite comp (name :character/attack))
      (p/play id :attack)
      (sleep #(change-sprite [:player :character/tileset :player/nod])
             300))))

(comment
  "=== List of Game Animations === "
  (p/play :player :player/lose)
  (p/play :player :player/run)
  (p/play :player :player/boom)
  (p/play :player :player/nod)
  (p/play :player :player/attack)
  (attack :player))

(comment
  "Flipping Player Tutorial:"
  (.flipX (p/get-component :player) -1)
  (.flipX (p/get-component :player) 1))
;;
(p/reg-level :level/main level-handler)
(p/reg-level :level/two level-two-handler)

;;
(comment
  (c/cur-anim? (p/get-component :player) :player/run)
  (c/cur-anim (p/get-component :player))
  (js/console.log (p/get-component :player))
  (set! (p/get-component :player) -animSpeed 0.2))

;; Scenees
(p/reg-scene :scene/one {:init one/init
                         :evt one/event})

(p/reg-scene :scene/two {:init two/init
                         :evt two/event})
(p/reg-scene :scene/lose {:init (fn [score]
                                  (let [[x y] (p/center)]
                                    [[:comp/reg-n
                                      [:dialog
                                       [[:text score 40]
                                        [:origin :center]
                                        [:pos [x y]]]]
                                      [:dialog-2
                                       [[:text "Press space to restart" 10]
                                        [:origin :center]
                                        [:pos [x (+ 80 y)]]]]]]))
                          :evt (fn []
                                 [[:evt/key-press :space #(p/go :scene/one)]])})

(defn app []
  #_(p/start :scene/one)
  (p/go :scene/one))
