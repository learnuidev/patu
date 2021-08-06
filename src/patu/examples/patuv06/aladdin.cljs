(ns patu.examples.patuv06.aladdin)

;; 1. State
(def state (atom {:components {}}))

;; State API
(defn get-comp [id]
  (get-in @state [:components id]))

(comment
  @state)

;; Init function
(defn kaboom
  ([]
   (let [game (js/kaboom)]
     (swap! state assoc :k game)
     game))
  ([opts]
   (let [game (js/kaboom (clj->js opts))]
     (swap! state assoc :k game)
     game)))

;; == 2. Events
(def evts-store (atom {}))

(defn reg-event [id handler]
  ;; Check if event is already registered
  (if (get @evts-store id)
    (swap! evts-store update id conj handler)
    (swap! evts-store assoc id [handler])))

(reg-event
 :kaboom
 (fn [_ args]
   (apply kaboom (rest args))))

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

(defn dispatch-sync [props]
  (if-let [handlers (get @evts-store (nth props 0))]
    (doseq [handler handlers]
      (handler nil props))
    (js/console.log (str "No event handler registered for: " (nth props 0)))))

(defn dispatch [props]
  (if-let [handlers (get @evts-store (nth props 0))]
    (doseq [handler handlers]
      (let [res (handler nil props)]
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

;; ===================================  Loaders ================================
(defn load-root [url]
  (.loadRoot (:k @state) url))

(reg-event
 :load/root
 (fn [_ [_ url]]
   (load-root url)))

;;
(defn load-sprite
  "Load a sprite or collection of sprites into the asset manager

  # Usage 1: Load collection of sprites
  (l/load-sprite
   [[:bg,    \"img/bg.png\"]
    [:birdy, \"img/birdy.png\"]
    [:pipe, \"img/pipe.png\"]])

  # Usage 2: Load a single sprite
  (l/load-sprite :birdy \"img\birdy.png\")

  // Usage #3 - slice a spritesheet and add anims manually:
  (load-sprite :froggy \"froggy.png\",
   {:sliceX 4,
    :sliceY 1,
    :anims {:run  {:from 0 :to 3 }
            :jump {:from 3 :to 3 }}})
  "
  ([vals]
   (doseq [[id val] vals]
     (load-sprite id val)))
  ([id url]
   (.loadSprite (:k @state) (name id) url))
  ([id url opts]
   (.loadSprite (:k @state) (name id) url (clj->js opts))));

(reg-event
 :load/sprite
 (fn [_ opts]
   (apply load-sprite (rest opts))))

;; ===================================  Components ================================
; (defmulti create-component (fn [data] (first data)))
(defmulti create-component (fn [props] (nth props 0)))

(defmethod create-component :sprite [[_ id opts]]
  (if opts
    (.sprite (:k @state) (name id) (clj->js opts))
    (.sprite (:k @state) (name id))))

(defmethod create-component :pos [[_ x y]]
  (if y
    (.pos (:k @state) x y)
    (if (vector? x)
      (.pos (:k @state) (first x) (second x))
      (.pos (:k @state) x x))))

(defmethod create-component :body [[_ v]]
  (.body (:k @state)))

(defmethod create-component :scale [[_ v]]
  (.scale (:k @state) (or v 1)))

;;
(defmethod create-component :solid []
  (.solid (:k @state)))
(defmethod create-component :prop [[_ val]]
  (clj->js val))

;;
(defn create-components [props]
  (clj->js (for [prop props]
             (create-component prop))))

;; =============
(defn reg-comp [id datas]
  (let [comps (for [data datas]
                (create-component data))]
    (let [game-obj (.add (:k @state) (clj->js comps))]
      (swap! state assoc-in [:components id] game-obj))))
;;
(reg-event
 :comp/reg
 (fn [_ [_ id data]]
   (reg-comp id data)))

(reg-event
 :action
 (fn [_ [_ id handler]]
   (if handler
     (when-let [comp  (get-comp id)]
       (.action comp handler))
     (.action (:k @state) id))))
;;
;;
(defn cur-anim [comp]
  (keyword (.curAnim comp)))

(defn cur-anim? [cid anim]
  (let [comp (get-comp cid)]
    (= (cur-anim comp) anim)))

(defn play [id anim-id]
  (when-let [comp (get-comp id)]
    (if (.-play comp)
      (when (not (cur-anim? id anim-id))
        (.play comp (name anim-id)))
      (js/console.warn "Animation not found"))))

;;
(reg-event
 :anim/play
 (fn [_ [_ pid anim-id]]
   (when-let [comp (get-com pid)]
     (try
       (.play comp (name anim-id))
       (catch js/Error err
         ;; change sprite then
         (.changeSprite comp (name anim-id))
         (.play comp (name anim-id)))))))
       ; (js/console.log "ANIMATION NOT FOUND")))))

; (reg-event
;  :anim/play
;  (fn [_ [_ id anim-id]]
;    (when-let [comp (get-comp id)]
;      (if (.-play comp)
;        (.play comp (name anim-id))
;        (js/console.warn "Animation not found")))))

;; ========= Key Event Handlers ====
(defn data->fn2 [id data]
  (js/console.log "DATA" data)
  (fn []
    (doseq [[cid props] data]
      (if (= :dispatch cid)
        (dispatch props)
        (when-let [comp (get-comp cid)]
          (doseq [[k v] props]
            (when (= k :x)
              (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
            (when (= k :y)
              (set! (.. comp -pos -y) (+ (.. comp -pos -y) v)))))))))

(defn key-down [dir data]
  ;; (println "TYPE: " data)
  (if (vector? dir)
    (doseq [d dir]
      (key-down d data))
    (let [handler (data->fn2 dir data)]
      (.keyDown (:k @state) (name dir) handler))))

(defn key-press [dir data]
  ;; (println "TYPE: " data)
  (if (vector? dir)
    (doseq [d dir]
      (key-press d data))
    (let [handler (data->fn2 dir data)]
      (.keyPress (:k @state) (name dir) handler))))

(defn key-pressed? [key]
  (.keyIsPressed (:k @state) (name key)))

(defn key-pressed-rep? [key]
  (.keyIsPressedRep (:k @state) (name key)))

(defn key-is-down [key]
  (.keyIsDown (:k @state) (name key)))

(defn key-down? [key]
  (if (and (vector? key)
           (= (nth key 0) :and))
    (let [args (rest key)]
      (->> args
           (every? (fn [arg]
                     (if (= :not (nth arg 0))
                       (not (key-down? (nth arg 1)))
                       (key-down? arg))))))
    (if (and (vector? key)
             (= (nth key 0) :or))
      (let [args (rest key)]
        (->> args
             (some (fn [arg]
                     (if (= :not (nth arg 0))
                       (not (key-down? (nth arg 1)))
                       (key-down? arg))))))
      (if (map? key)
        (when-let [orr (:or key)]
          (some key-down orr))
        (if (vector? key)
          (if (vector? (nth key 0))
            (some key-down? key)
            (every? key-is-down key))
          (key-is-down key))))))

(defn key-release [dir data]
  (if (vector? dir)
    (doseq [d dir]
      (key-release d data))
    (let [handler (data->fn2 dir data)]
      (.keyRelease (:k @state) (name dir) handler))))

(reg-event
 :key/down
 (fn [_ [_ & comps]]
   (println "COMPS" (seq? (second (first comps))))
   (doseq [[dir handler] comps]
     (if (or (vector? handler)
             (map? handler))
       (key-down dir handler)
       (.keyDown (:k @state) (name dir) handler)))))

(reg-event
 :key/press
 (fn [_ [_ & comps]]
   (println "COMPS" (seq? (second (first comps))))
   (doseq [[dir handler] comps]
     (if (or (vector? handler)
             (map? handler))
       (key-press dir handler)
       (if (vector? dir)
         (doseq [d dir]
           (.keyPress (:k @state) (name d) handler))
         (.keyPress (:k @state) (name dir) handler))))))

;;
(reg-event
 :key/release
 (fn [_ [_ & comps]]
   (println "COMPS" (seq? (second (first comps))))
   (doseq [[dir handler] comps]
     (if (or (vector? handler)
             (map? handler))
       (key-release dir handler)
       (if (vector? dir)
         (doseq [d dir]
           (.keyRelease (:k @state) (name d) handler))
         (.keyRelease (:k @state) (name dir) handler))))))

;; Testing ===

;; Step 1: Initialize
(kaboom {:canvas (js/document.getElementById "app")
         :global true})

;; Step 2: Load Assets
;; ==================================== Animation Tutorial ======================
(dispatch-n
 [[:load/root "assets/aladdin/"]
  ; [:load/sprite :tiles "tiles/one.png"
  ;  {:sliceX 25 :sliceY 25}]
  [:load/sprite :character "aladdin_running.png"
   {:sliceX 11
    :anims {:run {:from 0 :to 10}}}]])

;;

;; Step 3: Component registration
(dispatch [:comp/reg
           :player
           [[:sprite :character]
            [:pos [100 100]]
            [:scale 3]
            [:prop {:animSpeed 0.3}]]])

(comment
  (play :player :idle)
  (play :player :run))

(.play (get-comp :player) "run")
; (play :player :run)

(defn app [])
