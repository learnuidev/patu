(ns patu.events
  (:require [patu.components :as c :refer [cis action]]
            [patu.utils :refer [js-get]]
            [patu.lib :as lib]
            [goog.object :as obj]
            [patu.cam :as cam]
            [patu.state :refer [game-state]]))

;;
(def evts-store (atom {}))

(defn reg-event [id handler]
  (swap! evts-store assoc id handler))

;;
(defn dispatch [props]
  (if-let [handler (get @evts-store (nth props 0))]
    (handler nil props)
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn key-down [id handler]
  (lib/key-down (:game @game-state) id handler))

(defn key-press [id handler]
  (lib/key-press (:game @game-state) id handler))

(defn key-press-rep [id handler]
  (lib/key-press-rep (:game @game-state) id handler))

(defn key-release [id handler]
  (lib/key-release (:game @game-state) id handler))

(defn key-down? [key]
  (if (vector? key)
    (some (partial lib/key-down? (:game @game-state)) key)
    (lib/key-down? (:game @game-state) key)))

(comment
  (some even? [1 4 6]))
