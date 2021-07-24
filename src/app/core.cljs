(ns app.core
  (:require
   #_[app.examples.level.core :refer [app]]
   #_[app.examples.mario.core :refer [app]]
   #_[app.examples.rpg.core :refer [app]]
   [app.examples.metro.core :refer [app]]))

(defn ^:dev/after-load start []
  (app))

(defn ^:export init []
  (start))
