(ns patu.core
  (:require  ["/kaboom/v06.js" :as kaboom6]))

;; == 1. State
(def state (atom {:k nil}))

;; == 2. Components
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

;; Event Handler Functions
;; == 3. Key handlers
(defn key-down [dir data]
  (if (= js/Function (type data))
    (.keyDown (:k @state) (name dir) data)
    (let [handler (fn [comp]
                    (doseq [[cid props] data]
                      (when-let [comp (get-comp cid)]
                        (doseq [[k v] props]
                          (when (= k :x)
                            (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
                          (when (= k :y)
                            (set! (.. comp -pos -y) (+ (.. comp -pos -y) v)))))))]
      (.keyDown (:k @state) (name dir) handler))))

;; Game Events
;; == 4. Event store
(def evts-store (atom {}))

(defn reg-event [id handler]
  (swap! evts-store assoc id handler))

(defn dispatch [props]
  (if-let [handler (get @evts-store (nth props 0))]
    (handler nil props)
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn dispatch-n [data]
  (doseq [props data]
    (dispatch props)))

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

;; 2. key down
(reg-event
 :key-down
 (fn [_ [_ & comps]]
   (doseq [[dir handler] comps]
     (key-down dir handler))))

;; 3. key press
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

(defn kaboom
  ([]
   (let [game (.default kaboom 6)]
     (swap! state assoc :k game)
     game))
  ([opts]
   (let [game (.default kaboom6 (clj->js opts))]
     (swap! state assoc :k game)
     game)))

(defn load-root [val]
  (.loadRoot (:k @state) val));
(defn load-sprite [id val]
  (.loadSprite (:k @state) (name id) val));
