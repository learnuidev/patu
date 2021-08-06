(ns patu.core
  (:require [patu.components :as c :refer [cis action]]
            [patu.utils :refer [js-get]]
            [patu.lib :as lib]
            [patu.events :as evt]
            [patu.audio :as a]
            [goog.object :as obj]
            [patu.cam :as cam]
            [patu.state :refer [game-state]]
            [patu.loaders :as l]
            ["kaboom/dist/kaboom.cjs" :as  kaboom05]))

;; Declarations
(declare play-anims)
(defmulti dispatch (fn [args] (nth args 0)))

;; === ***math** ===
(defn vec2
  [[val val2]]
  (lib/vec2 (:game @game-state) val (or val2 val)))

(defn rgb
  ([r g b] (rgb r g b 1))
  ([r g b a]
   (.rgb (:game @game-state) r g b a)))

(defn rgba [r g b a]
  (.rgba (:game @game-state) r g b a))

(defn rand-seed  [val]
  (.randSeed (:game @game-state) val))

(defn make-rng
  "create a seedable random number generator
  usage: (make-rng (js/Date.now))
  "
  [val]
  (.makeRng (:game @game-state) val))

(defn choose
  "Get random element from array"
  [coll]
  (.choose (:game @game-state) coll))

(defn chance
  [num]
  (.chance (:game @game-state) num))

(defn lerp
  "Linear interpolation"
  [frm to t]
  (.lerp (:game @game-state) frm to t))

; (defn- pmap
;   "map number to another range"
;   [v l1 h1 l2 h2]
;   (.map (:game @game-state) v l1 h1 l2 h2))
;
; (defn- pmap
;   "map number to another range"
;   [v l1 h1 l2 h2]
;   (+ l2
;      (* (/ (- v l1) (- h1 l1))
;         (- h2 l2))))

(defn kmap
  "map number to another range. Same as kaboom.map"
  [v l1 h1 l2 h2]
  (-> (- v l1)
      (/ (- h1 l1))
      (* (- h2 l2))
      (+ l2)))

(comment
  (js/console.log kabooom))
(comment
  (js-get #js {:foo "bar"} :foo "Not found")
  (js-get #js {:foo "bar"} :dne "Not found"))

(declare dispatch-n)
;;


;; Query =
(defn dt []
  (.dt (:game @game-state)))

(defn height []
  (.height (:game @game-state)))

(defn width []
  (.width (:game @game-state)))

(defn mouse-pos
  ([] (.mousePos (:game @game-state)))
  ([layer] (.mousePos (:game @game-state) (name layer))))

(defn screenshot
  [] (.screenShot (:game @game-state)))

(defn sprite
  ([game title] (.sprite game (name title)))
  ([game title opts] (.sprite game (name title) (clj->js opts))))

(defn sprite! [title]
  (sprite (:game @game-state) title))

(defn solid [game]
  (.solid game))

(defn solid! []
  (solid (:game @game-state)))

(defn scale [game value]
  (.scale game value))

(defn layers [game layers main-layer]
  (.layers game (clj->js layers) (name main-layer)))

(defn add-level [game map config]
  (.addLevel game (clj->js map) (clj->js config)))
;;
(defn add-level-obj [id obj]
  (swap! game-state assoc-in [:game/levels id] obj))
;;
(defn add-level! [m level-id]
  (let [{:keys [game levels]} @game-state]
    (let [handler (get levels level-id)]
      #_(js/console.log "HANDLER: " (handler game))
      (add-level-obj level-id (add-level game m (handler game))))))

(comment
  (:game/levels @game-state))

;;; Scene
(defn go
  "switch to a scene"
  ([id] (lib/go (:game @game-state) id))
  ([id props] (lib/go (:game @game-state) id props)))

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
    (scene (:game @game-state) id handler)))

(evt/reg-event
 :reg-scene
 (fn [_ [_ id init evt]]
   (reg-scene  id {:init init :evt evt})))

(defmethod dispatch :reg-scene [[_ id init evt]]
  (reg-scene  id {:init init :evt evt}))

(defn start! [game scene-id]
  (.start game (name scene-id)))

(defn start
  "Starts a scene:
    - example usage: (start :scene/main)"
  [id]
  (if (.-start (:game @game-state))
    (.start (:game @game-state) (name id))
    (.go (:game @game-state) (name id))))

(defmethod dispatch :start [[_ id]]
  (start id))
;;
(evt/reg-event
 :start
 (fn [_ [_ id]]
   (start id)))

(defn respawn [comp val]
  (if (number? val)
    (set! comp -pos (vec2 [val val]))
    (set! comp -pos (vec2 val))))

(defn gravity [game value]
  (.gravity game value))

(defn gravity! [value]
  (gravity (:game @game-state) value))
;;

(defn randd [v1 v2]
  (lib/randd (:game @game-state) v1 v2))
(defn cam-ignore [game val]
  (.camIgnore game (clj->js val)))

(defn cam-ignore! [value]
  (cam-ignore (:game @game-state) value))

;; Components
(defn add [game comps]
  (.add game (clj->js comps)))

(defn get-component! [state id]
  (get-in state [:components id :comp]))

(comment
  (get-component! @game-state :player))

(defn get-tag [id]
  (when-let [tag (.get (:game @game-state) (name id))]
    tag))

(defn get-component
  "Accetps component id.
   Returns a component object (js), nil otherwise.
   Component needs to be registered first
   inside init handler function.
   ==
   Usage example: (RPG Game Example)
   ==== Step 1: Define init handler ===
      (defn main-init []
        [[:comp/reg-n
          [:player [[:sprite :sprite/guy]
                    [:pos 30 90]
                    [:prop :player]
                    [:prop {:speed 55}]]]]
         [:game/add-level main-map :level/main]])
    - :comp/reg-n is a registration event type
       - it can register multiple components
       - in our example we are registering a single
         component with id of :player. this is the id of
         the main player in the game. It is composed
         of 4 sub components
           - sprite (needs to be registed first using load-sprite)
           - pos: position of the player
           - prop: :player,
           - prop: {:speed 55} - players speed

   === Step 2:
   Access it inside event handler:

   (defn main-action []
     (let [player  (p/get-component :player)
        ....event handler code]
   "
  [id]
  (let [comp (get-component! @game-state id)]
    (if comp
      comp
      (get-tag id))))

;; Colors

;; Sprites

(def sprites-state (atom {}))

(defn reg-sprite [id sprite meta-info]
  (swap! sprites-state assoc id (with-meta {:sprite sprite} meta-info)))

(defn get-sprite [id]
  (get-in @sprites-state [id :sprite]))
;;
(comment
  (set! js/window -anims (get-sprite :idle)))
(comment
  (meta (:idle @sprites-state)))
(defn get-level [id]
  (get-in @game-state [:game/levels id]))

(evt/reg-event
 :sprite
 (fn [_ [_ id opts]]
   (let [spr (if opts
               (sprite (:game @game-state) id opts)
               (sprite (:game @game-state) id))
         meta-info  {:opts opts
                     :created-at (js/Date.)}]
     (reg-sprite id spr meta-info)
     (js/console.log spr)
     spr)))

;;
(evt/reg-event
 :solid
 (fn [_ [_ id opts]]
   (solid (:game @game-state))))

(evt/reg-event
 :pos
 (fn [_ [_ x y]]
   (if (vector? x)
     (.pos (:game @game-state) (nth x 0) (nth x 1))
     (.pos (:game @game-state) x y))))

(evt/reg-event
 :body
 (fn [_ [_ value]]
   (if value
     (.body (:game @game-state) (clj->js value))
     (.body (:game @game-state)))))

;;
(evt/reg-event
 :origin
 (fn [_ [_ id]]
   (.origin (:game @game-state) (name id))))

;;
(evt/reg-event
 :text
 (fn [_ [_ value opts]]
   (.text  (:game @game-state) value (or opts 16))))

;;
(evt/reg-event
 :layer
 (fn [_ [_ value]]
   (.layer  (:game @game-state) (name value))))

;;
(evt/reg-event
 :rect
 (fn [_ [_ value value-b]]
   (if (vector? value)
     (.rect (:game @game-state) (nth value 0) (nth value 1))
     (.rect (:game @game-state) value (or value-b value)))))

;;
(evt/reg-event
 :scale
 (fn [_  [_ value value2]]
   (if value2
     (.scale (:game @game-state) value value2)
     (.scale (:game @game-state) value))))

;;
;;


(evt/reg-event
 :props
 (fn [_ [_ props]]
   (clj->js props)))
;;
(evt/reg-event
 :color
 (fn [_  [_ r g b a]]
   (.color (:game @game-state) r g b (or a 1))));; 0 6 11 11]

;;
(evt/reg-event
 :area
 (fn [_  [_ x1 y1 x2 y2]]
   (let [game (:game @game-state)]
     (.area (:game @game-state) (.vec2 game x1 y1) (.vec2 game x2 y2)))))

(comment
  (evt/dispatch [:sprite :mario]))
(defn create-components [game props]
  (clj->js (for [prop props]
             ; (create-component game (nth prop 0) prop)
             (evt/dispatch prop))))

(defn create-components! [props]
  (create-components (:game @game-state) props))

(comment
  (map inc [1,2,3]))

(comment
  (for [item [1,2,3]]
    (inc item)))

(defn add-component [game props]
  (add game (create-components game props)))

(defn add-component! [props]
  (add-component (:game @game-state) props))

(defn reg-component [id props]
  (let [comp  (add-component (:game @game-state) props)]
    (swap! game-state assoc-in [:components id] {:comp comp :props props})
    comp))

(defn destroy! [game comp]
  (.destroy game comp))

(defn destroy [comp]
  (destroy! (:game @game-state) comp))
(defn center []
  [(/ (width) 2) (/ (height) 2)])
;;
(comment
  (height)
  (center))
(defn set-layers [coll main-layer]
  (layers (:game @game-state) coll main-layer))

(defn format-for-level [game {:keys [map width height any pos components]}]
  (let [input {:map map :width width :height height :any any :pos pos}]
    (clj->js (-> input
                 (merge (reduce
                         (fn [primes [id & props]]
                           (assoc primes id (create-components (:game @game-state) props)))
                         {}
                         components))))))

(defn reg-level! [id handler]
  (swap! game-state assoc-in [:levels id] handler))

;;
(defn reg-level [id data-handler]
  (reg-level! id
              (fn [game]
                (format-for-level game (data-handler)))))

;;

(defmethod dispatch :gravity [[_ value]]
  (gravity! value))
(evt/reg-event
 :gravity
 (fn [_ [_ value]]
   (gravity! value)))

(defmethod dispatch :origin [[_ value]]
  (.origin (:game @game-state) (name value)))
(evt/reg-event
 :origin
 (fn [_ [_ value]]
   (.origin (:game @game-state) (name value))))

(defmethod dispatch :add-level [[_ main-map mid]]
  (add-level! main-map mid))
(evt/reg-event
 :add-level
 (fn [_ [_ main-map mid]]
   (add-level! main-map mid)))

(defmethod dispatch :layers [[_ layers main-bg]]
  (set-layers layers main-bg))

(evt/reg-event
 :layers
 (fn [_ [_ layers main-bg]]
   (set-layers layers main-bg)))

(defmethod dispatch :cam/ignore [[_ backgrounds]]
  (cam-ignore! backgrounds))
;;
(evt/reg-event
 :cam/ignore
 (fn [_ [_ backgrounds]]
   (cam-ignore! backgrounds)))

(defmethod dispatch :comp/reg [[_ id props]]
  (reg-component id props))
;;
(evt/reg-event
 :comp/reg
 (fn [_ [_ id props]]
   (reg-component id props)))

(defmethod dispatch :comp/reg-n [[_ & comps]]
  (doseq [[id props] comps]
    (reg-component id props)))
(evt/reg-event
 :comp/reg-n
 (fn [_ [_ & comps]]
   (js/console.log "GETS LOGGED", comps)
   (doseq [[id props] comps]
     (reg-component id props))))

;; ==== Dispatch Events ====
(defn action-handler [comp props]
  (if (vector? props)
    (.action comp (fn []
                    (case (first props)
                      :cam/follow (cam/follow comp))))
    (.action comp #(props comp))))

(defn on-handler [comp [key & props]]
  (let [handler (fn [obj]
                  (case key
                    :headbump (doseq [prop props]
                                (when (cis obj (first prop))
                                  ((second prop))))))]
    (c/on comp key handler)))

;;
(defmethod dispatch :comp [[_ [id & args]]]
  (let [comp (get-component id)]
    (doseq [[method res] args]
      (case method
        :action (action-handler comp res)
        :on     (on-handler comp res)))))
(evt/reg-event
 :evt/comp
 (fn [[_ [id & args]]]
   (let [comp (get-component id)]
     (doseq [[method res] args]
       (case method
         :action (action-handler comp res)
         :on     (on-handler comp res))))))
;; Key Events
;;
(defn data->fn [id data]
  (js/console.log "DATA" data)
  (fn []
    (doseq [[cid props] data]
      (if (= :dispatch cid)
        (dispatch props)
        (when-let [comp (get-component cid)]
          (doseq [[k v] props]
            (when (= k :x)
              (set! (.. comp -pos -x) (+ (.. comp -pos -x) v)))
            (when (= k :y)
              (set! (.. comp -pos -y) (+ (.. comp -pos -y) v)))))))))

(defmethod dispatch :key-down [[_ & comps]]
  (if (keyword? (first comps))
    (evt/key-down (first comps) (second comps))
    (doseq [comp comps]
      (let [dir (first comp)
            handler (second comp)]
        (if (vector? dir)
          (doseq [d dir]
            (evt/key-down dir handler))
          (if (or (vector? handler)
                  (map? handler))
            (evt/key-down dir (data->fn dir handler))
            (evt/key-down dir handler)))))))

(evt/reg-event
 :ket-down
 (fn [[_ & comps]]
   (if (keyword? (first comps))
     (evt/key-down (first comps) (second comps))
     (doseq [[dir handler] comps]
       (if (or (vector? handler)
               (map? handler))
         (evt/key-down dir (data->fn dir handler))
         (evt/key-down dir handler))))))

(defmethod dispatch :key-press [[_ & handlers]]
  (if (keyword? (first handlers))
    (evt/key-press (first handlers) (second handlers))
    (doseq [[id handler] handlers]
      (if (or (vector? handler)
              (map? handler))
        (evt/key-press id (data->fn id handler))
        (evt/key-press id handler)))))
;;
(evt/reg-event
 :key-press
 (fn [_ [_ & handlers]]
   (if (keyword? (first handlers))
     (evt/key-press (first handlers) (second handlers))
     (doseq [[id handler] handlers]
       (if (or (vector? handler)
               (map? handler))
         (evt/key-press id (data->fn id handler))
         (evt/key-press id handler))))))

(defmethod dispatch :key-press-rep [[_ id handler]]
  (evt/key-press-rep id handler))

;;
(evt/reg-event
 :key-press-rep
 (fn [_ [_ id handler]]
   (evt/key-press-rep id handler)))

(defmethod dispatch :key-release [[_ & handlers]]
  (doseq [[id handler] handlers]
    (evt/key-release id handler)))

(evt/reg-event
 :key-release
 (fn [[_ & handlers]]
   (doseq [[id handler] handlers]
     (evt/key-release id handler))))

;; Char
(defmethod dispatch :char-input [[_ handler]]
  (.charInput (:game @game-state) handler))
(evt/reg-event
 :char-input
 (fn [_ [_ handler]]
   (.charInput (:game @game-state) handler)))

;; Mouse
(defmethod dispatch :mouse-down [[_ handler]]
  (.mouseDown (:game @game-state) handler))
(evt/reg-event
 :mouse/down
 (fn [_ [_ handler]]
   (.mouseDown (:game @game-state) handler)))

(evt/reg-event
 :mouse/click
 (fn [_ [_ handler]]
   (.mouseClick (:game @game-state) handler)))
(defmethod dispatch :mouse-click [[_ handler]]
  (.mouseClick (:game @game-state) handler))

(defmethod dispatch :mouse-release [[_ handler]]
  (.mouseRelease (:game @game-state) handler))
(evt/reg-event
 :mouse/release
 (fn [_ [_ handler]]
   (.mouseRelease (:game @game-state) handler)))
;; Loaders ===
(defmethod dispatch :load/root [opts]
  (apply l/load-root (rest opts)))
(evt/reg-event
 :load/root
 (fn [_ opts]
   (apply l/load-root (rest opts))))

(defmethod dispatch :load/sprite [opts]
  (apply l/load-sprite (rest opts)))
(evt/reg-event
 :load/sprite
 (fn [_ opts]
   (apply l/load-sprite (rest opts))))

(defmethod dispatch :load/sound [opts]
  (apply l/load-sound (rest opts)))

(evt/reg-event
 :load/sound
 (fn [_ opts]
   (apply l/load-sound (rest opts))))

;; Key Boolean Events
(defn key-down? [id]
  (evt/key-down? id))

(defn key-pressed? [k]
  (.keyIsPressed (:game @game-state) (name k)))
(defn key-pressed-rep? [k]
  (.keyIsPressedRep (:game @game-state) (name k)))

(defn key-released? [k]
  (.keyReleased (:game @game-state) (name k)))

;; Mouse Boolean Events
(defn mouse-clicked? []
  (.mouseIsClicked (:game @game-state)))

(defn mouse-down? []
  (.mouseIsDown (:game @game-state)))

(defn mouse-released? []
  (.mouseIsReleased (:game @game-state)))

;; Game Events ===

;; 1. Action
(evt/reg-event
 :action
 (fn [_ [_ & handlers]]
   (if (keyword? (first handlers))
     (when-let [comp (get-component (first handlers))]
       (if (.-action comp)
         (.action comp (second handlers))
         (.action (:game @game-state) (name (first handlers)) (second handlers))))
     (doseq [[id handler] handlers]
       (when-let [comp (get-component id)]
         (if (.-action comp)
           (.action comp handler)))))))

(defmethod dispatch :action [[_ & handlers]]
  (if (keyword? (first handlers))
    (when-let [comp (get-component (first handlers))]
      (if (.-action comp)
        (.action comp (second handlers))
        (.action (:game @game-state) (name (first handlers)) (second handlers))))
    (doseq [[id handler] handlers]
      (when-let [comp (get-component id)]
        (if (.-action comp)
          (.action comp handler)
          (.action (:game @game-state) (name id) handler))))))

;; 2. Render
(evt/reg-event
 :render
 (fn [_ [_ id handler]]
   (.render (:game @game-state) (name id) handler)))

(defmethod dispatch :render [[_ id handler]]
  (.render (:game @game-state) (name id) handler))
;; 3. Collides
(evt/reg-event
 :collides
 (fn [_ [_ & handlers]]
   (if (keyword (first (first handlers)))
     (let [id (first (first handlers))
           target (second (first handlers))
           handler (second handlers)]
       (let [comp (get-component id)]
         (if (.-collides comp)
           (.collides comp (name target) handler)
           (.collides (:game @game-state) (name id) (name target) handler))))
     (doseq [[[id target] handler] handlers]
       (let [comp (get-component id)]
         (if (.-collides comp)
           (.collides comp (name target) handler)
           (.collides (:game @game-state) (name id) (name target) handler)))))))

(defmethod dispatch :collides [[_ & handlers]]
  (if (keyword (first (first handlers)))
    (let [id (first (first handlers))
          target (second (first handlers))
          handler (second handlers)]
      (let [comp (get-component id)]
        (if (.-collides comp)
          (.collides comp (name target) handler)
          (.collides (:game @game-state) (name id) (name target) handler))))
    (doseq [[[id target] handler] handlers]
      (let [comp (get-component id)]
        (if (.-collides comp)
          (.collides comp (name target) handler)
          (.collides (:game @game-state) (name id) (name target) handler))))))

;; 4. Overlaps
(evt/reg-event
 :overlaps
 (fn [_ [_ [id target] handler]]
   (let [comp (get-component id)]
     (.overlaps comp (name target) handler))))

(defmethod dispatch :overlaps [[_ [id target] handler]]
  (let [comp (get-component id)]
    (.overlaps comp (name target) handler)))
;; 5 on
(evt/reg-event
 :on
 (fn [_ [_ [id target] handler]]
   (let [comp (get-component id)]
     (.on comp (name target) handler))))
(defmethod dispatch :on [[_ [id target] handler]]
  (let [comp (or (get-component id) id)]
    (.on comp (name target) #(handler %))))

;; Waiting Functions
;;
;; Waiting Functions
(evt/reg-event
 :loop
 (fn [_ [_ id func]]
   (.loop (:game @game-state) id func)))

(defmethod dispatch :loop [[_ id func]]
  (.loop (:game @game-state) id func))

;;

(evt/reg-event
 :wait
 (fn [_ [_ id func]]
   (.wait (:game @game-state) id func)))

(defmethod dispatch :wait [[_ id func]]
  (.wait (:game @game-state) id func))

;; Component Specific ===

;;
;;
(def anim-state (atom {}))
(defn reg-anim [id handler]
  (swap! anim-state assoc id handler))

;;
(evt/reg-event
 :anim/play
 (fn [_ [_ pid anim-id anim-speed loop?]]
   (if (vector? anim-id)
     (play-anims pid anim-id)
     (if-let [handler (get @anim-state pid)]
       (let [data (handler nil [pid anim-id anim-speed])]
         (when (vector? data)
           (play-anims (nth data 0) (nth data 1))))
       (when-let [comp (get-component pid)]
         (.changeSprite comp (name anim-id))
         (.play comp (name anim-id) (if (boolean? loop?) loop? true))
         (when anim-speed
           (set! comp -animSpeed anim-speed)))))))
          ; (js/console.log "ANIMATION NOT FOUND")))))

(defmethod dispatch :anim/play [[_ id tune]]
  (let [comp (get-component id)]
    (.play comp (name tune))))

;;
(evt/reg-event
 :jump
 (fn [_ [_ cid force]]
   (when-let [comp (get-component cid)]
     (.jump comp force))))

(defmethod dispatch :jump [[_ cid force]]
  (when-let [comp (get-component cid)]
    (.jump comp force)))

(evt/reg-event
 :component/add
 (fn  [_ [_ nodes]]
   (add-component! nodes)))
(defmethod dispatch :component/add [[_ nodes]]
  (add-component! nodes))
;;
(evt/reg-event
 :component/add-n
 (fn [_ [_ & nodes-coll]]
   (doseq [nodes nodes-coll]
     (add-component! nodes))))

(defmethod dispatch :component/add-n [[_ & nodes-coll]]
  (doseq [nodes nodes-coll]
    (add-component! nodes)))

(defn dispatch-n [vals]
  (doseq [val vals]
    (evt/dispatch val)))

;; Math
(defn quad! [game [a b c d]]
  (.quad game a b c d))

(defn quad [args]
  (quad! (:game @game-state) args))
(defn neg [num]
  (* -1 num))

(defn call [id prop]
  ((obj/get (get-component id) (name prop))))

;; Audio
(defmethod dispatch :audio/play [[_ id]]
  (a/play id))
(evt/reg-event
 :audio/play
 (fn [_ [_ id]]
   (a/play id)))
;; Animation
(defn play [id anim-id]
  (if (object? id)
    (.play id (name anim-id))
    (when-let [comp (get-component id)]
      (try
        (.play comp (name anim-id))
        (catch js/Error err
          (js/console.warn err))))))

;;
(defn sleep [f ms]
  (js/setTimeout f ms))

(defn change-sprite
  [[id sid aid anim-speed]]
  (js/console.log id)
  (when (object? id)
    (do (.changeSprite id (name sid))
        (when aid
          (play id aid))
        (if anim-speed
          (set! id -animSpeed anim-speed)
          (set! id -animSpeed 0.1))))
  (when-not (object? id)
    (when-let [comp (get-component id)]
      (.changeSprite comp (name sid))
      (when aid
        (play id aid)
        (if anim-speed
          (set! comp -animSpeed anim-speed)
          (set! comp -animSpeed 0.1))))))

(defn change-sprite-and-destroy
  ([comp sid aid] (change-sprite-and-destroy comp sid aid 0))
  ([comp sid aid t]
   (.changeSprite comp (name sid))
   (when aid
     (play comp aid))
   (sleep #(destroy comp) t)))

;;
(defn play-anims-and-destroy
  ([obj anims] (play-anims-and-destroy obj anims 0))
  ([obj anims timer]
   (let [anim (first anims)
         [sid aid t anim-speed] anim]
     (if (not (seq (rest anims)))
       (change-sprite-and-destroy obj sid aid t)
       (do
         (change-sprite [obj sid aid anim-speed])
         (sleep #(play-anims-and-destroy obj (rest anims) (+ timer t))
                t))))))

(defn play-anims
  ([obj anims] (play-anims obj anims 0))
  ([obj anims timer]
   (let [anim (first anims)
         [sid aid t anim-speed] anim]
     (if (not (seq (rest anims)))
       (change-sprite [obj sid aid anim-speed])
       (do
         (js/console.log anim-speed)
         (change-sprite [obj sid aid anim-speed])
         (sleep #(play-anims obj (rest anims) (+ timer t))
                t))))))

;;
;; ==== Initialization Code
(defn kaboom [config]
  (kaboom05 (clj->js config)))

(defn init
  "Initializes a new game:
   Example Usage:
   (init {:canvas })"
  ([] (init {:global true
             :fullscreen false
             :scale 4
             :debug true
             :clearColor [0,0,0, 0.9]}))
  ([props]
   (swap! game-state assoc :game (kaboom props))))

(evt/reg-event
 :init
 (fn [_ args]
   (apply init (rest args))))

(defmethod dispatch :init [args]
  (apply init (rest args)))
