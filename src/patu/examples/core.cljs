(ns patu.examples.core
  (:require
   #_[patu.examples.level.core :refer [app]]
   ; [patu.examples.mario.core :refer [app]]
   #_[patu.examples.rpg.core :refer [app]]
   #_[patu.examples.flappy :refer [app]]
   #_[patu.examples.drive :refer [app]]
   #_[patu.examples.metro.core :refer [app]]
   #_[patu.examples.patuv06.flappy :refer [app]]
   #_[patu.examples.patuv06.contra :refer [app]]
   #_[patu.examples.patuv06.aladdin :refer [app]]
   #_[patu.examples.aladdin :refer [app]]
   #_[patu.examples.patuv06.text :refer [app]]
   [patu.examples.parallax :refer [app]]))
(defn ^:dev/after-load start []
  (app))

(defn ^:export init []
  (start))
