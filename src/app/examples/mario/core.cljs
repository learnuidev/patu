(ns app.examples.mario.core
  (:require [app.patu.core :as p]
            [app.patu.components :as c]
            [app.patu.loaders :as l]
            [app.patu.cam :as cam]
            [app.patu.utils :refer [js-get]]
            [app.patu.events :refer [reg-event dispatch]]
            [app.examples.mario.assets :refer [assets main-map level-handler]]))

; 1 === Init game ===
(p/init {:canvas (js/document.getElementById "app")
         :global true
         :fullscreen false
         :scale 1
         :debug true
         :clearColor [0,0,0, 0.9]})

; 2 === Load Assets ===
(l/load-root (:root-url assets))
(doseq [{:keys [title url]} (:sprites assets)]
  (l/load-sprite title url))

;; 3 === Register level ===
(p/reg-level :level/one level-handler)

;; 4 === Define Scene Handlers (Asset Loader  + Event handler)
;; Note: Asset Handlers must run before Event handlers!!!
(defn biggify-player "Custom component" []
  (let [state (atom {:pressed? false})
        biggify #(c/scale! %  2)
        midify #(c/scale! %  1.5)
        smallify #(c/scale! % 1)
        update (fn [_player])]

    {:biggify #(this-as player (biggify player))
     :smallify #(this-as player (smallify player))
     :midify #(this-as player (midify player))
     :update #(this-as player (update player))}))

;;
(comment
  (c/scale! (p/get-component :player) (p/vec2 2))
  (.biggify (p/get-component :player))
  (p/call :player :biggify)
  (p/call :player :smallify)
  (p/call :player :midify))

;;
; type Origin =
;   "topleft"
;   | "top"
;   | "topright"
;   | "left"
;   | "center"
;   | "right"
;   | "botleft"
;   | "bot"
;   | "botright"
;   ;
(comment
  (cam/cam-pos [100 200])
  (cam/zoom-out 10)
  (cam/zoom-in 10))
(defn main-init []
  [[:game/gravity 980]
   [:game/add-level main-map :level/one]
   [:game/layers [:background :game, :ui] :game]
   [:origin :botleft]
   [:cam/ignore [:ui]]
   [:comp/reg-n
    [:player [[:sprite :mario]
              [:solid]
              [:pos 160 0]
              [:body]
              [:origin :botright]
              [:prop (biggify-player)]]]
    [:score [[:text 100]
             [:pos 16 16]
             [:layer :ui]
             [:prop {:value "You lose"}]]]]])

(reg-event
 :player/change-sprite
 (fn [_ [_ id sid]]
   (let [comp (p/get-component id)]
     (.changeSprite comp (name sid)))))

(defn main-action []
  (let [player (p/get-component :player)
        score (p/get-component :score)
        level (p/get-level :level/one)
        pos (.sub (.-pos player) (p/vec2 [-200 (- (.-y (.-pos player)) 30)]))]
    (cam/cam-pos pos)
    (js/console.log "YO")
    [[:evt/comp
      [:player
       ; [:action [:cam/follow :player]]
       [:on
        [:headbump
         [:coin-surprise #(dispatch [:player/change-sprite :player :sprite/coin])]
         [:mushroom-surprise #(dispatch [:player/change-sprite :player :sprite/coin])]]]]]
     [:evt/on  [:player :headbump]   #(js/console.log %)]
     [:evt/key-down  :left  #(when (< 110 (.-x (.-pos player)))
                               (c/move! player [-230 0]))]
     [:evt/key-down  :right #(c/move! player [230 0])]
     [:evt/key-down [:right :left] #(let [pos (.sub (.-pos player) (p/vec2 [-200 (- (.-y (.-pos player)) 30)]))]
                                      (cam/cam-pos pos))]
     [:evt/key-down  :up    #(cam/zoom-in)]
     [:evt/key-down  :down  #(cam/zoom-out)]
     [:evt/key-press :space #(c/jump! player 400)]
     [:evt/collides  [:player :evil-mushroom]  #(p/go :scene/lose (js-get score :value))]
     [:evt/collides  [:player :evil-mushroom]  #(dispatch [:player/change-sprite :player :sprite/evil-mushroom])]
     [:evt/collides  [:player :mushroom-surprise] (fn []
                                                    ; (dispatch [:player/change-sprite :player :sprite/mushroom])
                                                    (p/call :player :biggify))]
     [:evt/key-press :b #(p/call :player :biggify)]
     [:evt/key-press :s #(p/call :player :smallify)]
     [:evt/key-press :m #(p/call :player :midify)]
     [:evt/key-press :r #(p/go :scene/main)]
     [:evt/key-press :o #(dispatch [:player/change-sprite :player :sprite/mario])]
     [:evt/action  :player #(when (> (.. player -pos -y) 320)
                              (p/go :scene/lose (js-get score :value)))]
     #_[:evt/action  :player #(when (< 140 (.-x (.-pos player)))
                                (let [pos (.sub (.-pos player) (p/vec2 [-200 (- (.-y (.-pos player)) 30)]))]
                                  (cam/cam-pos pos)))]]))

;;
(comment
  (.-x (.-pos (p/get-component :player))))
;; 5 === Register a new scene by passing a scene id and a handler fn
(p/reg-scene :scene/main {:init main-init :evt main-action})

(p/reg-scene :scene/lose {:init (fn [score]
                                  [[:comp/reg-n
                                    [:dialog
                                     [[:text score 40]
                                      [:origin :center]
                                      [:pos (p/center)]]]
                                    [:dialog-2
                                     [[:text "Press space to restart" 8]
                                      [:origin :center]
                                      [:pos [320 280]]]]]])
                          :evt (fn []
                                 [[:evt/key-press :space #(p/go :scene/main)]])})
;; 6 Start app
(defn app []
  #_(p/start :scene/main)
  (p/go :scene/main))
