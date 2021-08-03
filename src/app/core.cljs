(ns app.core
  (:require
   #_[app.examples.level.core :refer [app]]
   #_[app.examples.mario.core :refer [app]]
   #_[app.examples.rpg.core :refer [app]]
   [app.examples.flappy :refer [app]]
   #_[app.examples.drive :refer [app]]
   #_[app.examples.metro.core :refer [app]]
   #_[app.examples.patuv06.one :refer [app]]))

(defn ^:dev/after-load start []
  (app))

(defn ^:export init []
  (start))
