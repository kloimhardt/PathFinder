(ns pathfinder.lib
  (:require [reagent.core :as r]
            [clojure.set :as set]
            [pathfinder.appdb :as appdb]
            [pathfinder.trace :as trace])
  (:require-macros [pathfinder.klmacros :refer [defn-lt]]))

(defn-lt draw-point
  [{x :x y :y}]
  {color "#000000"}
  [:circle {:fill "#ffffff" :stroke color :cx x :cy y :r 1}])

(defn-lt draw-line
  [{x0 :x y0 :y} {x1 :x y1 :y}]
  {color "#dddddd"}
  [:line {:stroke color :x1 x0 :y1 y0 :x2 x1 :y2 y1}])

(defn-lt draw-x
  [{x :x y :y}]
  {color "#ff0000"}
  (let [d 5]
    [:g
     [draw-line {:x (- x d) :y (- y d)} {:x (+ x d) :y (+ y d)} color]
     [draw-line {:x (+ x d) :y (- y d)} {:x (- x d) :y (+ y d)} color]]))

(defn-lt draw-cross
  [{x :x y :y}]
  {color "#FF0000"}
  (let [d 5]
    [:g
     [draw-line {:x (- x d) :y y} {:x (+ x d) :y y} color]
     [draw-line {:x x :y (- y d)} {:x x :y (+ y d)} color]]))

(defn-lt draw-diamond
  [{x :x y :y}]
  {color "#FF0000"}
  (let [d 5]
    [:polyline
     {:stroke color :fill "none"
      :points [x (- y d) (- x d) y x (+ y d) (+ x d) y x (- y d)]}]))

(defn-lt draw-circle
  [{x :x y :y} r]
  {color0 "#000000" color1 "#FFFFFF"}
  [:circle {:stroke color0 :fill color1 :cx x :cy y :r r}])

(defn-lt draw-text-field
  [{x :x y :y} txt]
  {color "#000000"}
  [:text
   {:text-anchor "middle" :dominant-baseline "central"
    :font-family "helvetica" :font-size "8" :fill color :x x :y y}
   txt])

(defn-lt draw-text-circle
  [{x :x y :y} txt]
  {color0 "#000000" color1 "#FFFFFF"}
  (let [r 7]
    [:g
     [:circle {:stroke color0 :fill color1 :cx x :cy y :r r}]
     [draw-text-field {:x x :y y} txt]]))

(defn-lt draw-text-rect
  [{x :x y :y} txt]
  {color0 "#000000" color1 "#FFFFFF" color2 "#000000"}
  (let [r 7]
    [:g
     [:rect
      {:stroke color0 :fill color1 :x (- x r) :y (- y r)
       :width (* 2 r) :height (* 2 r)}]
     [draw-text-field {:x x :y y} txt]]))

(defn test1 []
  [:g
   {:id "SvgContainer"}
   [draw-point {:x 100 :y 100}]
   [draw-x {:x 200 :y 100}]
   [draw-cross {:x 300 :y 100}]
   [draw-diamond {:x 400 :y 100}]
   [draw-text-field {:x 100 :y 200} "A"]
   [draw-text-circle {:x 200 :y 200} "B"]
   [draw-text-rect {:x 300 :y 200} "C"]])

(defn triangle
  ([n0]
   (triangle n0 n0 n0))
  ([n0 n1]
   (triangle n0 n1 n1))
  ([n0 n1 n2]
   {:n0 n0 :n1 n1 :n2 n2 :active true :ngb01 nil :ngb12 nil :ngb02 nil}))

(defn-lt draw-triangle
  [[{x0 :x y0 :y} {x1 :x y1 :y} {x2 :x y2 :y}]]
  {color0 "#000000" color1 "#ddffdd"}
  [:polyline
   {:stroke color1 :fill color0
    :points [x2 y2 x0 y0 x1 y1 x2 y2]}])

(defn triangle-nodes [nodes triangle]
  (mapv #(get nodes (% triangle)) [:n0 :n1 :n2]))

(defn-lt draw-triangles
  [tpath]
  {color0 "#888888" color1 nil}
  (letfn [(draw [triangle] (draw-triangle (triangle-nodes (:nodes tpath) triangle) color0 color1))]
    (into [:g] (map draw (filter :active (:triangles tpath))))))

(defn-lt draw-node-indexes
  [tpath]
  {color0 "#000000" color1 "#FFFFFF"}
  (into [:g]
    (map-indexed (fn[idx node] [draw-text-circle node (str idx) color0 color1])
      (:nodes tpath))))

(defn-lt draw-triangle-index
  [tindex [{x0 :x y0 :y} {x1 :x y1 :y} {x2 :x y2 :y}]]
  {color0 "#000000" color1 "#ffffff"}
  (letfn [(draw [pt] (draw-text-rect pt (str tindex) color0 color1))]
    (if (= [x1 y1] [x2 y2])
      (draw {:x (/ (+ x0 x1) 2) :y (/ (+ y0 y1) 2)})
      (draw {:x (/ (+ x0 x1 x2) 3) :y (/ (+ y0 y1 y2) 3)}))))

(defn-lt draw-triangle-indexes
  [tpath]
  {color0 "#000000" color1 "#ffffff"}
  (letfn [(draw [idx triangle]
            (if (:active triangle)
              (draw-triangle-index idx
                (triangle-nodes (:nodes tpath) triangle)
                color0)))]
    (into [:g] (map-indexed draw (:triangles tpath)))))

(defn-lt draw-tpath
  [tpath]
  {color0 "#eeffee" color1 "#000000" color2 "#ffffff" color3 "#dddddd"}
  [:g
   [draw-triangles tpath color0 color3]
   [draw-node-indexes tpath color1 color2]
   [draw-triangle-indexes tpath color1 color2]])

(def net0 {:nodes [{:x 275 :y 50}
                   {:x 50 :y 350}
                   {:x 500 :y 350}]
           :triangles [(triangle 0 1 2)]})

(defn test3 [] [draw-tpath net0])

(defn get-param-u-0
  [{x :x y :y} {x0 :x y0 :y} {x1 :x y1 :y}]
  (let [dx (- x1 x0)
        dy (- y1 y0)
        numerator (+ (* (- y0 y) dy) (* (- x0 x) dx))
        denominator (+ (* dx dx) (* dy dy))]
    (/ (- numerator) denominator)))

(defn get-param-u
  [{x :x y :y} {x0 :x y0 :y} {x1 :x y1 :y}]
  (let [dx (- x1 x0)
        dy (- y1 y0)]
    (/ (- (+ (* (- y0 y) dy) (* (- x0 x) dx)))
       (+ (* dx dx) (* dy dy)))))


(defn get-point-by-param
  [{x0 :x y0 :y} {x1 :x y1 :y} u]
  {:x (+ (* (- 1 u) x0) (* u x1))
   :y (+ (* (- 1 u) y0) (* u y1))})

(defn test4 []
  (let [p {:x 50 :y 200}
        p0 {:x 275 :y 50}
        p1 {:x 275 :y 350}
        u (get-param-u p p0 p1)
        pI (get-point-by-param p0 p1 u)]
    [:g
     [draw-line p0 p1]
     [draw-line p pI "lightblue"]
     [draw-point p]
     [draw-point p0]
     [draw-point p1]
     [draw-point pI "red"]]))

(def net0a {:nodes [{:x 50 :y 200}
                    {:x 500 :y 200}]
            :triangles [(triangle 0 1)]})

(defn cross-product-triangle
  [{xa :x ya :y} {xb :x yb :y} {xc :x yc :y}]
  (- (* (- xb xa) (- yc ya)) (* (- yb ya) (- xc xa))))

(defn is-point-in-triangle
  [pathnodes triangle p]
  (let [[n0 n1 n2] (triangle-nodes pathnodes triangle)
        p0 (cross-product-triangle n0 n1 p)
        p1 (cross-product-triangle n1 n2 p)
        p2 (cross-product-triangle n2 n0 p)]
    (cond
      (not (:active triangle)) nil
      (and (>= p0 0) (>= p1 0) (>= p2 0)) triangle
      (and (<= p0 0) (<= p1 0) (<= p2 0)) triangle
      :else nil)))

(defn test5 []
  (let [p {:x 275 :y 200}
        ;;p {:x 275 :y 350.00000000000002}
        ;;p {:x 275 :y 350.00000000000003}
        dum (trace/add "isPointInTriangle: "
              (is-point-in-triangle (:nodes net0a) ((:triangles net0a) 0) p))]
    [:g
     [draw-tpath net0a]
     [draw-x p]]))

(def net3
  (let [nodes [10 10 10 390 540 10 540 390 100 50 100 150 200 50 200 150
               300 50 300 150 400 50 400 150 500 50 500 150 300 250 400 250
               200 350 300 350 150 250]
        triangles [[0 4] [13 2] [1 18] [18 16] [3 17]
                   [4 5 6] [7 5 6] [6 8 9] [6 7 9] [8 9 10]
                   [9 10 11] [10 11 12] [11 12 13] [7 9 14]
                   [9 14 15] [14 15 16] [15 16 17]]]
    {:nodes (mapv (fn[[x y]] {:x x :y y}) (partition 2 nodes))
     :triangles (mapv #(apply triangle %) triangles)}))


(defn coords-abs-to-rel
  [{x :x y :y} dom-node]
  (let [dim (.getBoundingClientRect dom-node)
        box (.getBBox dom-node)
        dum (trace/add "w" (.-width dim))]
    {:x (- (* (/ (- x (.-left dim)) (.-width dim)) (.-width box)) (.-x box))
     :y (- (* (/ (- y (.-top dim)) (.-height dim)) (.-height box)) (.-y box))}))

(comment
  (defn get-hit-triangle-index [tpath p]
    (some identity
      (map-indexed (fn [idx triangle] (and (is-point-in-triangle (:nodes tpath) triangle p) idx))
        (:triangles tpath)))))


(defn get-hit-triangle [tpath p]
  (letfn [(is-p-in [triangle] (is-point-in-triangle (:nodes tpath) triangle p))]
    (some identity (map is-p-in (:triangles tpath)))))

(comment
  (get-hit-triangle net3 {:x 15 :y 100}))

(defn get-square-dist [{x0 :x y0 :y} {x1 :x y1 :y}]
  (letfn [(sd [dx dy] (+ (* dx dx) (* dy dy)))]
    (sd (- x1 x0) (- y1 y0))))

(defn get-dist [{x0 :x y0 :y} {x1 :x y1 :y}]
  (letfn [(d [dx dy] (.sqrt js/Math (+ (* dx dx) (* dy dy))))]
    (d (- x1 x0) (- y1 y0))))

(defn-lt get-closest-node
  [nodes p]
  {sqmin nil}
  (letfn [(f0 [node] [(get-square-dist node p) node])
          (f1 [[dist1 _] [dist2 _]] (< dist1 dist2))
          (f2 [[dist node]] (if (or (not sqmin) (> sqmin dist)) node))]
    (some f2 (sort f1 (map f0 nodes)))))

(defn-lt idx-of-closest-node
  [nodes p]
  {sqmin nil}
  (letfn [(f0 [idx node] [(get-square-dist node p) idx])
          (f1 [[dist1 _] [dist2 _]] (< dist1 dist2))
          (f2 [[dist idx]] (if (or (not sqmin) (> sqmin dist)) idx))]
    (some f2 (sort f1 (map-indexed f0 nodes)))))

(comment
  (get-closest-node (:nodes net3) {:x 10 :y 10}))


(defn-lt get-closest-triangle-edge
  [[n0 n1 n2 :as nds] p]
  {sqmin nil}
  (letfn [(gpu [[_ a b :as triple]] [a b (apply get-param-u triple)])
          (sd [[_ _ u :as triple]]
            [(get-square-dist p (apply get-point-by-param triple)) u])
          (transform [[[s1 u1] [s2 u2] [s3 u3]]]
            [[s1 u1 {:u01 u1 :u12 0}]
             [s2 u2 {:u01 1 :u12 u2}]
             [s3 u3 {:u01 u3 :u12 u3}]])
          (f0 [[dist1 _] [dist2 _]] (< dist1 dist2))
          (f1 [[s u m]]
            (if (and (>= u 0) (>= 1 u) (or (not sqmin) (> sqmin s))) [s m nds]))
          (picknearest [vec] (some f1 (sort f0 vec)))]
    (picknearest (transform (mapv sd (map gpu [[p n0 n1] [p n1 n2] [p n0 n2]]))))))

(comment
  (get-closest-triangle-edge
    (triangle-nodes (:nodes net3) ((:triangles net3) 5))
    {:x 10 :y 10} 999999999999999))

(defn-lt get-closest-triangles-edge
  [tpath p]
  {sqmin nil}
  (letfn [(f1 [[dist1 _] [dist2 _]] (< dist1 dist2))
          (f2 [triangle]
            (get-closest-triangle-edge (triangle-nodes (:nodes tpath) triangle)
              p sqmin))]
    (rest (some identity (sort f1 (map f2 (:triangles tpath)))))))


(defn get-point-from-pos
  [{u01 :u01 u12 :u12} [{x0 :x y0 :y} {x1 :x y1 :y} {x2 :x y2 :y}]]
  {:x (+ x0 (* u01 (- x1 x0)) (* u12 (- x2 x1)))
   :y (+ y0 (* u01 (- y1 y0)) (* u12 (- y2 y1)))})

(comment
 (apply get-point-from-pos (get-closest-triangles-edge net3 {:x 16 :y 395})))


(defn test6 []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))]
    [:g
     [draw-tpath net3]
     (if-let [pos (first @(db :clicked-pos))]
       (let [rel (coords-abs-to-rel pos @(db :dom-node))]
         [:g
          (if-let [tri (get-hit-triangle net3 rel)]
            [draw-triangle (triangle-nodes (:nodes net3) tri) "pink" "black"])
          [draw-x rel "#008800"]
          [draw-circle (get-closest-node (:nodes net3) rel) 9 "red" "none"]
          [draw-diamond (apply get-point-from-pos (get-closest-triangles-edge net3 rel)) "red"]]))]))


(defn trinodes-by-index [tpath index]
  (triangle-nodes (:nodes tpath) (get (:triangles tpath) index)))

(defn get-pos-from-point
  [[{x0 :x y0 :y :as n0} {x1 :x y1 :y :as n1} {x2 :x y2 :y :as n2} :as threenodes]
   {x :x y :y :as p}]
  (cond
    (= n0 n1)
    {:u01 nil :u12 nil}
    (= n1 n2)
    (let [u (get-param-u p n0 n1)]
      {:u01 u :u12 u})
    :else
    (let [dx01 (- x1 x0)
          dx12 (- x2 x1)
          dy01 (- y1 y0)
          dy12 (- y2 y1)
          dx (- x x0)
          dy (- y y0)
          denominator (- (* dx01 dy12) (* dx12 dy01))
          u01 (/ (- (* dx dy12) (* dy dx12)) denominator)
          u12 (/ (- (* dy dx01) (* dx dy01)) denominator)]
      {:u01 u01 :u12 u12})))

(defn interpolate-by-pos
  [{u01 :u01 u12 :u12} v0 v1 v2]
  (let [v3 (+ (- v2 v1) v0)
        v01 (+ (* v0 (- 1.0 u01)) (* v1 u01))
        v32 (+ (* v3 (- 1.0 u01)) (* v2 u01))]
    (+ (* v01 (- 1.0 u12)) (* v32 u12))))

(comment
  (let [pt (get-point-from-pos {:u01 0.5 :u12 0.5}
             (trinodes-by-index net0 0))
        pos (get-pos-from-point (trinodes-by-index net0 0) pt)
        v (interpolate-by-pos pos 255 0 0)]
    pos))

(defn test7 []
  (let [pt (get-point-from-pos {:u01 0.5 :u12 0.5}
             (trinodes-by-index net0 0))]
    [:g
     [draw-tpath net0]
     [draw-cross pt "red"]]))


(def net0d
  (let [[mx my dx dy] [275 120 100 80]]
    {:nodes [{:x mx :y (- my dy)} {:x (- mx dx) :y (+ my dy)} {:x (+ mx dx) :y (+ my dy)}
             {:x mx :y (+ my (* 3 dy))} {:x (- mx (* 2 dx)) :y (- my dy)}
             {:x (+ mx (* 2 dx)) :y (- my dy)} {:x mx :y (+ my (* 0.3333 dy))}]
     :triangles [(triangle 0 1 2)]}))

(comment
  (trinodes-by-index net0d 0))

(defn-lt draw-nodes
  [tpath]
  {color "#000000"}
  (into [:g] (map (fn [p] [draw-point p color]) (:nodes tpath))))


(defn to-color [c]
  (cond (< c 0) 0 (> c 255) 255 :else (int c)))


(defn test8 []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))
          (colr [pos a b c] (to-color (interpolate-by-pos pos a b c)))
          (to-str [r g b] (str "rgb(" r "," g "," b ")"))]
    [:g
     [draw-triangles net0d "#eeeeee" "#aaaaaa"]
     [draw-nodes net0d]
     [draw-circle ((:nodes net0d) 0) 7 "black" "rgb(255,0,0)"]
     [draw-circle ((:nodes net0d) 1) 7 "black" "rgb(0,255,0)"]
     [draw-circle ((:nodes net0d) 2) 7 "black" "rgb(0,0,255)"]
     (if-let [clicked-pos (first @(db :clicked-pos))]
       (let [rel (coords-abs-to-rel clicked-pos @(db :dom-node))
             pos (get-pos-from-point (trinodes-by-index net0d 0) rel)]
         [draw-circle rel 7 "black"
          (to-str (colr pos 255 0 0) (colr pos 0 255 0) (colr pos 0 0 255))]))]))

(defn test9 []
  (let [trinodes (trinodes-by-index net0 0)
        pt (get-point-from-pos {:u01 1 :u12 1} trinodes)
        [d pos nodes] (get-closest-triangle-edge trinodes pt)]
    [:g
     [draw-tpath net0]
     [draw-cross  pt "green"]
     [draw-x (get-point-from-pos pos nodes) "red"]]))

(defn test10 []
  (let [trinodes (trinodes-by-index net0a 0)
        pt (get-point-from-pos {:u01 0.4 :u12 0.4} trinodes)
        pos (get-pos-from-point trinodes pt)
        dum1 (trace/add "gpfp" pos)
        dum2 (trace/add "ibp" (interpolate-by-pos pos 1 2 2))]
    [:g
     [draw-tpath net0a]
     [draw-cross  pt "red"]]))

(defn set-active [tpath tindex active]
  (assoc-in tpath [:triangles tindex :active] active))

(defn node-triangle-links [{:keys [nodes triangles]}]
  (letfn [(extract-node-idxs [{:keys [active n0 n1 n2]}] (if active [n0 n1 n2] []))
          (add-index [triangle-idx node-idxs] (map #(vector triangle-idx %) node-idxs))
          (fill-vector [v [triangle-idx node-idx]] (update v node-idx #(conj % triangle-idx)))]
    (reduce fill-vector
      (vec (repeatedly (count nodes) hash-set))
      (apply concat
        (map-indexed add-index
          (map extract-node-idxs triangles))))))

(defn register-triangle-neighbours [tpath triangle-idx]
  (letfn [(cond-assoc-in [hmap condi vec val] (if condi (assoc-in hmap vec val) hmap))
          (ntl [node-idx] (get-in tpath [:node-triangle-links node-idx]))
          (setneighbours [tp kw a b]
            (cond-assoc-in tp
              (not= a b)
              [:triangles triangle-idx kw]
              (first (disj (set/intersection (ntl a) (ntl b)) triangle-idx))))]
    (let [{:keys [n0 n1 n2]} (get-in tpath [:triangles triangle-idx])]
      (-> tpath
          (setneighbours :ngb01 n0 n1)
          (setneighbours :ngb02 n0 n2)
          (setneighbours :ngb12 n1 n2)))))


(defn register-triangles-neighbors [tpath]
  (reduce register-triangle-neighbours
    (assoc tpath :node-triangle-links (node-triangle-links tpath))
    (range (count (:triangles tpath)))))

(comment
  (map-indexed (fn[idx {:keys [ngb01 ngb02 ngb12]}] [idx ngb01 ngb02 ngb12])
    (:triangles (register-triangles-neighbors (set-active net3 8 false)))))

(defn test11 []
  (let [tpath (register-triangles-neighbors (set-active net3 8 false))]
    [:g
     [draw-tpath tpath]]))

(defn get-node-pos-from-triangle
  [{:keys [n0 n1 n2]} node-idx]
  (condp = node-idx
    n0 {:u01 0 :u12 0}
    n1 {:u01 1 :u12 0}
    n2 {:u01 1 :u12 1}))

(defn get-pos-of-node [tpath node-idx]
  (if-let [tri-idx (first (get-in tpath [:node-triangle-links node-idx]))]
    (let [tri (get-in tpath [:triangles tri-idx])]
      [(get-node-pos-from-triangle tri node-idx) (triangle-nodes (:nodes tpath) tri)])))

(defn get-closest-pos [tpath p]
  (letfn [(is-in [triangle] (is-point-in-triangle (:nodes tpath) triangle p))]
    (if-let [tr (some is-in (:triangles tpath))]
      (let [nds (triangle-nodes (:nodes tpath) tr)]
        [(get-pos-from-point nds p) nds])
      (let [node-idx (idx-of-closest-node (:nodes tpath) p)
            sqndist (get-square-dist p (get-in tpath [:nodes node-idx]))]
        (or (seq (get-closest-triangles-edge tpath p sqndist))
            (get-pos-of-node tpath node-idx))))))


(defn test12 []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))]
    (let [nb-tpath (register-triangles-neighbors net3)]
      [:g
       [draw-tpath nb-tpath]
       (if-let [pos (first @(db :clicked-pos))]
         (let [rel (coords-abs-to-rel pos @(db :dom-node))]
           [:g
            [draw-x rel "#008800"]
            [draw-diamond (apply get-point-from-pos
                            (get-closest-pos nb-tpath rel)) "red"]]))])))

(defn intersection-check-one-direction
  [{p0x :x p0y :y} {p1x :x p1y :y} {p2x :x p2y :y} {p3x :x p3y :y}]
  (let [dx1 (- p1x p0x)
        dy1 (- p1y p0y)
        dx2 (- p2x p0x)
        dy2 (- p2y p0y)
        dx3 (- p3x p0x)
        dy3 (- p3y p0y)
        c2 (- (* dx1 dy2) (* dy1 dx2))
        c3 (- (* dx1 dy3) (* dy1 dx3))]
    (not (or (and (>= c2 0) (>= c3 0))
             (and (<= c2 0) (<= c3 0))))))

(defn intersection-check [p0 p1 p2 p3]
  (and (intersection-check-one-direction p0 p1 p2 p3) (intersection-check-one-direction p2 p3 p0 p1)))

(defn test13 []
  (let [pA {:x 100 :y 200}
        pB {:x 450 :y 200}]
    (letfn [(intersec-check [[p2 p3]] (intersection-check pA pB p2 p3))
            (draw-lines [[noda nodb]] [draw-line noda nodb "red"])
            (node-pairs [tri]
              (let [[n0 n1 n2] (triangle-nodes (:nodes net3) tri)]
                [[n0 n1] [n1 n2] [n0 n2]]))]
      [:g
       [draw-tpath net3]
       [draw-line pA pB "orange"]
       (into [:g]
         (map draw-lines
           (filter intersec-check
             (apply concat
               (map node-pairs (:triangles net3))))))])))

(defn intersection
  [{p0x :x p0y :y} {p1x :x p1y :y} {p2x :x p2y :y} {p3x :x p3y :y}]
  (let [numerator (- (* (- p0y p2y) (- p3x p2x)) (* (- p0x p2x) (- p3y p2y)))
        denominator (- (* (- p1x p0x) (- p3y p2y)) (* (- p1y p0y) (- p3x p2x)))]
    (if (not= denominator 0)
      (/ numerator denominator))))

(defn strict-intersection [p0 p1 p2 p3]
  (if-let [u (intersection p2 p3 p0 p1)]
    (if-not (or (> u 1.00000000000001) (< u -0.00000000000001))
      (if-let [u (intersection p0 p1 p2 p3)]
        (if-not (or (> u 1) (< u 0))
          u)))))

(defn test14 []
  (let [pA {:x 100 :y 200}
        pB {:x 450 :y 200}]
    (letfn [(intersec-check [[p2 p3]] (strict-intersection pA pB p2 p3))
            (draw-lines [[noda nodb]] [draw-line noda nodb "red"])
            (node-pairs [tri]
              (let [[n0 n1 n2] (triangle-nodes (:nodes net3) tri)]
                [[n0 n1] [n1 n2] [n0 n2]]))]
      [:g
       [draw-tpath net3]
       [draw-line pA pB "orange"]
       (into [:g]
         (map draw-lines
           (filter intersec-check
             (apply concat
               (map node-pairs (:triangles net3))))))])))

(defn are-lines-in-order
  [{p0x :x p0y :y} {p1x :x p1y :y} {p2x :x p2y :y} {p3x :x p3y :y}]
  (let [dx01 (- p1x p0x)
        dy01 (- p1y p0y)
        dx02 (- p2x p0x)
        dy02 (- p2y p0y)
        dx03 (- p3x p0x)
        dy03 (- p3y p0y)
        c12 (- (* dx01 dy02) (* dy01 dx02))
        c23 (- (* dx02 dy03) (* dy02 dx03))
        c13 (- (* dx01 dy03) (* dy01 dx03))]
    (if (= c13 0)
      (= c12 0)
      (or (and (>= c12 0) (>= c23 0) (>= c13 0))
          (and (<= c12 0) (<= c23 0) (<= c13 0))))))

(comment
  (let [p0 {:x 275 :y 200}
        pb {:x 401 :y 50}
        pg {:x 450 :y 150}
        pr {:x 450 :y 350}]
    (are-lines-in-order p0 pb pg pr)))


(defn test17 []
  (let [p0 {:x 275 :y 200}
        pb {:x 401 :y 50}
        pg {:x 450 :y 150}
        pr {:x 450 :y 350}]
    [:g
     [draw-line p0 pr "red"]
     [draw-line p0 pg "green"]
     [draw-line p0 pb "blue"]]))

(defn points-into-triangle [tpath tindex nindex p]
  (let [{:keys [n0 n1 n2] :as tri} (get-in tpath [:triangles tindex])
        [p0 p1 p2] (triangle-nodes (:nodes tpath) tri)]
    (cond
      (= n0 nindex) (are-lines-in-order p0 p1 p p2)
      (= n1 nindex) (are-lines-in-order p1 p0 p p2)
      (= n2 nindex) (are-lines-in-order p2 p0 p p1)
      :else :undefined)))

(defn test18 []
  (let [tp {:nodes [{:x 275 :y 100} {:x 150 :y 300} {:x 400 :y 300} {:x 100 :y 100}]
            :triangles [(triangle 0 1 2)]}
        p {:x 275 :y 350}]
    (letfn [(clr [res] (cond
                         (not res) "grey"
                         (= res :undefined) "orange"
                         :else "lightgreen"))
            (p-i-t [nidx] (points-into-triangle tp 0 nidx p))
            (node [nidx] (get-in tp [:nodes nidx]))
            (line [nidx] [draw-line (node nidx) p (clr (p-i-t nidx))])]
      [:g
       [draw-tpath tp]
       (into [:g] (map line [0 2 3]))
       [draw-circle (node 0) 9 "blue" "none"]
       [draw-x p "blue"]])))

;;--------------------------------------------------------------------------------------------
;;above native ClojureScript
;;below, for test24, access to Gerold's Javascript Objects
;;--------------------------------------------------------------------------------------------
(defn point-construct [{:keys [x y]}] (js/Point. x y))

(defn point-js->clj [Point]
  {:x (.-x Point) :y (.-y Point)})

(defn tpath-construct [tpath]
  (let [tp (js/TPath.)
        step1 (mapv (fn [p] (.addNodeXY tp (:x p) (:y p)))
                (:nodes tpath))
        step2 (mapv (fn [t] (.addTriangle tp (:n0 t) (:n1 t) (:n2 t)))
                (:triangles tpath))]
    tp))

(defn tpath-js->clj [TPath]
  {:nodes
   (mapv (fn[n] {:x (.-x n) :y (.-y n)})
     (.-nodes TPath))
   :triangles
   (mapv (fn[t] {:n0 (.-n0 t)
                 :n1 (.-n1 t)
                 :n2 (.-n2 t)
                 :active (.-active t)
                 :ngb01 nil :ngb12 nil :ngb02 nil})
     (.-triangles TPath))})

(comment
  (= net3 (tpath-js->clj (tpath-construct net3))))

(defn-lt draw-start-and-goal
  [TProute]
  {color "red"}
  [:g
   (if-not (undefined? (.-goalPos TProute))
     [draw-x
      (point-js->clj (-> TProute .-tpath (.getPointFromPos (.-goalPos TProute))))
      color])
   (if-not (undefined? (.-startPos TProute))
     [draw-x
      (point-js->clj (-> TProute .-tpath (.getPointFromPos (.-startPos TProute))))
      color])])

(defn draw-goal-backlink-line [TPRoute color]
  (if (and (undefined? (.-goalRN TPRoute)) (undefined? (.-goalPos TPRoute)))
    nil
    (let [pg (-> TPRoute .-tpath (.getPointFromPos (.-goalPos TPRoute)))
          ps (if (= (-> TPRoute .-goalRN .-back) -1)
               (-> TPRoute .-tpath (.getPointFromPos (.-startPos TPRoute)))
               (aget (-> TPRoute .-tpath .-nodes) (-> TPRoute .-goalRN .-back)))]
      [draw-line (point-js->clj ps) (point-js->clj pg) color])))

(defn draw-backlink-line [TPRoute nindex color]
  (let [pA (aget (-> TPRoute .-tpath .-nodes) nindex)
        nx (aget (.-nArr TPRoute) nindex)]
    (if-not (.isDefined nx)
      nil
      (let [pB (if (= (.-back nx) -1)
                 (-> TPRoute .-tpath (.getPointFromPos (.-startPos TPRoute)))
                 (aget (-> TPRoute .-tpath .-nodes) (.-back nx)))]
        (draw-line (point-js->clj pA) (point-js->clj pB) color)))))


(defn draw-backlink-lines [TPRoute color]
  (into [:g] (mapv #(draw-backlink-line TPRoute % color)
               (range (-> TPRoute .-tpath .-nodes .-length)))))

(defn draw-backlink-index [TPRoute nindex color]
  (let [h (aget (-> TPRoute .-tpath .-nodes) nindex)
        nx (aget (.-nArr TPRoute) nindex)
        p (js/Point. (+ (.-x h) 13) (- (.-y h) 5))]
    (if (.isDefined nx)
      [draw-text-field (point-js->clj p) (.-back nx) color])))


(defn draw-backlink-indexes [TPRoute color]
  (into [:g] (mapv #(draw-backlink-index TPRoute % color)
               (range (-> TPRoute .-tpath .-nodes .-length)))))

(defn draw-backlinks [TPRoute color0 color1]
  [:g
   [draw-backlink-lines TPRoute color0]
   [draw-backlink-indexes TPRoute color1]])

(defn draw-route [TPRoute color]
  (if (or (undefined? (.-goalPos TPRoute))
          (undefined? (.-startPos TPRoute))
          (js/isNaN (-> TPRoute .-goalRN .-dist)))
    nil
    (let [posA (.-goalPos TPRoute)
          pA (atom (-> TPRoute .-tpath (.getPointFromPos posA)))
          pB (atom nil)
          back (atom (-> TPRoute .-goalRN .-back))
          erg (atom [:g])]
      (do
        (while (not= @back -1)
          (reset! pB  (aget (-> TPRoute .-tpath .-nodes) @back))
          (swap! erg #(conj % [draw-line (point-js->clj @pA) (point-js->clj @pB) color]))
          (reset! back (.-back (aget (.-nArr TPRoute) @back)))
          (reset! pA @pB))
        (let [posB (.-startPos TPRoute)
              pB (-> TPRoute .-tpath (.getPointFromPos posB))]
         (swap! erg #(conj % [draw-line (point-js->clj @pA) (point-js->clj pB) color])))
        @erg))))


(defn test24 []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))]
    (let [clicked-pos @(db :clicked-pos)
          dom-node @(db :dom-node)
          tp (tpath-construct net3)
          step1 (.setActive tp 3 false)
          tpath (tpath-js->clj tp)]
      [:g
       [draw-tpath (tpath-js->clj tp)]
       (if-let [abs (first clicked-pos)]
         (let [p-a (coords-abs-to-rel abs dom-node)
               pA (point-construct p-a)
               tpr (js/TPRoute. tp)]
           (if (odd? (count clicked-pos))
             (let [startPos (.getClosestPos tp pA)
                   step2 (.startPropagation tpr startPos)]
               [:g
                [draw-cross p-a "green"]
                [draw-start-and-goal tpr "red"]
                [draw-backlinks tpr "pink" "black"]])
             (let [p-b (coords-abs-to-rel (second clicked-pos) dom-node)
                   pB (point-construct p-b)
                   startPos (.getClosestPos tp pB)
                   goalPos (.getClosestPos tp pA)
                   step3 (.startPropagation tpr startPos)
                   step4 (.endPropagation tpr goalPos)]
               [:g
                [draw-cross p-a "green"]
                [draw-cross p-b "green"]
                [draw-start-and-goal tpr "red"]
                [draw-backlinks tpr "pink" "black"]
                [draw-goal-backlink-line tpr "purple"]
                [draw-route tpr "green"]]))))])))
