(ns patu.examples.metro.scenes.one
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]
   [patu.utils :refer [js-get]]
   ;; Event System
   [patu.events :refer [dispatch reg-event key-down?]]
   ;; Assets
   [patu.examples.metro.assets :refer [main-map level-handler level-two-handler]]))

(defn sleep [f ms]
  (js/setTimeout f ms))

(defn attack
  "Triggers attack animation"
  [id]
  (when-let [comp (p/get-component id)]
    (when (not (c/cur-anim? comp :attack))
      (.changeSprite comp (name :character/attack))
      (p/play id :attack)
      (sleep #(p/change-sprite [:player :character/tileset :player/nod])
             800))))

(comment
  (close? (p/get-component :player)
          (aget (p/get-component ::worm) 0))
  ;; Is the player ahead of the worm?
  (ahead? (p/get-component :player)
          (aget (p/get-component ::worm) 0))
  ;; Is worm ahead of the player? => true
  (ahead?
   (aget (p/get-component ::worm) 0)
   (p/get-component :player)))

(js/Math.abs -1)
;;
; (reg-event
;  :player/move-left
;  (fn [_ [_ player]]
;    (if (< 20 (.-x (.-pos player)))
;      (.move player (.scale (p/vec2 [-1 0]) (.-speed player)))
;      (p/go :scene/two))
;    (.move player (.scale (p/vec2 [-1 0]) (.-speed player)))
;    (.flipX (p/get-component :player) -1)
;    (when (and (c/grounded? player)
;               (not (c/cur-anim? player :run))
;               (not (c/cur-anim? player :attack)))
;      (p/play :player :player/run))))
; (reg-event
;  :player/move-right
;  (fn [_ [_ player]]
;    (when (> 650 (.-x (.-pos player)))
;      (.move player (.scale (p/vec2 [1 0]) (.-speed player))))
;    (.flipX (p/get-component :player) 1)
;    (when (and (c/grounded? player)
;               (not (c/cur-anim? player :run))
;               (not (c/cur-anim? player :attack)))
;      (p/play :player :player/run))))

(defn follow-target [obj target]
  (when (c/close? target obj)
    (if (c/ahead? obj target)
      (.move obj (.scale (p/vec2 [-1 0]) 100))
      (.move obj (.scale (p/vec2 [1 0]) 100)))))
             ; target-comp (p/get-component target-id)]))

(comment
  "=== List of Game Animations === "
  (p/play :player :player/lose)
  (p/play :player :player/run)
  (p/play :player :player/boom)
  (p/play :player :player/nod)
  (p/play :player :player/attack)
  (attack :player))

(comment
  "Flipping Player Tutorial:"
  (.flipX (p/get-component :player) -1)
  (.flipX (p/get-component :player) 1))
;;
(p/reg-level :level/main level-handler)
(p/reg-level :level/two level-two-handler)

;;
(comment
  (c/cur-anim? (p/get-component :player) :player/run)
  (c/cur-anim (p/get-component :player))
  (js/console.log (p/get-component :player))
  (set! (p/get-component :player) -animSpeed 0.2))
(reg-event
 :player/move-left
 (fn [_ [_ player]]
   (set! player -dir "left")
   (if (< 20 (.-x (.-pos player)))
     (.move player (.scale (p/vec2 [-1 0]) (.-speed player)))
     (p/go :scene/two))
   (.move player (.scale (p/vec2 [-1 0]) (.-speed player)))
   (.flipX (p/get-component :player) true)
   (when (and (c/grounded? player)
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :attack)))
     (p/play :player :player/run))))
(reg-event
 :player/move-right
 (fn [_ [_ player]]
   (set! player -dir "right")
   (when (> 650 (.-x (.-pos player)))
     (.move player (.scale (p/vec2 [1 0]) (.-speed player))))
   (.flipX (p/get-component :player) false)
   (when (and (c/grounded? player)
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :attack)))
     (p/play :player :player/run))))

(reg-event
 :player/jump
 (fn [_ [_ player]]
   (if (c/grounded? player)
     (c/jump! player 540))))
     ; (dispatch [:player/zoom player]))))

(reg-event
 :player/zoom
 (fn [_ [_ player]]
   (let [diff (if (key-down? :left) -800 400)]
     (when (not (c/grounded? player))
       (when (= (.-dir player) "left")
         (.move player (.scale (p/vec2 [-1 0]) (+ diff (.-speed player)))))
       (when (= (.-dir player) "right")
         (.move player (.scale (p/vec2 [1 0]) (+ diff (.-speed player)))))
       (p/play :player :player/boom)))))

(reg-event
 :player/idle
 (fn [_ [_ player]]
   (when (or  (not (key-down? [:left :right :x]))
              (not (c/cur-anim? player :player/attack))
              (not (c/cur-anim? player :run))
              (not (c/cur-anim? player :nod)))
     (p/play :player :player/nod))))

(reg-event
 :game/spawn-birds
 (fn [_ _]
   ; (let [h1 (p/randd pipe-min-height (- (p/height) (+ pipe-min-height pipe-open 10)))]
   (p/add-component! [[:sprite :bird {:frame 1}]
                      [:scale 1]
                      [:pos -100 30]
                      [:layer :props]
                      [:prop ::bird]])))
(defn init []
  [[:game/layers [:bg :props :game, :ui] :game]
   [:game/add-level main-map :level/main]
   [:comp/reg-n
    [:score [[:text 0]
             [:pos 16 16]
             [:layer :ui]
             [:prop {:value 0}]]]
    [:bg0 [[:sprite :bg0]
           [:layer :bg]
           [:pos 0 0]
           [:scale 2.6]]]
    [:bg1 [[:sprite :bg1]
           [:layer :bg]
           [:pos 0 0]
           [:scale 2.8]]]
    [:bg2 [[:sprite :bg2]
           [:layer :bg]
           [:pos 0 0]
           [:scale 2.8]]]
    [:fg [[:sprite :fg0]
          [:layer :bg]
          [:pos 0 0]
          [:scale 2.8]]]
    [:player [[:sprite :character/tileset]
              [:pos 190 90]
              [:prop :player]
              [:origin :botleft]
              [:scale 1.5]
              [:prop {:speed 125
                      :animSpeed 0.25}]
              [:body]]]
    ; [:bird [[:sprite :bird]
    ;         [:pos 160 30]
    ;         [:scale 2]
    ;         [:prop {:speed 155}]]]
    [:door [[:sprite :door/closed]
            [:pos 575 320]
            [:scale 2]
            [:solid]
            [:prop {:speed 155}]]]
    [:trap/suspended [[:sprite :trap/suspended]
                      [:pos -30 75]
                      [:scale 1]
                      [:solid]
                      [:layer :props]
                      [:prop {:animSpeed 0.15}]
                      [:prop :trap/suspended]]]]])

(defn spawn-coin [x y]
  (p/add-component! [[:sprite :coin {:frame 4}]
                     [:pos x y]
                     [:scale 1.5]
                     [:prop ::coin]]))

(defn spawn-worm [x y]
  (p/add-component! [[:sprite :worm-walk {:frame 4}]
                     [:pos x y]
                     [:scale 1.2]
                     [:body]
                     [:prop ::worm]
                     [:prop {:dir 1}]]))
(defn spawn-slime [x y]
  (p/add-component! [[:sprite :slime-walk {:frame 4}]
                     [:pos x y]
                     [:scale 1.4]
                     [:prop ::slime]
                     [:body]]))
;;
(defn spawn-wooden-plate [x y]
  (p/add-component! [[:sprite :wooden-plate]
                     [:pos x y]
                     [:scale 1.4]
                     [:prop ::wooden-plate]]))
(defn spawn-flower-props [x y]
  (p/add-component! [[:sprite :flower-props]
                     [:pos x y]
                     [:scale 2]
                     [:layer :props]
                     [:prop ::flower-props]]))
(defn spawn-grass-props [x y]
  (p/add-component! [[:sprite :grass-props]
                     [:pos x y]
                     [:scale 2]
                     [:layer :props]
                     [:prop ::grass-props]]))

(defn spawn-lever [x y]
  (p/add-component! [[:sprite :lever-left]
                     [:pos x y]
                     [:scale 2]
                     [:solid]
                     [:prop ::lever]
                     [:prop {:open false}]]))

(defn spawn-orb [x y]
  (p/add-component! [[:sprite :orb-anim]
                     [:pos x y]
                     [:scale 2.4]
                     [:solid]
                     [:prop ::orb]
                     [:prop {:open false}]]))
(def coin-positions
  [[520 150]
   [540 150]
   [560 150]
   [580 150]
   [600 150]
   [520 120]
   [540 120]
   [560 120]
   [580 120]
   [600 120]
   [520  90]
   [540  90]
   [560  90]
   [580  90]
   [600  90]])
(comment
  (p/get-component ::coin))

;;
; (change-sprite [worm :worm-hit :worm-hit])

;;
(def anims [[:worm-hit :worm-hit 2350]
            [:worm-death :worm-death 350]])

(comment
  (p/play-anims-and-destroy (aget (p/get-component ::worm) 0)
                            anims))
(defn event []
  (let [player  (p/get-component :player)
        score (p/get-component :score)
        door (p/get-component :door)]
    (doseq [[x y] coin-positions]
      (spawn-coin x y))
    (spawn-slime 550 180)
    (spawn-lever 600 160)
    (spawn-worm 320 405)
    (spawn-slime 490 370)
    (spawn-slime 450 370)
    (spawn-slime 410 370)
    (spawn-flower-props 380 48)
    (spawn-grass-props 150 272)
    (spawn-wooden-plate 530 390)
    (spawn-orb 630 360)
    (doseq [c (p/get-component ::slime)]
      (p/play c :slime-walk))
    (doseq [c (p/get-component ::orb)]
      (p/play c :orb-anim))
    (doseq [c (p/get-component ::worm)]
      (p/play c :worm-walk))
    (doseq [c (p/get-component ::coin)]
      (p/play c :coin))
    (p/play :player :player/nod)
    (p/play :door :door/closed)
    ; (when-let [birds (p/get-component ::bird)]
    ;   (doseq [bird birds]
    ;     (p/play bird :flying)))
    ; (p/play ::bird :flying)
    (p/play :trap/suspended :pendulum)
    [[:evt/key-down  :left  #(dispatch [:player/move-left player])]
     [:evt/key-down  :right #(dispatch [:player/move-right player])]
     [:evt/collides [:player ::lever] #(dispatch [:player/process-lever player %])]
     [:evt/action  ::lever (fn [lever]
                             (when (.-open lever)
                               (when-not (c/cur-anim? door :door-open)
                                 (p/play-anims-and-destroy door [[:door-open :door-open 1300 0.3]]))))]

                               ; (.move worm (* (.-dir worm) 50) 0)))]
     [:evt/key-down  :up    #(dispatch [:player/move-up player])]
     [:evt/key-down  :down  #(dispatch [:player/move-down player])]
     [:evt/key-down  :z     #(attack :player)]
     [:evt/key-down  :x     #(dispatch [:player/zoom player])]
     [:evt/key-press :space #(dispatch [:player/jump player])]
     [:evt/key-release [:left :right]  #(dispatch [:player/idle player])]
     [:evt/action  :player #(when (> (.. player -pos -y) 520)
                              (p/go :scene/lose 0))]
     [:evt/action  ::worm (fn [worm]
                            (when-not (or (c/cur-anim? worm :worm-hit)
                                          (c/cur-anim? worm :worm-death))
                              (when-not (c/close? worm (p/get-component :player))
                                (.move worm (* (.-dir worm) 5) 0))))]
     [:evt/action  ::worm (fn [worm]
                            (let [player (p/get-component :player)]
                              (when-not (or (c/cur-anim? worm :worm-hit)
                                            (c/cur-anim? worm :worm-death))
                                (follow-target worm player)))
                            ; (js/console.log "WORM" worm)

                            (.move worm (* (.-dir worm) 50) 0))]
     [:evt/action  ::slime (fn [worm]
                             (let [player (p/get-component :player)]
                               (follow-target worm player)))]
                             ; (js/console.log "WORM" worm)

                             ; (.move worm (* (.-dir worm) 50) 0))]
     ;; Collisions Events
     #_[:evt/collides  [:player :trap/suspended] (fn [trap]
                                                   (if (c/cur-anim? player :attack)
                                                     (do
                                                       (p/destroy trap)
                                                       (set! score -value (+ 15 (.-value score)))
                                                       (set! score -text (.-value score)))
                                                     (p/go :scene/lose (js-get score :value))))]
     [:evt/collides  [:player ::worm]  (fn [worm]
                                         (if (c/cur-anim? player :attack)
                                           (do
                                             ; (p/destroy worm
                                             (p/play-anims-and-destroy worm [[:worm-hit :worm-hit 300 0.3]
                                                                             [:worm-hit :worm-hit 100 0.2]
                                                                             [:worm-hit :worm-hit 100 0.1]
                                                                             [:worm-death :worm-death 250 0.5]])
                                             ; (change-sprite [worm :worm-hit :worm-hit])
                                             ; (sleep #(change-sprite-and-destroy worm :worm-death :worm-death 350)
                                             ;        350)
                                             (set! score -value (+ 5 (.-value score)))
                                             (set! score -text (.-value score)))
                                           (when-not (or (c/cur-anim? worm :worm-hit)
                                                         (c/cur-anim? worm :worm-death))
                                             (p/go :scene/lose (js-get score :value)))))]
     [:evt/collides  [:player ::slime]  (fn [slime]
                                          (if (c/cur-anim? player :attack)
                                            (do
                                              ; (p/destroy work)
                                              (p/play-anims-and-destroy slime [[:explosion :explosion 600]])
                                              ; (change-sprite-and-destroy slime :explosion :explosion)
                                              (set! score -value (+ 25 (.-value score)))
                                              (set! score -text (.-value score)))
                                            (when-not (c/cur-anim? slime :explosion)
                                              (p/go :scene/lose (js-get score :value)))))]
     [:evt/collides  [:player ::coin]  (fn [coin]
                                         (set! score -value (inc (.-value score)))
                                         (set! score -text (.-value score))
                                         (p/change-sprite-and-destroy coin :coin-pickup :coin-pickup 300))]
     [:evt/collides  [:player ::orb]  (fn [orb]
                                        (set! score -value (+ 1000 (.-value score)))
                                        (set! score -text (.-value score))
                                        (p/change-sprite-and-destroy orb :orb-pickup :orb-pickup 400))]
     [:game/loop     10      #(dispatch [:game/spawn-birds])]
     [:evt/action  ::bird (fn [bird]
                            (.move bird 100 0)
                            (when (and (> (.. bird -pos -x) 680))
                              (p/destroy bird))
                            (when-not (c/cur-anim? bird :flying)
                              (p/play bird :flying)))]
     [:game/loop     2   (fn [worm]
                           (let [worms (p/get-component ::worm)]
                             (doseq [worm worms]
                               (set! worm -dir (* -1 (.-dir worm))))))]]))
