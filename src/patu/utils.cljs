(ns patu.utils
  (:require [goog.object :as obj]))

;; Helpers
(defn jget
  "Works like clojure get but for objects
   FUTURE WORK: Move it inside Protocols"
  ([obj prop] (jget obj prop nil))
  ([obj prop defval] (or (obj/get obj (name prop))
                         defval)))

(comment
  (first [:boo :bar])
  (seq (rest [:boo :bar]))
  (seq (rest (rest [:boo :bar]))))
(defn jget-in
  [obj props]
  (let [f (first props)
        res (rest props)]
    (if (seq res)
      (jget-in (jget obj f) res)
      (jget obj f))))

(comment
  (jget-in (clj->js {:foo {:bar 2}}) [:foo :bar])
  (jget-in (clj->js {:foo {:bar 2}}) '(:foo :bar)))
(def objs #js {:foo {:bar 1}})
(obj/get objs "foo" "bar")

(defn jset!
  ""
  ([obj key value]
   (obj/set obj (name key) (clj->js value))
   obj))

;;
(defn jset-in
  [obj props val]
  (let [f (first props)
        res (rest props)]
    (if (seq res)
      (jset-in (jget obj f) res val)
      (jset! obj f val))))

(def ex-1 (clj->js {:foo {:bar 0}}))
(comment
  (jget-in ex-1 [:foo :bar])
  (jset-in ex-1 [:foo :bar] 100))
