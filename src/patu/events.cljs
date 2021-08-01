(ns patu.events
  (:require  [patu.state :refer [state]]))

;;
(defn get-comp [id]
  (.get_comp (:k @state) (name id)))

(defn browse-comps []
  (js->clj (.-components (.-state (:k @state)))
           :keywordize-keys true))
(defn browse-comps-raw []
  (.-components (.-state (:k @state))))
(comment
  (browse-comps-raw)
  (:x (:player (browse-comps)))
  (.-x (.-pos (.-player (browse-comps-raw)))))

(comment
  (get-comp :ui/score))
;; Game Events
;; == 4. Event store
(def evts-store (atom {}))

(defn reg-event [id handler]
  ;; Check if event is already registered
  (if (get @evts-store id)
    (swap! evts-store update id conj handler)
    (swap! evts-store assoc id [handler])))

(comment

  @evts-store
  (swap! evts-store assoc :foo [])
  (swap! evts-store update :foo conj 1)
  (swap! evts-store conj :foo 2))
(comment
  @evts-store)

;;
(defn data->fn  [cid data]
  (when-let [comp (get-comp cid)]
    (doseq [[k v] data]
      (when (= k :x)
        (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
      (when (= k :y)
        (set! (.. comp -pos -y) (+ (.. comp -pos -y) v)))
      (when (= k :value)
        (set! comp -value v))
      (when (= k :value)
        (set! comp -text v)))))

;;
; (defn data->fn  [id data]
;   (fn []
;     (if (= js/Function (type data))
;       (data)
;       (doseq [[cid props] data]
;         (if (= :dispatch cid)
;           (dispatch props)
;           (when-let [comp (get-comp cid)]
;             (doseq [[k v] props]
;               (when (= k :x)
;                 (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
;               (when (= k :y)
;                 (set! (.. comp -pos -y) (+ (.. comp -pos -y) v))))))))))


(defn dispatch-sync [props]
  (if-let [handlers (get @evts-store (nth props 0))]
    (doseq [handler handlers]
      (handler nil props))
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn dispatch [props]
  (if-let [handlers (get @evts-store (nth props 0))]
    (doseq [handler handlers]
      (let [res (handler (browse-comps-raw) props)]
        (when (vector? res)
          ; (println "RES: " res)
          (when (keyword? (first res))
            (if (= :dispatch (first res))
              (dispatch (second res))
              (if (= :dispatch-n (first res))
                (doseq [evt-vec (second res)]
                  (dispatch evt-vec))
                (data->fn (first res) (second res))))))
        (when (map? res)
          (doseq [[k v] res]
            (when (keyword? k)
              (if (= :dispatch k)
                (dispatch v)
                (data->fn k v)))))))
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn dispatch-n [data]
  (doseq [props data]
    (dispatch props)))
