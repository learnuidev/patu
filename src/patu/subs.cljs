(ns patu.subs
  (:require [patu.state :as s]))

(comment)
(def state (atom {}))

(comment
  @state)

(defn reg-sub [id handler]
  (swap! state assoc id handler))

(defn sub [props]
  (if-let [handler (get @state (nth props 0))]
    (handler nil props)
    (js/console.warn (str "No subscription handler registered for: " (nth props 0)))))
(comment
  (sub [:comp :player]))
