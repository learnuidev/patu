(ns patu.subs
  (:require [patu.state :as s]
            [patu.utils :as u]))

;;
(defn browse-comps-raw []
  (.-components (.-state (:k @s/state))))

(comment)
(def state (atom {}))

(comment
  @state)

(defn reg-sub [id handler]
  (swap! state assoc id handler))

(comment
  ())
(defn sub [props]
  (if-let [handler (get @state (nth props 0))]
    (handler (browse-comps-raw) props)
    (js/console.warn (str "No subscription handler registered for: " (nth props 0)))))
(comment
  (sub [:comp :player]))
