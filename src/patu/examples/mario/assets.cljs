(ns patu.examples.mario.assets)

;; Assets ===
(def assets {:root-url "https://i.imgur.com/"
             :sprites [{:title :coin
                        :url "wbKxhcd.png"}
                       {:title :evil-mushroom
                        :url "LmseqUG.png"}
                       {:title :brick
                        :url "pogC9x5.png"}
                       ;; old
                       #_{:title :block
                          :url "bdrLpi6.png"}
                       {:title :block
                        :url "M6rwarW.png"}
                       {:title :mario
                        :url "Wb1qfhK.png"}
                       {:title :mushroom
                        :url "0wMd92p.png"}
                       {:title :surprise
                        :url "gesQ1KP.png"}
                       {:title :unboxed
                        :url "bdrLpi6.png"}
                       {:title :pipe-top-left
                        :url "ReTPiWY.png"}
                       {:title :pipe-top-right
                        :url "hj2GK4n.png"}
                       {:title :pipe-bottom-left
                        :url "c1cYSbt.png"}
                       {:title :pipe-bottom-right
                        :url "nqQ79eI.png"}]});; === App
;;

;;
(def main-map ["                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                                           "
               "                        #                                "
               "                   %   =*=%=                                    "
               "                                                       "
               "                                      -+                       "
               "                             ^   ^    ()                       "
               "==============================================    ============="
               "==============================================    ============="])

(defn level-handler []
  {:map main-map
   :width 20
   :height 20
   ; :origin :bottom
   :components  [[:=
                  [:sprite :sprite/block]
                  [:solid]]
                 [:$
                  [:sprite :sprite/coin]]
                 [:%
                  [:sprite :sprite/surprise]
                  [:solid]
                  [:prop :coin-surprise]]
                 [:*
                  [:sprite :sprite/surprise]
                  [:solid]
                  [:prop :mushroom-surprise]]
                 ["}"
                  [:sprite :sprite/unboxed]
                  [:solid]]
                 [:-
                  [:sprite :sprite/pipe-top-left]
                  [:solid]
                  [:scale 0.5]]
                 ["("
                  [:sprite :sprite/pipe-bottom-left]
                  [:solid]
                  [:scale 0.5]]
                 [:+
                  [:sprite :sprite/pipe-top-right]
                  [:solid]
                  [:scale 0.5]]
                 [")"
                  [:sprite :sprite/pipe-bottom-right]
                  [:solid]
                  [:scale 0.5]]
                 ["^"
                  [:sprite :sprite/evil-mushroom]
                  [:solid]
                  [:prop :evil-mushroom]]
                 [:#
                  [:sprite :sprite/mushroom]
                  [:solid]
                  [:prop :mushroom-surprise]]]})
