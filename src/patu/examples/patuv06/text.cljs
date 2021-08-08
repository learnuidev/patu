(ns patu.examples.patuv06.text)

(js/kaboom (clj->js {:canvas (js/document.getElementById "app")
                     :global true}))

(js/add (clj->js [(js/text "Hello world")
                  (js/pos 100 100)]))
;;
;; stubs
(defn reg-scene [])

(defn reg-comp [])

;; testing
(defn app []
  (js/console.log "TEXT"))
