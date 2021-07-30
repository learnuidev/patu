(ns patu.loaders
  (:require  [patu.state :refer [state]]))

;; Kaboom Helpers
;; === Loaders ===
(defn load-root [val]
  (.loadRoot (:k @state) val));

(defn load-sprite
  "Load a sprite or collection of sprites into the asset manager

  # Usage 1: Load collection of sprites
  (l/load-sprite
   [[:bg,    \"img/bg.png\"]
    [:birdy, \"img/birdy.png\"]
    [:pipe, \"img/pipe.png\"]])

  # Usage 2: Load a single sprite
  (l/load-sprite :birdy \"img\birdy.png\")

  // Usage #3 - slice a spritesheet and add anims manually:
  (load-sprite :froggy \"froggy.png\",
   {:sliceX 4,
    :sliceY 1,
    :anims {:run  {:from 0 :to 3 }
            :jump {:from 3 :to 3 }}})
  "
  ([vals]
   (doseq [[id val] vals]
     (load-sprite id val)))
  ([id val]
   (.loadSprite (:k @state) (name id) val))
  ([id val opts]
   (.loadSprite (:k @state) (name id) val (clj->js opts))));


(defn load-sound
  "Load a sound:
   Usage:
   (load-sound :woosh \"woosh.mp3\")
   "
  ([vals]
   (doseq [[id val] vals]
     (load-sound id val)))
  ([id src]
   (.loadSound (:k @state) (name id) src)))
