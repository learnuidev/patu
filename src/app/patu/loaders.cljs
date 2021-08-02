(ns app.patu.loaders
  (:require [app.patu.components :as c :refer [cis action]]
            [app.patu.utils :refer [js-get]]
            [app.patu.lib :as lib]
            [goog.object :as obj]
            [app.patu.cam :as cam]
            [app.patu.state :refer [game-state]]))

(defn load-root
  ([]
   (let [game (:game @game-state)]
     (lib/load-root game)))
  ([url]
   (let [game (:game @game-state)]
     (lib/load-root game url))))

(defn load-sprite
  ([title url opts]
   (let [game (:game @game-state)]
     (lib/load-sprite game title url opts)))
  ([title url]
   (let [game (:game @game-state)]
     (lib/load-sprite game title url))))

(defn load-aseprite [title url url2]
  (lib/load-aseprite (:game @game-state) title url url2))

(defn load-sound! [game id src]
  (.loadSound game (name id) src))

(defn load-sound [id src]
  (load-sound! (:game @game-state) id src))
