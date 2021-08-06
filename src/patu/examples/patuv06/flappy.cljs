(ns patu.examples.patuv06.flappy)
  ; (:require ["kaboom/dist/kaboom.cjs" :as  kab]))

(comment)
; (js/console.log kaboom!)
(def state (atom {:components {}}))

(comment
  @state)

(defn kaboom
  ([]
   (let [game (js/kaboom)]
     (swap! state assoc :k game)
     game))
  ([opts]
   (let [game (js/kaboom (clj->js opts))]
     (swap! state assoc :k game)
     game)))

(defn get-comp [id]
  (get-in @state [:components id]))

;; == 1. Events
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

(defn play [id anim-id]
  (when-let [comp (get-comp id)]
    (if (.-play comp)
      (.play comp (name anim-id))
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
  (let [handler (data->fn2 dir data)]
    (.keyDown (:k @state) (name dir) handler)))

(reg-event
 :key-down
 (fn [_ [_ & comps]]
   (println "COMPS" (seq? (second (first comps))))
   (doseq [[dir handler] comps]
     (if (or (vector? handler)
             (map? handler))
       (key-down dir handler)
       (.keyDown (:k @state) (name dir) handler)))))

;; Testing ===

;; Step 1: Initialize
(kaboom {:canvas (js/document.getElementById "app")
         :global true})

;; Step 2: Load Assets
(dispatch-n
 [[:load/root "assets/metro/"]
  [:load/sprite :character "hero/herochar_spritesheet.png"
   {:sliceX 8
    :sliceY 15
    :anims {:lose {:from 0 :to 7}
            :run {:from 8 :to 13}
            :push {:from 16 :to 21}
            :punch {:from 24 :to 27}
            :idle {:from 40 :to 43}
            :jump {:from 48 :to 50}
            :fly {:from 56 :to 58}
            :impact {:from 64 :to 66}
            :djump {:from 72 :to 74}
            :read {:from 80 :to 81}
            :sparkle {:from 88 :to 91}}}]])

;; Step 3: Component registration
(dispatch [:comp/reg
           :player
           [[:sprite :character]
            [:pos [100 100]]
            [:scale 3]]])

(comment
  (play :player :run)
  (play :player :punch)
  (play :player :push)
  (play :player :lose)
  (play :player :idle)
  (play :player :jump)
  (play :player :fly)
  (play :player :impact)
  (play :player :djump)
  (play :player :read)
  (play :player :sparkle))

(reg-event
 :player/move-right
 (fn []
   (let [player (get-in @state [:components :player])]
     (set! (.. player -pos -x) (+ (.. player -pos -x) (* 1 10))))))
(dispatch
 [:key-down
  [:left {:player {:x -10}}]
  [:right #(dispatch [:player/move-right])]])

(play :player :punch)

(defn app [])
