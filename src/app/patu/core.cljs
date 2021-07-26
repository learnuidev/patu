(ns app.patu.core
  (:require [app.patu.components :as c :refer [cis action]]
            [app.patu.utils :refer [js-get]]
            [app.patu.lib :as lib]
            [app.patu.events :as evt]
            [goog.object :as obj]
            [app.patu.cam :as cam]
            [app.patu.state :refer [game-state]]
            ["/kaboom.js" :default kaboom!]))

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

(defn rand-seed [val]
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

(defn pmap
  "map number to another range"
  [v l1 h1 l2 h2]
  (.map (:game @game-state) v l1 h1 l2 h2))

(comment
  (js/console.log kabooom))
(comment
  (js-get #js {:foo "bar"} :foo "Not found")
  (js-get #js {:foo "bar"} :dne "Not found"))

(declare dispatch-n)
;;

(defn kaboom [config]
  (kaboom! (clj->js config)))

(comment
  (js/console.log kaboom))

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

(defn go
  ([id] (lib/go (:game @game-state) id))
  ([id props] (lib/go (:game @game-state) id props)))
;; Load Sprites


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

(defn add [game comps]
  (.add game (clj->js comps)))

(defn scene [game id handler]
  (.scene game (name id) handler))

#_(defn add-scene! [id handler]
    (scene (:game @game-state) id handler))
;;
(defn reg-scene [id {:keys [init evt]}]
  (let [handler (fn [state]
                  (dispatch-n (init state))
                  (dispatch-n (evt state)))]

    (scene (:game @game-state) id handler)))
(defn start! [game scene-id]
  (.start game (name scene-id)))

(defn start
  "Starts a scene:
    - example usage: (start :scene/main)"
  [id]
  (start! (:game @game-state) id))

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
;;

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


(defn get-level [id]
  (get-in @game-state [:game/levels id]))
(defmulti create-component (fn [_ type props] type))

(defmethod create-component :sprite [game _ [_ id opts]]
  (if opts
    (sprite game id opts)
    (sprite game id)))

(defmethod create-component :solid [game _ _]
  (solid game))

(defmethod create-component :pos [game _ [_ x y]]
  (if (vector? x)
    (.pos game (nth x 0) (nth x 1))
    (.pos game x y)))

(defmethod create-component :body [game _ [_ value]]
  (if value
    (.body game (clj->js value))
    (.body game)))

(defmethod create-component :origin [game _ [_ id]]
  (.origin game (name id)))

(defmethod create-component :text [game _ [_ value opts]]
  (.text game value (or opts 16)))

(defmethod create-component :layer [game _ [_ value]]
  (.layer game (name value)))

(defmethod create-component :rect [game _ [_ value value-b]]
  (if (vector? value)
    (.rect game (nth value 0) (nth value 1))
    (.rect game value (or value-b value))))

(defmethod create-component :scale [game _ [_ value value2]]
  (if value2
    (.scale game value value2)
    (.scale game value)))

(defmethod create-component :prop [_ _ [_ props]]
  (if (keyword? props)
    props
    (clj->js props)))
(defmethod create-component :color [game _ [_ r g b a]]
  (.color game r g b (or a 1)))
  ;; 0 6 11 11]
(defmethod create-component :area [game _ [_ x1 y1 x2 y2]]
  (.area game (.vec2 game x1 y1) (.vec2 game x2 y2)))

(comment
  (create-component game :sprite [:sprite :mario]))
(defn create-components [game props]
  (clj->js (for [prop props]
             (create-component game (nth prop 0) prop))))
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
;;


; ;;
; (def ex [[:= [[:sprite :block]
;               [:solid]]]
;          [:$ [[:sprite :coin]]]
;          [:% [[:sprite :surprise]]]
;          [:* [[:sprite :surprise]]]
;          ["}" [[:sprite :surprise]]]
;          [:- [[:sprite :surprise]]]
;          ["(" [[:sprite :surprise]]]
;          [:+ [[:sprite :surprise]]]
;          [")" [[:sprite :surprise]]]
;          ["^" [[:sprite :surprise]]]
;          [:# [[:sprite :surprise]]]])

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
(defmulti dispatch (fn [args] (nth args 0)))
(defmethod dispatch :game/gravity [[_ value]]
  (gravity! value))

(defmethod dispatch :origin [[_ value]]
  (.origin (:game @game-state) (name value)))

(defmethod dispatch :game/add-level [[_ main-map mid]]
  (add-level! main-map mid))

(defmethod dispatch :game/layers [[_ layers main-bg]]
  (set-layers layers main-bg))

(defmethod dispatch :cam/ignore [[_ backgrounds]]
  (cam-ignore! backgrounds))

(defmethod dispatch :comp/reg [[_ id props]]
  (reg-component id props))
(defmethod dispatch :comp/reg-n [[_ & comps]]
  (doseq [[id props] comps]
    (reg-component id props)))

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
(defmethod dispatch :evt/comp [[_ [id & args]]]
  (let [comp (get-component id)]
    (doseq [[method res] args]
      (case method
        :action (action-handler comp res)
        :on     (on-handler comp res)))))

;; Key Events
(defmethod dispatch :evt/key-down [[_ id handler]]
  (evt/key-down id handler))

(defmethod dispatch :evt/key-press [[_ id handler]]
  (evt/key-press id handler))

(defmethod dispatch :evt/key-press-rep [[_ id handler]]
  (evt/key-press-rep id handler))

(defmethod dispatch :evt/key-release [[_ id handler]]
  (evt/key-release id handler))

;; Char
(defmethod dispatch :evt/char-input [[_ handler]]
  (.charInput (:game @game-state) handler))

;; Mouse
(defmethod dispatch :evt/mouse-down [[_ handler]]
  (.mouseDown (:game @game-state) handler))

(defmethod dispatch :evt/mouse-click [[_ handler]]
  (.mouseClick (:game @game-state) handler))

(defmethod dispatch :evt/mouse-release [[_ handler]]
  (.mouseRelease (:game @game-state) handler))

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
(defmethod dispatch :evt/action [[_ id handler]]
  (when-let [comp (get-component id)]
    (if (.-action comp)
      (.action comp handler)
      (.action (:game @game-state) (name id) handler))))

;; 2. Render
(defmethod dispatch :evt/render [[_ id handler]]
  (.render (:game @game-state) (name id) handler))
;; 3. Collides
(defmethod dispatch :evt/collides [[_ [id target] handler]]
  (let [comp (get-component id)]
    (if (.-collides comp)
      (.collides comp (name target) handler)
      (.collides (:game @game-state) (name id) (name target) handler))))
;; 4. Overlaps
(defmethod dispatch :evt/overlaps [[_ [id target] handler]]
  (let [comp (get-component id)]
    (.overlaps comp (name target) handler)))
;; 5 on
(defmethod dispatch :evt/on [[_ [id target] handler]]
  (let [comp (or (get-component id) id)]
    (.on comp (name target) #(handler %))))

;; Waiting Functions
(defmethod dispatch :game/loop [[_ id func]]
  (.loop (:game @game-state) id func))

(defmethod dispatch :game/wait [[_ id func]]
  (.wait (:game @game-state) id func))

;; Component Specific ===

(defmethod dispatch :comp/play [[_ id tune]]
  (let [comp (get-component id)]
    (.play comp (name tune))))

(defmethod dispatch :component/add [[_ nodes]]
  (add-component! nodes))
(defmethod dispatch :component/add-n [[_ & nodes-coll]]
  (doseq [nodes nodes-coll]
    (add-component! nodes)))

(defn dispatch-n [vals]
  (doseq [val vals]
    (dispatch val)))

;; Math
(defn quad! [game [a b c d]]
  (.quad game a b c d))

(defn quad [args]
  (quad! (:game @game-state) args))
(defn neg [num]
  (* -1 num))

(defn call [id prop]
  ((obj/get (get-component id) (name prop))))

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
        (play id aid)))))

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
                (+ timer t)))))))
