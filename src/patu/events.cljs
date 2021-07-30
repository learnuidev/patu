(ns patu.events
  (:require  [patu.state :refer [state]]))

;; Game Events
;; == 4. Event store
(def evts-store (atom {}))

(defn reg-event [id handler]
  (swap! evts-store assoc id handler))

(comment
  @evts-store)

(defn dispatch [props]
  (if-let [handler (get @evts-store (nth props 0))]
    (handler nil props)
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn dispatch-n [data]
  (doseq [props data]
    (dispatch props)))
