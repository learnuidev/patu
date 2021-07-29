(ns app.examples.patuv06.one
  (:require  ["/kaboom/v06.js" :as kaboom6]))

;;
(def kaboom (.-default kaboom6))

(def k (kaboom (clj->js {:canvas (js/document.getElementById "app")
                         :global true})))

;;
(.loadRoot k "https://kaboomjs.com/pub/examples/");
(.loadSprite k "sprite/bg", "img/bg.png");
(.loadSprite k "birdy", "img/birdy.png");


(.add k (clj->js [(.sprite k "birdy")]))
; (.reg_comp k "player"
;            (clj->js [["sprite" "birdy"]
;                      [:pos 100 100]]))
(comment
  (kaboom))

(defn app [])
