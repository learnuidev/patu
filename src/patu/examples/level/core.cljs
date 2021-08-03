(ns patu.examples.level.core
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]
   ;; Event System
   [patu.events :refer [dispatch]]
   ;; Plugins ===
   [patu.plugins :refer [aseprite-plugin]]
   ;; Event handler namespace
   [patu.examples.level.events]
   ;; Assets
   [patu.examples.level.assets :refer [main-map level-handler]]))

(comment
  (js/console.clear)
  (doc p/start)
  (doc p/init))

(p/init {:canvas (js/document.getElementById "app")
         :global true
         :scale 2
         :debug true
         :clearColor [0 0 0 1]
         :plugins [aseprite-plugin]})

;;
(l/load-root "https://kaboomjs.com/pub/examples/")
(l/load-aseprite :sprite/car "img/car.png" "img/car.json")
(l/load-sprite :sprite/steel, "img/steel.png");
(l/load-sprite :sprite/grass, "img/grass.png");
(l/load-sprite :sprite/jumpy, "img/jumpy.png");
(l/load-sprite :sprite/spike, "img/spike.png");
(l/load-sprite :sprite/coin, "img/coin.png");)
(l/load-sound :sound/coin "sounds/coin.mp3")

(comment
  (a/play :sound/coin))

;;
(p/reg-level :level/main level-handler)

;; Handler
(defn main-init []
  [[:game/gravity 980]
   [:game/layers [:game, :ui] :game]
   [:cam/ignore [:ui]]
   [:game/add-level main-map :level/main]
   [:comp/reg-n
    [:player [[:sprite :sprite/car]
              [:pos 20 0]
              [:scale 1]
              [:body {:jumpForce 320}]
              [:origin :center]
              [:prop {:speed 160}]]]
    [:score [[:text 0 32]
             [:pos 16 16]
             [:layer :ui]
             [:prop {:value 0}]]]]])

(defn main-action []
  (let [player (p/get-component :player)
        score (p/get-component :score)]
    [[:evt/action      :player          #(dispatch [:camera/follow :player])]
     [:evt/action      :player          #(dispatch [:player/respawn? :player])]
     [:evt/collides    [:player :jumpy] #(dispatch [:player/super-jump :player])]
     [:evt/collides    [:player :hurt]  #(dispatch [:player/respawn :player])]
     [:evt/collides    [:player :coin]  #(dispatch [:player/collect-coin % :player :score])]
     [:evt/key-down    [:left :right]   #(dispatch [:player/move :player])]
     [:evt/key-release [:left :right]   #(dispatch [:player/idle :player])]
     [:evt/key-down    :left            #(dispatch [:player/move-left :player])]
     [:evt/key-down    :right           #(dispatch [:player/move-right :player])]
     [:evt/key-down    :up              #(cam/zoom-in)]
     [:evt/key-down    :down            #(cam/zoom-out)]
     [:evt/key-press   :space           #(c/jump! player 400)]
     [:evt/key-press   :r               #(dispatch [:scene/go :scene/main])]]))

(p/reg-scene :scene/main {:init main-init :evt main-action})

(defn app []
  #_(p/start :scene/main)
  (p/go :scene/main))
(comment
  (def car-state (atom {}))
  (comment
    (l/load-root)
    (-> (l/load-sprite :sprite/car2 "img/car.png")
        (.then #(reset! car-state (js->clj % :keywordize-keys true))))
    (doc lib/load-root))

  (comment
    (-> (js/fetch (str (l/load-root) "img/car.json"))
        (.then #(.json %))
        (.then #(js/console.log %))))

  ;;== Test
  (def json-state (atom {}))
  (-> (l/load-sprite :sprite/car2 "img/car.png")
      (.then #(clj->js (reset! car-state (js->clj % :keywordize-keys true)))))
      ; (.then #(js/console.log %)))

  ;;
  (-> (js/fetch (str (l/load-root) "img/car.json"))
      (.then #(.json %))
      (.then #(clj->js (reset! json-state (js->clj % :keywordize-keys true))))))
      ; (.then #(js/console.log %)))
(comment
  (reset! json-state @json-state)
  (keys @json-state)
  @car-state
  ;; Frames
  #_(:frames @json-state)
  (def frames
    [{:filename "car 0.ase", :frame {:x 0,  :y 0, :w 27, :h 21}, :rotated false, :trimmed false, :spriteSourceSize {:x 0, :y 0, :w 27, :h 21}, :sourceSize {:w 27, :h 21}, :duration 100}
     {:filename "car 1.ase", :frame {:x 27, :y 0, :w 27, :h 21}, :rotated false, :trimmed false, :spriteSourceSize {:x 0, :y 0, :w 27, :h 21}, :sourceSize {:w 27, :h 21}, :duration 100}
     {:filename "car 2.ase", :frame {:x 54, :y 0, :w 27, :h 21}, :rotated false, :trimmed false, :spriteSourceSize {:x 0, :y 0, :w 27, :h 21}, :sourceSize {:w 27, :h 21}, :duration 100}])

  #_(nth (:frames @json-state) 0)
  (def frame
    {:filename "car 0.ase"
     :frame {:x 0, :y 0, :w 27, :h 21}
     :rotated false
     :trimmed false
     :spriteSourceSize {:x 0, :y 0, :w 27, :h 21}
     :sourceSize {:w 27, :h 21}
     :duration 100})

  (defn calc-quad [file size]
    (let [frame (:frame file)]
      [(/ (:x frame) (:w size))
       (/ (:y frame) (:h size))
       (/ (:w frame) (:w size))
       (/ (:h frame) (:h size))]))

  (defn sprite-frames [frames img-size]
    (for [frame frames]
      (calc-quad frame img-size)))

  ;; Note only value of x changes
  ;; Value of y axis width and height remains the same
            ;; fx/w           ;; y/h     ;; w / w      ;;

  ;; We are telling webgl to draw in those quads
  (def sp [[0                   0   0.3333333333333333 1]
           [0.3333333333333333  0   0.3333333333333333 1]
           [0.6666666666666666  0   0.3333333333333333 1]])
  (comment
    (vec (sprite-frames frames size)))
  ;; Size
  #_(get-in @json-state [:meta :size])
  (def size {:w 81, :h 21})

  (comment
    (p/quad (calc-quad frame size))))
