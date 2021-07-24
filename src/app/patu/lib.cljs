(ns app.patu.lib
  (:require [app.patu.utils :refer [js-get]]))

(defn go
  ([game id] (go game (name id) nil))
  ([game id props] (.go game (name id) (clj->js props))))

;; Load Sprites
(defn load-root
  "Returns the root asset url
   example usage:
      (load-root game) => https://kaboomjs.com/pub/examples/"
  ([game]
   (.loadRoot game))
  ([game url]
   (.loadRoot game url)))

(defn load-sprite
  ([game title url]
   (.loadSprite game (name title) url))
  ([game title url opts]
   (.loadSprite game (name title) url (clj->js opts))))

(defn load-aseprite [game title url url2]
  (when (js-get game :loadAseprite)
    (.loadAseprite game (name title) url url2)))

(defn load-sound [game id src]
  (.loadSound game (name id) src))

(defn play [game id]
  (.play game (name id)))

(defn sprite [game title]
  (.sprite game (name title)))

(defn solid [game]
  (.solid game))

(defn scale [game value]
  (.scale game value))

(defn layers [game layers main-layer]
  (.layers game (clj->js layers) (name main-layer)))

(defn add-level [game map config]
  (.addLevel game (clj->js map) (clj->js config)))

;; === Events ===
(defn key-down [game id handler]
  (if (vector? id)
    (.keyDown game (clj->js id) handler)
    (.keyDown game (name id) handler)))

(defn key-press [game id handler]
  (.keyPress game (name id) handler))

(defn key-release [game id handler]
  (if (vector? id)
    (.keyRelease game (clj->js id) handler)
    (.keyRelease game (name id) handler)))

(defn key-is-down [game key]
  (.keyIsDown game (name key)))

;; ===
(defn add [game comps]
  (.add game (clj->js comps)))

(defn scene [game id handler]
  (.scene game (name id) handler))

(defn start!
  "Starts a scene:
   - example usage: (start! :scene/main)"
  [game scene-id]
  (.start game (name scene-id)))

(defn vec2
  ([game val] (vec2 game val val))
  ([game val val2] (.vec2 game val val2)))

(defn dt [game]
  (.dt game))

;; === Camera
(defn cam-scale
  ([game]    (cam-scale game nil))
  ([game pos]
   (if pos
     (.camScale game pos)
     (.camScale game))))

(defn zoom-out [game]
  (let [val  (.sub (cam-scale game) (vec2 game (dt game)))]
    (when (> (.-x val) 0.5)
      (js/console.log val)
      (cam-scale game val))))

(defn zoom-in [game]
  (let [val  (.add (cam-scale game) (vec2 game (dt game)))]
    (when (< (.-x val) 2)
      (cam-scale game val))))

(defn cam-pos
  ([game]
   (.camPos game))
  ([game pos]
   (.camPos game pos)))

;; TODO: Refactor
#_(defn follow-comp [game comp]
    (let [pos (.sub (.-pos comp)  (vec2 game -200 90))]
      (js/console.log pos)
      (cam-pos game pos)))
(defn follow-comp [game comp]
  (let [pos (.-pos comp)]
    (js/console.log pos)
    (cam-pos game pos)))

;;
(defn cam-ignore [game val]
  (.camIgnore game (clj->js val)))

;;
(defn randd [game v1 v2]
  (.rand game v1 v2))

;; DIMENSIONS
(defn gravity [game value]
  (.gravity game value))

(defn height [game]
  (.height game))
(defn width [game]
  (.width game))

(defn destroy [game comp]
  (.destroy game comp))

(defn center [game]
  [(/ (width game) 2) (/ (height game) 2)])
;;
(defn add-loader [game loader-fn]
  (.addLoader game loader-fn))
