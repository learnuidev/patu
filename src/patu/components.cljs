(ns patu.components)

(defn move! [comp [x y]]
  (.move comp x y))
(defn move [comp [x y]]
  (.move comp x y))

(defn jump! [comp x]
  (.jump comp x))

(defn jump [comp x]
  (.jump comp x))

(defn on [comp key handler]
  (.on comp (name key) handler))

(defn cis [comp tag]
  (.is comp (name tag)))

(defn action [comp handler]
  (.action comp handler))

(defn scale! [comp val]
  (set! comp -scale val))

(defn flip-x [comp val]
  (.flipX comp val))

(defn speed [comp]
  (.-speed comp))

(defn play [comp id]
  (.play comp (name id)))

;;
(defn grounded? [comp]
  (.grounded comp))

(defn cur-anim [comp]
  (keyword (.curAnim comp)))

(defn cur-anim? [comp anim]
  (= (cur-anim comp) anim))

;;
(defn close? [dis-a dis-b]
  (and (> 100 (js/Math.abs (- (.. dis-a -pos -y) (.. dis-b -pos -y))))
       (> 100 (js/Math.abs (- (.. dis-a -pos -x) (.. dis-b -pos -x))))))

(defn ahead? [comp target]
  (> (.. comp -pos -x) (.. target -pos -x)))

(defn behind? [comp target]
  (< (.. comp -pos -x) (.. target -pos -x)))

(defn top? [comp target]
  (< (.. comp -pos -y) (.. target -pos -y)))

(defn bottom? [comp target]
  (< (.. comp -pos -y) (.. target -pos -y)))
