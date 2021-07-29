(ns app.patu.audio
  (:require [app.patu.lib :as lib]
            [app.patu.state :refer [game-state]]))

(defn play [id]
  (lib/play (:game @game-state) id))
