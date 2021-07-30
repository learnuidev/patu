(ns patu.components
  (:require  ["/kaboom/v06.js" :as kaboom6]
             [patu.events :refer [dispatch reg-event]]
             [patu.state :refer [state]]))

;; == 1. Component API
(defn reg-comp
  ([data]
   (.reg_comp (:k @state) (clj->js data)))
  ([id data]
   (.reg_comp (:k @state) (name id) (clj->js data))))

(defn reg-comp-n
  [datas]
  (doseq [data datas]
    (if (map? data)
      (reg-comp data))
    (let [[id props] data]
      (if (keyword? id)
        (reg-comp id props)
        (reg-comp data)))))

(defn get-comp [id]
  (.get_comp (:k @state) (name id)))

(comment
  (get-comp :birdy)
  (get-comp :player))
