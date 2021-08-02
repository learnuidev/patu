(ns app.examples.patuv06.one
  (:require  ["/kaboom/v06.js" :as kaboom6]))

;; 0. Initialize
(def kaboom (.-default kaboom6))

(def k (kaboom (clj->js {:canvas (js/document.getElementById "app")
                         :global true})))

;; 1. Load
(.loadRoot k "https://kaboomjs.com/pub/examples/");
(.loadSprite k "sprite/bg", "img/bg.png");
(.loadSprite k "birdy", "img/birdy.png");


; (.add k (clj->js [(.sprite k "birdy")]))
(defn reg-comp [id data]
  (.reg_comp k (name id) (clj->js data)))

(reg-comp :player [[:sprite :birdy]
                   [:pos [100 100]]])

;;
(defn key-down [dir cb]
  (.keyDown k (name dir) cb))

(key-down :left (fn [obj]
                  (let [player (.-player obj)]
                    (set! (.. player -pos -x) (+ (.. player -pos -x) (* -1 10))))))
(key-down :right (fn [obj]
                   (let [player (.-player obj)]
                     (set! (.. player -pos -x) (+ (.. player -pos -x) (* 1 10))))))

(comment
  (kaboom))

(defn app [])
