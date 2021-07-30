(ns patu.core
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

;; == 2. Event API
(defn key-down [dir data]
  (println "TYPE: " data)
  (let [handler (fn []
                  (if (= js/Function (type data))
                    (data)
                    (doseq [[cid props] data]
                      (if (= :dispatch cid)
                        (dispatch props)
                        (when-let [comp (get-comp cid)]
                          (doseq [[k v] props]
                            (when (= k :x)
                              (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
                            (when (= k :y)
                              (set! (.. comp -pos -y) (+ (.. comp -pos -y) v)))))))))]
    (.keyDown (:k @state) (name dir) handler)))

;; ==== Event Registation ===
;; 1. Action
(defn action [id handler]
  (when-let [comp (get-comp id)]
    (if (.-action comp)
      (.action comp handler)
      (.action (:k @state) (name id) handler))))

(reg-event
 :action
 (fn [_ [_ & comps]]
   (if (keyword? (first comps))
     (action (first comps) (second comps))
     (doseq [[id handler] comps]
       (action id handler)))))

(reg-event
 :key-down
 (fn [_ [_ & comps]]
   (doseq [[dir handler] comps]
     (if (= js/Function (type handler))
       (handler)
       (key-down dir handler)))))

(reg-event
 :key-press
 (fn [_ [_ id handler]]
   (.keyPress (:k @state) (name id) handler)))

(reg-event
 :comp/reg
 (fn [_ [_ & args]]
   (apply reg-comp args)))

(reg-event
 :comp/reg-n
 (fn [_ [_ datas]]
   (reg-comp-n datas)))

;; ==== Core
(defn kaboom
  ([]
   (let [game (.default kaboom 6)]
     (swap! state assoc :k game)
     game))
  ([opts]
   (let [game (.default kaboom6 (clj->js opts))]
     (swap! state assoc :k game)
     game)))
