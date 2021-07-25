## Learn by building - Flappy bird tutorial

Step 0: Clone this repository

Step 1: Require dependencies

```clj
(ns app.tutorial.flappy
  (:require
   [clojure.repl :refer [doc]]
   ;; Main Libs (5) ===
   [app.patu.core :as p]
   [app.patu.loaders :as l]        ;; 1. Loaders
   [app.patu.audio :as a]          ;; 2. Audio
   [app.patu.components :as c]     ;; 3. Component Helpers
   [app.patu.events :refer
    [reg-event dispatch]]))        ;; 4. Event System
```

First lets understand all the namespaces

### 1. app.patu.loaders

It contains 4 helper functions for loading assets. Here is the entire list:

- load-root
- load-sprite
- load-aseprite\* (needs aseprite plugin to work...more in plugins section)
- load-sound

### 2. app.patu.core :as p

This namespace contains functions such as init, create-component, get-component, width and many many more.
Here are list of functions used in this tutorial grouped by domain

math

- randd

dimensions

- height
- width
- center

component

- get-component

event

- dispatch
- reg-scene

scene navigation

- go

please refer to the namespace for all the list of functions, until the documentation is completed.

### 3. app.patu.audio

```clj
(ns app.patu.audio
  (:require [app.patu.lib :as lib]
            [app.patu.state :refer [game-state]]))

(defn play [id]
  (lib/play (:game @game-state) id))

```

It contains single function called `play`. It accepts audio id and plays the audio if found.

### 4. app.patu.components

This namespace contains helper functions for components.

### 5. app.patu.events (re-frame syntax)

This namespace exposes two functions reg-event and dispatch

- reg-event registers an event-id and a callback function
- dispatch function accepts a vector of event-id and optional args.

- Initialization
- Events and Event Registration
- Scene
  - Scene Registration using `p/reg-scene`
- Levels

### Initialization `(p/init)`

`init` function calls `kaboom` function behind the scenes. It accepts an optional argument.
