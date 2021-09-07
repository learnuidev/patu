(ns patu.plugins.tiledmap
  (:require ["pako" :as pako]
            [cljs.spec.alpha :as s]))

;; === common
(s/def ::tileheight number?)
(s/def ::tilewidth number?)
(s/def ::name string?)
(s/def ::type string?)
(s/def ::height number?)
(s/def ::width number?)

;; === tileset
(s/def ::firstgid number?)
(s/def ::columns number?)
(s/def ::grid map?) ;; TODO
(s/def ::image string?)
(s/def ::imageheight number?)
(s/def ::imagewidth number?)
(s/def ::spacing number?)
(s/def ::terrain map?) ;; TODO
(s/def ::terrains (s/coll-of ::terrain))
(s/def ::tilecount number?)
(s/def ::tileheight number?)
(s/def ::tilewidth number?)
(s/def ::tileproperties map?) ;; TODO
(s/def ::tilepropertytypes map?) ;; TODO
(s/def ::tiles map?) ;; TODO
(s/def ::margin number?)

(s/def ::tileset (s/keys :req-un [::columns
                                  ::firstgid
                                  ::grid
                                  ::image
                                  ::imageheight
                                  ::imagewidth
                                  ::name
                                  ::margin
                                  ::spacing
                                  ::terrains
                                  ::tilecount
                                  ::tileproperties
                                  ::tilepropertytypes
                                  ::tiles
                                  ::tileheight
                                  ::tilewidth]))

;; === layer
(s/def ::data (s/coll-of number?))
(s/def ::opacity number?)
(s/def ::visible boolean?)
(s/def ::x number?)
(s/def ::y number?)

(s/def ::layer (s/keys :req-un [::name
                                ::type
                                ::height
                                ::width
                                ;; === layer specific
                                ::data
                                ::opacity
                                ::visible
                                ::x
                                ::y]))
;; === tilemap
(s/def ::infinite boolean?)
(s/def ::layers (s/coll-of ::layer))
(s/def ::properties map?)
(s/def ::propertytypes map?)
(s/def ::renderorder string?)
(s/def ::tiledversion string?)
(s/def ::tilesets (s/coll-of ::tileset))
(s/def ::version number?)

(s/def ::tilemap (s/keys :req-un [::height
                                  ::infinite
                                  ::layers
                                  ::properties
                                  ::propertytypes
                                  ::renderorder
                                  ::tiledversion
                                  ::tileheight
                                  ::tilewidth
                                  ::tilesets
                                  ::type
                                  ::version
                                  ::width]))

(comment
  (s/valid? ::tilemap {:height 10}))

(s/valid? ::height 10)
(s/valid? ::height 10)
;;
;;
;;
(defn js-fetch [url]
  (-> (js/fetch url)
      (.then #(.json %))))

;;
(def response (atom {}))

(comment
  (.then (js-fetch "assets/tiled/tuxemon_town.json")
         #(let [val %]
            (set! js/window -mapObj val)
            (reset! response (js->clj val :keywordize-keys true)))))

(comment "Spec"
         (s/valid? ::tilemap @response)
         (s/valid? ::tilesets (:tilesets @response)))

(comment "Pako"
         (.inflate pako (js/Uint8Array.))
         (.deflate pako (js/Uint8Array.)))

(defn load-tiledmap! [ctx {:keys [name img json]}]
  (js/console.log "TODO"))

(defn tiledmap-plugin [ctx]
  (clj->js {:loadTiledmap #(load-tiledmap! ctx {:name %1 :img %2 :json %3})}))
