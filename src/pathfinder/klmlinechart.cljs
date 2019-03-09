(ns pathfinder.klmlinechart
  (:require [reagent.core :as reagent]
            [clojure.zip :as zip]
            [pathfinder.debug :as debug]))

(comment
  (defn map-vec-zipper-old-cljs [m] ;worked for older cljs-versions (??before 1.9.542??)
    (zip/zipper
      (fn [x] (or (map? x) (sequential? x)))
      seq
      (fn [p xs]
        (into (empty p) xs))
      m)))

(defn map-vec-zipper [m]
  (zip/zipper
    (fn [x] (or (map? x) (sequential? x)))
    seq
    (fn [p xs]
      (if (isa? (type p) cljs.core/MapEntry)
        (into [] xs)
        (into (empty p) xs)))
    m))

(defn zipwalkthrough [function data]
  (loop [zippedata (map-vec-zipper data)]
    (if (zip/end? zippedata)
      (zip/root zippedata)
      (recur (zip/next (function zippedata))))))

(def fn-parsetime (.timeParse js/d3 "%Y%m%d"))

(defn string-to-time [zippedmapvec]
  (let [node (zip/node zippedmapvec)]
    (if (=  node :xx)
      (let [nextstep (zip/next zippedmapvec)]
        (zip/replace nextstep (fn-parsetime (zip/node nextstep))))
      zippedmapvec)))

(defn achsen [drawdomain xdomain ydomain zdomain]
  (let [[width height] drawdomain
        x-achse (-> js/d3
                    (.scaleTime)
                    (.range (clj->js [0 width]))
                    (.domain (clj->js xdomain)))
        y-achse (-> js/d3
                    (.scaleLinear)
                    (.range (clj->js [height 0]))
                    (.domain (clj->js ydomain)))
        z-namen (-> js/d3
                    (.scaleOrdinal (.-schemeCategory10 js/d3))
                    (.domain (clj->js zdomain)))
        fn-klmlinie (-> js/d3
                        (.line)
                        (.curve (.-curveBasis js/d3))
                        (.x #(x-achse (.-xx %)))
                        (.y #(y-achse (.-yy %))))]
    {:x-achse x-achse :y-achse y-achse :z-namen z-namen
     :fn-klmlinie fn-klmlinie}))

(defn the-rect [db margin]
  (if-let [dom-node @(reagent/cursor db [:chart :dom-node])]
    (let [bounds (.getBoundingClientRect dom-node)
          drag-start (reagent/cursor db [:chart :drag :start])
          drag-end (reagent/cursor db [:chart :drag :end])
          rect-x-min (- (min (get @drag-start 0) (get @drag-end 0))
                        (.-left bounds) (:left margin))
          rect-x-max (- (max (get @drag-start 0) (get @drag-end 0))
                        (.-left bounds) (:left margin))
          rect-y-min (- (min (get @drag-start 1) (get @drag-end 1))
                        (.-top bounds) (:top margin))
          rect-y-max (- (max (get @drag-start 1) (get @drag-end 1))
                        (.-top bounds) (:top margin))]
      [:rect {:x rect-x-min :y rect-y-min
              :width (- rect-x-max rect-x-min)
              :height (- rect-y-max rect-y-min)
              :style {:stroke-width 1 :stroke "red" :fill "none"}}])
    [:rect {:x 10 :y 15 :width 20 :height 25}]))


(defn maus-up [db hohe margin achsen]
  (let [chart-xdomain (reagent/cursor db [:chart :xdomain])
        chart-ydomain (reagent/cursor db [:chart :ydomain])
        rect (get (the-rect db margin) 1)
        xstart (:x rect)
        xend (+ xstart (:width rect))
        ystart (:y rect)
        yend (+ ystart (:height rect))
        {:keys [x-achse y-achse]} achsen]
    (when (and (< (+ ystart (:top margin)) (- hohe 35)) ;;klm-obacht 35 is hardcoded and used elsewhere make sure cursor is above zoombutton
               (> (:width rect) 5)
               (> (:height rect) 5))
      (reset! chart-xdomain [(.invert x-achse xstart)
                             (.invert x-achse xend)])
      (reset! chart-ydomain [(.invert y-achse yend)
                             (.invert y-achse ystart)]))
    (reset! (reagent/cursor db [:chart :drag :start]) nil)))

(defn linechart-render [db gm breite hohe margin achsen]
  (let [{:keys [x-achse y-achse z-namen fn-klmlinie]} achsen
        translate #(str "translate(" %1 "," %2 ")")
        xdomain (reagent/cursor db [:chart :xdomain])
        ydomain (reagent/cursor db [:chart :ydomain])
        drag (reagent/cursor db [:chart :drag])
        drag-end (reagent/cursor db [:chart :drag :end])
        fn-addays (fn [date days]
                    (js/Date. (+ (* days 86400000) (.getTime date))))
        fn-zoom (fn []
                  (swap! xdomain #(mapv fn-addays % [-10 10]))
                  (swap! ydomain #(mapv + % [-10 10])))]
    [:svg
     (conj
       {:id "klmlinie-svg"
        :style {:border "thin solid black"}
        :width breite :height hohe
        :on-mouse-down (fn [pos]
                         (let [xy [(.-clientX pos) (.-clientY pos)]]
                           (debug/add "down" {:start xy :end xy})
                           (reset! drag {:start xy :end xy})))
        :on-mouse-up (fn[_] (maus-up db hohe margin achsen))}

       (cond
         @(reagent/cursor db [:chart :drag :start])
         {:on-mouse-move (fn [pos]
                           (-> (reagent/cursor db [:chart :drag :end])
                               (reset!  [(.-clientX pos) (.-clientY pos)])))}))
     [:g {:id "chartarea"
          :transform (translate (:left margin) (:top margin))}
      [:g {:id "xachse"
           :transform (translate 0
                        (- hohe (:top margin) (:bottom margin)))}]
      [:g {:id "yachse"}
       [:text
        {:transform "rotate(-90)"
         :style {:font "10px sans-serif"
                 :-webkit-user-select "none"
                 :pointer-events "none"}
         :y 6
         :dy "0.71em"
         :fill "#000"}
        "EUR"]]
      (cond
        @(reagent/cursor db [:chart :drag :start])
        [the-rect db margin])
      (#(map %2 %1) gm
        (fn [data]
          (let [lastx (-> data :values last :xx)
                lasty (-> data :values last :yy)]
            [:g
             {:class "kurve"
              :key (:id data)}
             [:path {:class "line"
                     :d (fn-klmlinie (clj->js (:values data)))
                     :style {:stroke (z-namen (:id data))
                             :fill "none"}}]
             [:text
              {:transform (translate (x-achse lastx) (y-achse lasty))
               :style {:font "10px sans-serif"
                       :-webkit-user-select "none"
                       :pointer-events "none"}
               :x 3
               :dy "0.35em"}
              (:id data)]])))]
     [:rect {:width 75
             :height 30
             :x (:left margin)
             :y (- hohe 35) ;;klm-obacht 35 is hardcoded and used elsewhere
             :style {:fill "#66a"}
             :on-click fn-zoom}]
     [:text {:x (+ (:left margin) 15)
             :y (- hohe 15)
             :style {:-webkit-user-select "none" :pointer-events "none"}}
      "Zoom"]]))

(defn linechart-d3-renderings [this]
  (let [[_ db _gm _breite _hohe _margin achsen] (reagent/argv this)
        {:keys [x-achse y-achse]}  achsen]
    (-> (reagent/cursor db [:chart :dom-node])
        (reset!  (reagent/dom-node this)))
    (-> (.select js/d3 "#xachse")
        (.call (.axisBottom js/d3 x-achse))
        (.selectAll "text")
        (.style "-webkit-user-select" "none")
        (.style "pointer-events" "none"))
    (-> (.select js/d3 "#yachse")
        (.call (.axisLeft js/d3 y-achse))
        (.selectAll "text")
        (.style "-webkit-user-select" "none")
        (.style "pointer-events" "none"))))

(defn linechart-2 [db gm breite hohe margin achsen]
  (reagent/create-class
    {:reagent-render linechart-render
     :component-did-mount linechart-d3-renderings
     :component-did-update linechart-d3-renderings}))

(defn linechart [db graphmap breite hohe]
  (let [chart-xdomain (reagent/cursor db [:chart :xdomain])
        chart-ydomain (reagent/cursor db [:chart :ydomain])
        gm (zipwalkthrough string-to-time graphmap)
        extract (fn [data kw1 kw2]
                  (map (fn[v1] (kw2 v1))
                    (flatten (map (fn[v0] (kw1 v0)) data))))
        xvalues (extract gm :values :xx)
        yvalues (extract gm :values :yy)
        xdomain [(apply min xvalues) (apply max xvalues)]
        ydomain [(apply min yvalues) (apply max yvalues)]
        zvalues (mapv (fn[v0] (:id v0)) gm)
        margin {:left (int (* 0.1 breite)) :right (int (* 0.2 breite))
                :top (int (* 0.1 hohe)) :bottom (int (* 0.25 hohe))}
        graphbreite (- breite (:left margin) (:right margin))
        graphhohe (- hohe (:top margin) (:bottom margin))
        bang! (reset! chart-xdomain xdomain)
        bang! (reset! chart-ydomain ydomain)]
    (fn [db graphmap breite hohe]
      (let [achsen (achsen [graphbreite graphhohe]
                     @chart-xdomain
                     @chart-ydomain
                     zvalues)
            dbg (debug/add "achsen" achsen)
            dbg (debug/add "xdomain" xdomain)]
        [linechart-2 db gm breite hohe margin achsen]))))

(comment
  (def graphmapalt
    [{:id "New York"
      :values [
               {:xx "20111001" :yy 63.4}
               {:xx "20111002" :yy 58.0}
               {:xx "20111003" :yy 53.3}]}
     {:id "San Fracisco"
      :values [
               {:xx "20111001" :yy 62.7}
               {:xx "20111002" :yy 59.9}
               {:xx "20111003" :yy 59.1}]}
     {:id "Austin"
      :values [
               {:xx "20111001" :yy 72.2}
               {:xx "20111002" :yy 67.7}
               {:xx "20111003" :yy 69.4}]}])

  (zipwalkthrough string-to-time  graphmapalt)

  (let [extract (fn [data kw1 kw2]
                  (map (fn[v1] (kw2 v1)) (flatten (map (fn[v0] (kw1 v0)) data))))]
    (apply max (extract graphmapalt :values :xx)))

  (let [[breite hohe] [3 4]] hohe)

  (:xx (last (:values (last graphmapalt))))
  (:xx (first (:values (first graphmapalt))))
  (mapv (fn[x] (:id x)) graphmapalt)
  (-> (get graphmapalt 0) :values last :xx))
