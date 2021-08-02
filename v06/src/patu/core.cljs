(ns patu.core
  (:require  ["/kaboom.js" :as kaboom6]
             [patu.events :as evt]
             [patu.subs :as s]
             [patu.utils :refer [jget-in]]
             [patu.state :refer [state]]
             [patu.loaders]
             [patu.components :as c]
             [patu.audio :as a]))

;; Event
(def dispatch evt/dispatch)
(def dispatch-sync evt/dispatch-sync)
(def dispatch-n evt/dispatch-n)
(def reg-event evt/reg-event)

;; Sub
(def sub s/sub)
(def reg-sub s/reg-sub)

;; Math Helpers
(defn neg [num]
  (* -1 num))

;; Dimensions
(defn height []
  (.height (:k @state)))

(comment
  (height))
(defn width []
  (.width (:k @state)))

;;
(defn center []
  [(/ (width) 2) (/ (height) 2)])

(defn randd [v1 v2]
  (.rand (:k @state) v1 v2))

;; === Scene API
(defn go
  ([id]
   (.go (:k @state) (name id)))
  ([id opts]
   (.go (:k @state) (name id) (clj->js opts))))

(reg-event
 :go
 (fn [_ [_ id opts]]
   (if opts
     (go id opts)
     (go id))))

;; == 1. Component API
(defn reg-comp
  ([data]
   (if (keyword? (nth data 0))
     (.reg_comp (:k @state) (name (nth data 0)) (clj->js (nth data 1)))
     (.reg_comp (:k @state) (clj->js data))))
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

;;
(reg-sub
 :comp
 (fn [_ [_ id & props]]
   (if props
     (jget-in (get-comp id) props)
     (get-comp id))))
(comment
  (get-comp :birdy)
  (get-comp :player))

;; == 2. Event API
;; TODO: Make it general
(defn data->fn  [id data]
  (fn []
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
                (set! (.. comp -pos -y) (+ (.. comp -pos -y) v))))))))))

(defn key-down [dir data]
  ;; (println "TYPE: " data)
  (let [handler (data->fn dir data)]
    (.keyDown (:k @state) (name dir) handler)))

;; ==== Event Registation ===
;; 1. Action
(defn action [id handler]
  (when-let [comp (get-comp id)]
    (if (.-action comp)
      (.action comp handler)
      (.action (:k @state) (name id) handler))))

;;
; (defmethod dispatch :evt/action [[_ id handler]]
;   (when-let [comp (get-component id)]
;     (if (.-action comp)
;       (.action comp handler)
;       (.action (:game @game-state) (name id) handler))))

(reg-event
 :action
 (fn [_ [_ & comps]]
   (if (keyword? (first comps))
     (action (first comps) (second comps))
     (doseq [[id handler] comps]
       (action id handler)))))

;; Components
(reg-event
 :jump
 (fn [_ [_ id value]]
   (if-let [comp (sub [:comp id])]
     (c/jump! comp value)
     (js/console.warn (str "No component found for component ID: " id)))))

;; Audio Events ===
; (defn play [id anim-id]
;   (if (object? id)
;     (.play id (name anim-id))
;     (when-let [comp (get-comp id)]
;       (try
;         (.play comp (name anim-id))
;         (catch js/Error err
;           (js/console.warn err))))))

(comment
  (get-comp :player))

(reg-event
 :anim/play
 (fn [_ [_ pid aid]]
   (when-let [comp (get-comp pid)]
     (.play comp (name aid)))))
(reg-event
 :audio/play
 (fn [_ [_ id]]
   (a/play id)))

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
 :loop
 (fn [_ [_ time handler]]

   (.loop (:k @state) time handler)))

(reg-event
 :layers
 (fn [_ [_ layers main-layer]]
   (.layers (:k @state) (clj->js layers) (name main-layer))))

(reg-event
 :gravity
 (fn [_ [_ value]]
   (.gravity (:k @state) value)))

;;
(comment)
  ; (get-comp :pipe))


(reg-event
 :collides
 (fn [_ [_ [id target] handler]]
   (.collides (get-comp :player) "pipe" handler)))

;;
(defn cam-ignore [game val]
  (.camIgnore game (clj->js val)))

(reg-event
 :cam/ignore
 (fn [_ [_ backgrounds]]
   (.camIgnore (:k @state) (clj->js backgrounds))))

(reg-event
 :comp/reg
 (fn [_ [_ & args]]
   (apply reg-comp args)))

(reg-event
 :comp/reg-n
 (fn [_ [_ datas]]
   (reg-comp-n datas)))

;; === Scene API
(defn scene
  "Use scenes to define different parts of a game, e.g. Game Scene, Start Scene,"
  [game id handler]
  (.scene game (name id) handler))

(defn reg-scene
  "Registers a scene"
  [id {:keys [init evt]}]
  (let [handler (fn [state]
                  (dispatch-n (init state))
                  (dispatch-n (evt state)))]
    (scene (:k @state) id handler)))

;; Scenes are just data
(reg-event
 :reg-scene
 (fn [_ [_ id init evt]]
   (reg-scene  id {:init init :evt evt})))

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

(reg-event
 :kaboom
 (fn [_ args]
   (apply kaboom (rest args))))
