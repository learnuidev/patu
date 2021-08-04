(ns patu.examples.patuv06.contra)

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
  ([id val]
   (.loadSprite (:k @state) (name id) val))
  ([id val opts]
   (.loadSprite (:k @state) (name id) val (clj->js opts))));

(reg-event
 :load/sprite
 (fn [_ opts]
   (apply load-sprite (rest opts))))

;; ===================================  Components ================================
(defmulti create-component (fn [data] (first data)))

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
(defmethod create-component :scale [[_ v]]
  (.scale (:k @state) v))

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

(reg-event
 :anim/play
 (fn [_ [_ id anim-id]]
   (when-let [comp (get-comp id)]
     (if (.-play comp)
       (.play comp (name anim-id))
       (js/console.warn "Animation not found")))))

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
(dispatch-n
 [[:load/root "assets/contra/"]
  [:load/sprite :character "player/sprite.png"
   {:sliceX 8
    :sliceY 7
    :anims {:idle {:from 0 :to 5}
            :run {:from 6 :to 13}
            :duck {:from 14 :to 14}
            :shoot {:from 18 :to 19}
            :shoot-up {:from 20 :to 21}
            :shoot-duck {:from 22 :to 23}
            :shoot-run {:from 24 :to 31}
            :shoot-up-run {:from 32 :to 39}
            :jump-shoot {:from 40 :to 41}
            :jump-shoot-up {:from 42 :to 43}
            :death {:from 44 :to 51}}}]])

;;

;; Step 3: Component registration
(dispatch [:comp/reg
           :player
           [[:sprite :character]
            [:pos [100 100]]
            [:scale 2]]])

(comment
  (play :player :idle)
  (play :player :run)
  (play :player :duck)
  (play :player :shoot)
  (play :player :shoot-up)
  (play :player :shoot-duck)
  (play :player :shoot-run)
  (play :player :shoot-up-run)
  (play :player :jump-shoot)
  (play :player :jump-shoot-up)
  (play :player :death))

(comment
  (.flipX (get-comp :player) true)
  (.flipX (get-comp :player) false))
(reg-event
 :player/move-right
 (fn []
   (let [player (get-in @state [:components :player])]
     (set! (.. player -pos -x) (+ (.. player -pos -x) (* 0.3 10)))
     (.flipX (get-comp :player) false)
     (when (not (or (and (key-down? :s) (key-down? :left))
                    (and (key-down? :s) (key-down? :right))))
       (play :player :run)))))
(reg-event
 :player/move-left
 (fn []
   (let [player (get-in @state [:components :player])]
     (set! (.. player -pos -x) (+ (.. player -pos -x) (* -0.3 10)))
     (.flipX (get-comp :player) true)
     (when (not (key-down? [[:s :left] [:s :right]]))
       (play :player :run)))))

(reg-event
 :play/shoot
 (fn []
   (when (not (key-down? [:or
                          [[:s :left] [:s :right]]
                          [[:s :left :a] [:s :right :a]]]))
     (play :player :shoot))))
;; Key down events
(dispatch
 [:key/down
  [:left  #(dispatch [:player/move-left])]
  [:right #(dispatch [:player/move-right])]])

;; Key down events
(dispatch
 [:key/press
  [:s  #(dispatch [:play/shoot])]])

(dispatch
 [:key/release
  [[:s :left :right]  #(play :player :idle)]])

(dispatch
 [:action
  (fn []
    (when  (key-down? [:and
                       [[:s :left] [:s :right]]
                       [:not
                        [[:s :right :up]
                         [:s :left :up]]]])
      (play :player :shoot-run)))])

(dispatch
 [:action
  (fn []
    (when (key-down? [[:s :right :up]
                      [:s :left :up]])
      (play :player :shoot-up-run)))])

(play :player :idle)

(defn app [])
