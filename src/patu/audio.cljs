(ns patu.audio
  (:require [patu.state :refer [state]]))

(defn play [id]
  (.play (:k @state) (name id)))
