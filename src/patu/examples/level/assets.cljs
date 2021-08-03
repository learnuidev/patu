(ns patu.examples.level.assets)

;;
(def main-map ["                         "
               "                         "
               "          ooo            "
               "     ^+++====+=          "
               "                         "
               "                         "
               "                         "
               "                         "
               "               =++===    "
               "                         "
               "                    oo   "
               "        =====      +++ **"
               "==========++===+======+++"])

;;
(defn level-handler []
  {:map main-map
   :width 11
   :height 11
   ; :pos [0 0]
   :components  [[:+
                  [:sprite :sprite/steel]
                  [:solid]]
                 [:=
                  [:sprite :sprite/grass]
                  [:solid]]
                 ["^"
                  [:sprite :sprite/jumpy]
                  [:solid]
                  [:prop :jumpy]]
                 [:*
                  [:sprite :sprite/spike]
                  [:body]
                  [:area 0 6 11 11]
                  [:prop :hurt]]
                 [:o
                  [:sprite :sprite/coin]
                  [:body]
                  [:prop :coin]]]})
