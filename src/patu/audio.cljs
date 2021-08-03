(ns patu.audio
  (:require [patu.lib :as lib]
            [patu.state :refer [game-state]]))

(defn play [id]
  (lib/play (:game @game-state) id))
