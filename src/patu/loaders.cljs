(ns patu.loaders
  (:require [patu.components :as c :refer [cis action]]
            [patu.utils :refer [js-get]]
            [patu.lib :as lib]
            [goog.object :as obj]
            [patu.cam :as cam]
            [patu.state :refer [game-state]]))

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
