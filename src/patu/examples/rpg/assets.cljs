(ns patu.examples.rpg.assets
  (:require [patu.core :as p]))

(def main-map ["+++++++|++"
               "+        +"
               "+ a      +"
               "+        +"
               "+        +"
               "+    $   +"
               "+        +"
               "+        +"
               "+        +"
               "++++++++++"])

(def characters
  {"a" {:sprite :sprite/ch1
        :msg "ohhi how are ya"}
   "b" {:sprite :sprite/ch2}
   :msg "get out!"})

;;
(defn any-handler [ch]
  (when-let [char (get characters ch)]
    (clj->js [(p/sprite! (:sprite (get characters "b")))
              (p/solid!)
              :character
              {:msg (:msg char)}])))

(defn level-handler []
  {:map main-map
   :width 11
   :height 11
   ; :pos [20 20]
   :any any-handler
   :components  [[:+
                  [:sprite :sprite/steel]
                  [:solid]]
                 ["$"
                  [:sprite :sprite/key]
                  [:prop :key]]
                 ["|"
                  [:sprite :sprite/door]
                  [:solid]
                  [:prop :door]]]})
