(ns patu.examples.core
  (:require
   #_[patu.examples.level.core :refer [app]]
   #_[patu.examples.mario.core :refer [app]]
   #_[patu.examples.rpg.core :refer [app]]
   [patu.examples.flappy :refer [app]]
   #_[patu.examples.drive :refer [app]]
   #_[patu.examples.metro.core :refer [app]]
   #_[patu.examples.patuv06.one :refer [app]]))

(defn ^:dev/after-load start []
  (app))

(defn ^:export init []
  (start))
