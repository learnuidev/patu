(ns patu.examples.contra.assets
  (:require [patu.core :as p]))

(def main-map ["e=                    "
               "e=                     "
               "e=         a+c            "
               "           deu             "
               "      ++   deu           "
               "           dee++         "
               "ee=        deeee+++++ "
               "ee=     a++8eeeeeeeee"
               "e=      deeyyyyyyyeee"
               "e=  ab++8yy       yyy   "
               "=   deeyy              "
               "=   pyz                  "
               "                       "
               "+++++++++++++++++++++"])

(defn level-handler []
  {:map main-map
   :width 32
   :height 32
   :components  [[:+
                  [:sprite :tiles {:frame 43}]
                  [:solid]
                  [:prop ::ground]]
                 [:=
                  [:sprite :tiles {:frame 14}]
                  [:solid]]
                 [:u
                  [:sprite :tiles {:frame 15}]
                  [:solid]]
                 [:o
                  [:sprite :tiles {:frame 27}]
                  [:solid]]
                 [:a
                  [:sprite :tiles {:frame 0}]
                  [:solid]]
                 [:b
                  [:sprite :tiles {:frame 1}]
                  [:solid]]
                 [:c
                  [:sprite :tiles {:frame 2}]
                  [:solid]]
                 [:d
                  [:sprite :tiles {:frame 12}]
                  [:solid]]
                 [:e
                  [:sprite :tiles {:frame 13}]
                  [:solid]]
                 [:p
                  [:sprite :tiles {:frame 24}]
                  [:solid]]
                 [:y
                  [:sprite :tiles {:frame 25}]
                  [:solid]]
                 [:z
                  [:sprite :tiles {:frame 26}]
                  [:solid]]
                 [:x
                  [:sprite :tiles {:frame 5}]
                  [:solid]]
                 ; [:g
                 ;  [:sprite :coin {:frame 4}]
                 ;  [:solid]]
                 [:8
                  [:sprite :tiles {:frame 29}]
                  [:solid]]
                 [:3
                  [:sprite :tiles {:frame 3}]
                  [:solid]]]})

;;
(def level-two-map ["e=                    "
                    "e=                     "
                    "e=         a+c            "
                    "           deu             "
                    "      ++   deu           "
                    "           dee++         "
                    "ee=        deeee+++++ "
                    "ee=     a++8eeeeeeeee"
                    "e=      deeyyyyyyyeee"
                    "e=  ab++8yy       yyy   "
                    "=   deeyy              "
                    "=   pyz                  "
                    "                       "
                    "++++++++++++++++++++"])

(defn level-two-handler []
  {:map level-two-map
   :width 32
   :height 32
   :components  [[:+
                  [:sprite :tiles {:frame 43}]
                  [:solid]]
                 [:=
                  [:sprite :tiles {:frame 14}]
                  [:solid]]
                 [:u
                  [:sprite :tiles {:frame 15}]
                  [:solid]]
                 [:o
                  [:sprite :tiles {:frame 27}]
                  [:solid]]
                 [:a
                  [:sprite :tiles {:frame 0}]
                  [:solid]]
                 [:b
                  [:sprite :tiles {:frame 1}]
                  [:solid]]
                 [:c
                  [:sprite :tiles {:frame 2}]
                  [:solid]]
                 [:d
                  [:sprite :tiles {:frame 12}]
                  [:solid]]
                 [:e
                  [:sprite :tiles {:frame 13}]
                  [:solid]]
                 [:p
                  [:sprite :tiles {:frame 24}]
                  [:solid]]
                 [:y
                  [:sprite :tiles {:frame 25}]
                  [:solid]]
                 [:z
                  [:sprite :tiles {:frame 26}]
                  [:solid]]
                 [:x
                  [:sprite :tiles {:frame 5}]
                  [:solid]]
                 ; [:g
                 ;  [:sprite :coin {:frame 4}]
                 ;  [:solid]]
                 [:8
                  [:sprite :tiles {:frame 29}]
                  [:solid]]
                 [:3
                  [:sprite :tiles {:frame 3}]
                  [:solid]]]})
