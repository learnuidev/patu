(ns patu.lessons.flappy-finish)

;; Intro
;; ========
;; In this tutorial you will learn basics of Kaboom.js and game development in general
;; We will be making flappy bird game 🐦

;; It is heaviliy inspired from the original kaboom tutorial.


;; =============================================================================
;; Step 1: Installation and require dependencies
;; =========

;; Method 1: cdn
;; head over to index.html and paste the cdn link👇
;; <script src="https://kaboomjs.com/lib/0.6.0/kaboom.js"></script>
;; kaboom propery gets added to the window object making it global i.e
;; we can now start having fun


;; Method 2: npm
;; 1.2.1 run yarn add kaboom
#_(:require  ["kaboom/dist/kaboom.cjs" :as  kaboom])

;; =============================================================================
;; Step 2: Initualize a new game
;; ===========
;; Everything in kaboom start with the kaboom function
;;
;; 2.1 No config
(js/kaboom)

;; 2.2 or we can pass config
(comment
  (js/kaboom (clj->js {:global true})))

;; it tells the browser we're going to make a kaboom game
;; global adds all the functions to window object, making it globally accessable
;; So we can use all the kaboom functions without any prefix
;; By now we should see a blank canvas on the screen
;; Currently it is empty, lets add some stuff

;; =============================================================================
;; Sprites ===================
;; Step 3: Add Sprite (addSprite)
(comment
  (js/addSprite "mark"))

;; We can use the addSprite function to add a sprite to the screen
;; We pass in the sprite name "mark", which is a default sprite available in kaboom
;; now we have a mark on screen!
;; and yep you just need one line to get stuff on screen.

;; =============================================================================
;; Components ====================
;; pos ===
;; Step 4: Add properties to Sprite
;; Next let's add some properties to mark
(comment
  (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)})))
;; We can add properties by passing the second argument which is a table containing various settings
;; like in this case, we set the position of mark to (js/vec2 80 80)
;; (js/vec2) means a 2 dimentional vector, which is what kaboom uses to represent positions on canvas


;; =============================================================================
;; body ===
;; Step 5: Make Sprite respond to physics using the body component
;; Now let's make mark respond to physics by giving it a 'body' property
(comment
  (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)
                                 :body true})))
;; passing body as true also means that mark can now jump, as we will see very shortly
;; solid ===
;; Step 6: Add ground
;; Falling infinitely is way too intense for mark,
;; let's add a solid surface for me to land on for now
(comment
  (js/addRect (js/width) 20 (clj->js {:pos (js/vec2 0 (- (js/height) 40))
                                      :solid true})))
;; - (js/addRect), is just like (js/addSprite), but instead it gives us a rectangle
;; - And giving it a 'solid' property makes other objects not able to pass it
;; - (js/width) and (js/height) gives us the size of the canvas

;; =============================================================================
;; Step 7: Make mark jump:
;; Now it's time for mark to JUMP
;; First let's store mark (the game object) in a variable, which is returned by (js/addSprite)
;; We will refactor it later
#_(def mark (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)
                                           :body true})))
;;
#_(js/addRect (js/width) 20 (clj->js {:pos (js/vec2 0 (- (js/height) 40))
                                      :solid true}))

#_(js/keyPress "space" #(.jump mark))
;; And with just 35 LOC we have mark jumping
;; we use the keyPress() function to register an event to be fired
;; when user presses a certain key, and in that event callback function,
;; we tell mark to .jump, which is a method available for any object with 'body' component
;; Now slap that space key!


;; =============================================================================
;; Step 8: Adding sound
;; Next up let's add sound sound effect when mark jumps
#_(js/loadSound "wooosh", "https://kaboomjs.com/pub/examples/sounds/wooosh.mp3")

#_(js/keyPress "space" #(do (.jump mark) (js/play "wooosh")))
;; - First we load the sound with js/loadSound, specifying the name
;;   and the path to the file
;; - Then we just call the js/play function to play the
;;   sound with the name when I jump, easy
;; Next let's add a background image to make stuff look prettier

;; =============================================================================
;; Step 9: Adding Background Image
#_(js/loadSprite "bg" "https://kaboomjs.com/pub/examples/sprites/bg.png")
;; == (1)
#_(js/loadSound "wooosh", "https://kaboomjs.com/pub/examples/sounds/wooosh.mp3")

;; == (2)
#_(js/addSprite "bg")

#_(def mark (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)
                                           :body true})))

#_(js/addRect (js/width) 20 (clj->js {:pos (js/vec2 0 (- (js/height) 40))
                                      :solid true}))

#_(js/keyPress "space" #(.jump mark))

;; - (1) Like (js/loadSound), we use js/loadSprite to load the background image
;; - (2) Then another js/addSprite to add that to the scene
;; - We put it before adding the other sprites because we want
;;   it to be drawn first, so it'll be on the background

;; You might have noticed things are a bit small, let's deal with that then.

;; Step 10: Fix screen size
;; 10.1 Let's pass a scale property to our kaboom() initialization, to make every
;;      bigger and pixelly and set the fullscreen property to make the canvas fill the page
#_(js/kaboom (clj->js {:global true
                       :scale 2
                       :fullscreen true}))

;; 10.2 Then we define the width and height properties of the background,
;;      making it to stretch to screen size
#_(js/addSprite "bg" (clj->js {:width (js/width)
                               :height (js/height)}))

;; Finally we can properly enjoy the beautiful scenery! Like we're really there 😋
;; Can't spell flappy bird without PIPE, let's get some pipes in there

;; =============================================================================
;; Step 11: Add Pipes
#_(js/loadSprite "pipe", "https://kaboomjs.com/pub/examples/sprites/pipe.png")
#_(js/addSpirite "pipe")
;; And now we have pipes rendered on the screen
;; But its static and not moving - aint no flappy bird with no pipes moving
;; Lets make that pipe move

;; =============================================================================
;; Step 12: Move pipes
#(def pipe (js/addSprite "pipe" (clj->js {:pos (js/vec2 (js/width) (js/height))
                                          :origin "botleft"})))

#(.action pipe #(.move pipe -60 0))

;; - First we make it be on the bottom right side of the screen,
;;   by specifying the pos attribute and the 'origin' attribute,
;;   which means the 'pos' we give will be the bottom left point of the image,
;;   instead the default top left
;; - To make it come to us, we use the action method,
;;   which accepts a callback that'll be called every frame (so ~60 times per second)
;;   Inside the action callback, we call the move method, which
;;   makes it move left 60 pixels per second


;; It's quite boring to have it come to us but we can't interact with it. Let's add
;; some collision detection

;; =============================================================================
;; Step 13: Collision Detection

;; To do that, we can first give the pipe a "pipe" tag
#(def pipe (js/addSprite "pipe" (clj->js {:pos (js/vec2 (js/width) (js/height))
                                          :origin "botleft"
                                          :tags ["pipe"]})))

;; Then use the collides method on mark which runs whenever mark collides with
;; another game object with a certain tag
#_(.collides mark "pipe" #(.log js/debug "ohh noo"))
;; In that we put a (log js/debug) which logs a message on screen
;; Here's a handy thing we can do. Add a debug property to kaboom()
#_(js/kaboom (clj->js {:global true
                       :scale 2
                       :fullscreen true
                       :debug true}))
;; - Now try pressing F1 (fn + F1 for mac users), you can toggle the game to draw
;;   bounding boxes of everything with area
;; - You can also hover over in game objects to inspect some of their
;;   properties in real time
;; - There's also other interesting debug utilities, e.g:
;;      - F8 to pause / unpause,
;;      - F7 and F9 to slow down / pace up time,
;;      - F10 to step to next frame while pausing

;; Now let's get back to the game and add a lose scene if player hits a pipe.


;; =============================================================================
;; Step 14: Scenes
;; To do that we can use the scene API kaboom provides.
;; All we need to do is take all code we have right now and put them inside a scene block.
#_(js/scene
   "game"
   (fn []
     (js/addSprite "bg" (js->js {:width (js/width) :height (js/height)}))
     (let [mark (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)
                                               :body true}))
           pipe (js/addSprite "pipe" (clj->js {:pos (js/vec2 (js/width) (js/height))
                                               :origin "botleft"
                                               :tags ["pipe"]}))]
       (js/addRect (js/width) 20 (clj->js {:pos (js/vec2 0 (- (js/height) 40))
                                           :solid true}))

       (.collides mark "pipe" #(.log js/debug "ohh noo"))
       (.action pipe #(.move pipe -60 0))
       (js/keyPress "space" #(do (.jump mark) (js/play "wooosh"))))))

;; Then call go function to start the scene.
#_(js/go "game")

;; With this we can have multiple scenes in our game who are
;; independent to each other. So let's make a game over scene.

;; =============================================================================
;; Step 15: Game over scene
;; Define a "gameover" scene, and make it go() when we hit a pipe
#_(js/scene
   "game"
   (fn []
     (js/addSprite "bg" (js->js {:width (js/width) :height (js/height)}))
     (let [mark (js/addSprite "mark" (clj->js {:pos (js/vec2 80 80)
                                               :body true}))
           pipe (js/addSprite "pipe" (clj->js {:pos (js/vec2 (js/width) (js/height))
                                               :origin "botleft"
                                               :tags ["pipe"]}))]
       (js/addRect (js/width) 20 (clj->js {:pos (js/vec2 0 (- (js/height) 40))
                                           :solid true}))
                             ;; Go to gameover scene when mark hits the pipe
       (.collides mark "pipe" #(js/go "gameover"))
       (.action pipe #(.move pipe -60 0))
       (js/keyPress "space" #(do (.jump mark) (js/play "wooosh"))))))

;; Degine gameover scene
#_(js/scene
   "gameover"
   (fn []
     (js/addText "Game over")
     ;; Make it go back to "game" scene in "gameover" on key press for easy replay
     (js/keyPress "space" #(do (js/go "game")))))

;; =============================================================================
;; Step 1
;; With this in place we gan get rid of the platform (rectangle), just game over when fall
;; Like this. We are checking for mikes y position to decide if its too low
;; Time for game over sound effects.

(defn app [])

;; 50 more steps to go
