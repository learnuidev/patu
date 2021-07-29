(ns app.patu.utils
  (:require [goog.object :as obj]))

;; Helpers
(defn js-get
  "Works like clojure get but for objects
   FUTURE WORK: Move it inside Protocols"
  ([obj prop] (js-get obj prop nil))
  ([obj prop defval] (or (obj/get obj (name prop))
                         defval)))

(defn js-set!
  ""
  [obj key value] (obj/set obj (name key) (clj->js value)))
