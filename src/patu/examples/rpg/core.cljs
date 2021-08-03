(ns patu.examples.rpg.core
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs ===
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.cam :as cam]
   [patu.audio :as a]
   [patu.components :as c]
   ;; Event System
   [patu.events :refer [dispatch reg-event]]
   ;; Event handler namespace
   ; #_[app.kaboom-examples.rpg.events]
   ;; Assets
   [patu.examples.rpg.assets :refer [main-map level-handler]]))

(comment
  (js/console.clear)
  (doc p/start)
  (doc p/init))

(p/init {:canvas (js/document.getElementById "app")
         :global true
         :scale 4
         :fullscreen true
         :debug true
         :clearColor [0 0 0 1]})

;;
(l/load-root "https://kaboomjs.com/pub/examples/")
(l/load-sprite :sprite/steel, "img/steel.png");
(l/load-sprite :sprite/ch1, "img/ch1.png");
(l/load-sprite :sprite/ch2, "img/ch2.png");
(l/load-sprite :sprite/grass, "img/grass.png");
(l/load-sprite :sprite/door, "img/door.png");
(l/load-sprite :sprite/key, "img/key.png");
(l/load-sprite :sprite/guy, "img/guy.png");


(comment
  (p/get-tag :player))
(comment
  (a/play :sound/coin))

;;
(p/reg-level :level/main level-handler)

;; Handler
(defn main-init []
  [[:comp/reg-n
    [:player [[:sprite :sprite/guy]
              [:pos 30 90]
              [:prop :player]
              [:prop {:speed 55}]]]]
   [:game/add-level main-map :level/main]])

;;
(def talking (atom nil))

(defn talk [msg]
  (reset! talking (p/add-component! [[:text msg 8]
                                     [:pos 0 200]])))

(def speed 80)
(reg-event
 :player/move-left
 (fn [_ [_ player]]
   (.move player (.scale (p/vec2 [-1 0]) (.-speed player)))))
(reg-event
 :player/move-right
 (fn [_ [_ player]]
   (.move player (.scale (p/vec2 [1 0]) (.-speed player)))))
(reg-event
 :player/move-up
 (fn [_ [_ player]]
   (.move player (.scale (p/vec2 [0 -1]) (.-speed player)))))
(reg-event
 :player/move-down
 (fn [_ [_ player]]
   (.move player (.scale (p/vec2 [0 1]) (.-speed player)))))

(reg-event
 :character/talk
 (fn [_ [_ ch]]
   (talk ch)))

(reg-event
 :modal/check
 (fn [_ [_ _]]
   (when @talking
     (p/destroy @talking)
     (reset! talking nil))))

;;
; (defn talk [msg]
;   (reset! talking (p/add-component! [[:text msg 8]
;                                      [:pos 0 200]])))


(defn button [text p f]
  (let [btn (p/add-component! [[:pos p]
                               [:rect 60 20]
                               [:origin :center]
                               [:color 1 1 1]])
        bg (p/add-component! [[:pos p]
                              [:rect 58 18]
                              [:origin :center]
                              [:color 0 0.4 1]])]
    (p/add-component! [[:text text 6]
                       [:pos p]
                       [:origin :center]
                       [:color 1 1 1]])
    (.action btn (fn []
                   (if (.isHovered btn)
                     (do (set! bg -color (p/rgb 0 0.6 1))
                         (if (p/mouse-down?)
                           (set! bg -color (p/rgb 0 0.8 1))
                           (set! bg -color (p/rgb 0 0.6 1))))
                     (set! bg -color (p/rgb 0 0.4 1)))))))

(comment
  (doc p/get-component))
(defn main-event []
  (button "Start" [50 150] nil)
  (button "Options" [125 150] nil)
  (let [player  (p/get-component :player)]
    [[:evt/overlaps [:player :character] #(dispatch [:character/talk (.-msg %)])]
     ; [:evt/collides [:player :character] #(dispatch [:character/talk (.-msg %)])]
     [:evt/key-press    :up    #(dispatch [:modal/check])]
     [:evt/key-press    :down  #(dispatch [:modal/check])]
     [:evt/key-press    :left  #(dispatch [:modal/check])]
     [:evt/key-press    :right #(dispatch [:modal/check])]
     [:evt/key-down     :left            #(dispatch [:player/move-left player])]
     [:evt/key-down     :right           #(dispatch [:player/move-right player])]
     [:evt/key-down     :up              #(dispatch [:player/move-up player])]
     [:evt/key-down     :down            #(dispatch [:player/move-down player])]
     [:evt/action       :player           (fn []
                                            (.resolve player))]]))

(p/reg-scene :scene/main {:init main-init
                          :evt main-event})

(defn app []
  #_(p/start :scene/main)
  (p/go :scene/main))
