(ns patu.plugins
  (:require
   [clojure.repl :refer [doc]]
   [goog.object :as obj]
   [patu.core :as p]
   [patu.loaders :as l]
   [patu.lib :as lib]
   [patu.utils :refer [js-set! js-get]]
   [patu.components :as c]))

;;
(defn calc-quad [file size]
  (let [frame (:frame file)]
    [(/ (:x frame) (:w size))
     (/ (:y frame) (:h size))
     (/ (:w frame) (:w size))
     (/ (:h frame) (:h size))]))

(defn js-fetch [url]
  (-> (js/fetch url)
      (.then #(.json %))))

(defn set-anims! [sprite {{:keys [frameTags]} :meta}]
  (doseq [anim frameTags]
    (js-set!
     (js-get sprite :anims)
     (:name anim)
     {:from (:from anim)
      :to (:to anim)})))

(defn create-frames! [ctx sprite {{:keys [size]} :meta
                                  frames :frames}]
  (clj->js (for [frame frames]
             (p/quad! ctx (calc-quad frame size)))))

(defn sprite-handler [ctx {:keys [sprite json resolve reject]}]
  (let [json-path (str (lib/load-root ctx) json)]
    (-> (js-fetch json-path)
        (.then (fn [data]
                 (let [data (js->clj data :keywordize-keys true)]
                   (set! sprite -frames (create-frames! ctx sprite data))
                   (set-anims! sprite data)
                   (resolve sprite))))
        (.catch (fn [] (reject (str "Failed to load: " json)))))))

(defn sprite-loader [ctx {:keys [resolve reject name img json]}]
  (-> (lib/load-sprite ctx name img)
      (.then #(sprite-handler ctx {:sprite %
                                   :json json
                                   :resolve resolve
                                   :reject reject}))))

(defn load-aseprite! [ctx {:keys [name img json]}]
  (let [loader-fn (js/Promise. #(sprite-loader ctx {:resolve %1 :reject %2 :name name :img img :json json}))]
    (lib/add-loader ctx loader-fn)
    loader-fn))

(defn aseprite-plugin [^js/object ctx]
  (clj->js {:loadAseprite #(load-aseprite! ctx {:name %1 :img %2 :json %3})}))

;;
