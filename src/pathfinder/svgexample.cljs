(ns pathfinder.svgexample
  (:require [reagent.core :as r]
            [pathfinder.appdb :as appdb]
            [pathfinder.klmlinechart :as klmlinechart]
            [pathfinder.debug :as debug]))

(defn production-linechart [app-db]
  (let [graphmap
        [{:id "New Yorky"
          :values [{:xx "20111001" :yy 63.4}
                   {:xx "20111002" :yy 58.0}
                   {:xx "20111003" :yy 53.3}]}
         {:id "San Fracisco"
          :values [{:xx "20111001" :yy 62.7}
                   {:xx "20111002" :yy 59.9}
                   {:xx "20111003" :yy 59.1}]}
         {:id "Austin"
          :values [{:xx "20111001" :yy 72.2}
                   {:xx "20111002" :yy 67.7}
                   {:xx "20111003" :yy 69.4}]}]]
    [klmlinechart/linechart app-db graphmap 500 250]))

(defn linie-component [svgwidth svgheight]
  [:svg
   {:id "linie-svg"
    :style {:border "thin solid black"}
    :width svgwidth :height svgheight}])

(defn linie-did-mount [this]  ;;one argument, not the svgwidth+height
   (let [[_ svgwidth svgheight] (r/argv this)
         margin {:top 20 :right 80 :bottom 30 :left 20}
         width (- svgwidth (:left margin) (:right margin))
         height (- svgheight (:top margin) (:bottom margin))
         x-achse (-> js/d3
                  (.scaleTime)
                  (.range (clj->js [0 width])))
         y-achse (-> js/d3
                  (.scaleLinear)
                  (.range (clj->js [height 0])))
         z-namen (.scaleOrdinal js/d3 (.-schemeCategory10 js/d3))
         fn-parsetime (.timeParse js/d3 "%Y%m%d")
         setxdomain (.domain x-achse (clj->js [(fn-parsetime "20111001")
                                               (fn-parsetime "20111003")]))
         setydomain (.domain y-achse (clj->js [0 10]))
         setzdomain (.domain z-namen (clj->js ["Kurve1" "Kurve2"]))
         fn-klmlinie (-> js/d3
                         (.line)
                         (.curve (.-curveBasis js/d3))
                         (.x #(x-achse (.-xx %)))
                         (.y #(y-achse (.-yy %))))
         kurvendaten (clj->js
                       [{:id "Kurve1"
                         :values [{:xx (fn-parsetime "20111001") :yy 2}
                                  {:xx (fn-parsetime "20111002") :yy 3}
                                  {:xx (fn-parsetime "20111003") :yy 6}]}
                        {:id "Kurve2"
                         :values [{:xx (fn-parsetime "20111001") :yy 6}
                                  {:xx (fn-parsetime "20111002") :yy 4}
                                  {:xx (fn-parsetime "20111003") :yy 1}]}])
         debug1 (fn-klmlinie (aget kurvendaten 0 "values"))
         ;;debug1 yields "M0,160L30.8,156.6C61.6,153.3,123.3,146.6,185,
         ;;133.3C246.6,120,308.3,100,339.16,90L370,80"
         translate #(str "translate(" %1 "," %2 ")")  ;;helper function
         ;;all of the above is just functions that do not access the dom
         ;;----------------------------------------------------------------
         ;;from here on the dom manipulation starts
         svg-gruppe (-> js/d3
                        (.select "#linie-svg")
                        (.append "g")
                        (.attr "transform" (translate (:left margin)
                                             (:top margin))))
         kurve (-> svg-gruppe
                   (.selectAll ".kurve")
                   (.data kurvendaten)
                   (.enter)  ;;starts a (map (fn[d] ...) kurvendaten)
                   (.append "g")
                   (.attr "class" "kurve"))

         drawcurves (-> kurve
                        (.append "path")
                        (.attr "class" "line")
                        (.style "stroke" (fn[d] (z-namen (.-id d))))
                        (.attr "d" (fn[d] (fn-klmlinie (.-values d))))
                        ;;fn-klmlinie takes a vector as argument and
                        ;;returns a string
                        (.style "fill" "none"))
         last #(aget % (dec (.-length %)))
         lables (-> kurve
                    (.append "text")
                    ;the following is a data transformation
                    ;very clojuresque but mingled in
                    (.datum #(clj->js {:kurvename (.-id %)
                                       :wert (last (.-values %))}))
                    (.attr "transform" #(translate
                                          (x-achse (.. % -wert -xx))
                                          (y-achse (.. % -wert -yy))))
                    (.attr "x" 3)
                    (.attr "dy" "0.35em")
                    (.style "font" "10px sans-serif")
                    (.text #(.-kurvename %)))

         ;;according to her speech http://sxywu.com/react-d3/#/d3
         ;;in October 2017 React-Clojure Meetup, Shirly Wu claims
         ;;that d3 needs the dom for axes, but not for shapes
         ;;so the above drawings can be done outside d3
         ;;but it seems impossible to do the below axis drawings
         ;;without d3

         drawx (-> svg-gruppe
                   (.append "g")
                   (.attr "class" "axis axis--x")
                   (.attr "transform" (str "translate(0," height ")"))
                   (.call (.axisBottom js/d3 x-achse))) ;;genuine d3 call
         drawy (-> svg-gruppe
                   (.append "g")
                   (.attr "class" "axis axis--y")
                   (.call (.axisLeft js/d3 y-achse))
                   (.append "text")
                   (.attr "transform" "rotate(-90)")
                   (.attr "y" 6)
                   (.attr "dy" "0.71em")
                   (.attr "fill" "#000")
                   (.text "EUR"))]

     (do #_(setxdomain)
       #_(setydomain)
       #_(setzdomain)
       #_(drawx)
       #_(drawy)
       #_(drawcurves)
       #_(lables))))

(defn linie-react-only [svgwidth svgheight]
  (let [margin {:top 20 :right 80 :bottom 30 :left 10}
        width (- svgwidth (:left margin) (:right margin))
        height (- svgheight (:top margin) (:bottom margin))
        fn-parsetime (.timeParse js/d3 "%Y%m%d")
        x-achse (-> js/d3
                    (.scaleTime)
                    (.range (clj->js [0 width]))
                    (.domain (clj->js [(fn-parsetime "20111001")
                                       (fn-parsetime "20111003")])))
        y-achse (-> js/d3
                    (.scaleLinear)
                    (.range (clj->js [height 0]))
                    (.domain (clj->js [0 10])))
        kurvendaten (clj->js [{:xx (fn-parsetime "20111001") :yy 2}
                              {:xx (fn-parsetime "20111002") :yy 3}
                              {:xx (fn-parsetime "20111003") :yy 6}])
        fn-klmlinie (-> js/d3
                        (.line)
                        (.curve (.-curveBasis js/d3))
                        (.x #(x-achse (.-xx %)))
                        (.y #(y-achse (.-yy %))))
        translate #(str "translate(" %1 "," %2 ")")]
    [:svg
     {:id "linie-react-svg"
      :style {:border "thin solid black"}
      :width svgwidth :height svgheight}
     [:g {:transform (translate (:left margin) (:top margin))}
      [:path {:class "line"
              :d (fn-klmlinie kurvendaten)
              :style {:stroke "rgb(31,119,180)"
                      :fill "none"}}]
      [:text {:transform (translate 165 80)} "Kurve1"]]]))

(:d (get (get (get (linie-react-only 10 10) 2) 2) 1))

(def kreisdaten1
  [{:zentrumx 20 :zenty 70 :durchmesser 40 :farbe "cyan"}
   {:zentrumx 70 :zenty 20 :durchmesser 40 :farbe "cyan"}])

(defn kreise-did-mount []
   (-> js/d3
       (.select "#d3gruppe")
       (.attr "transform" "translate(120 100)")
       (.selectAll "circle")
       (.data (clj->js kreisdaten1))
       (.enter) ;;starts something like (map (fn[d]))
       (.append "circle") ;;dom is seen as mutable data
       (.attr "cx" (fn[d] (.-zentrumx d)))
       (.attr "cy" (fn[d] (.-zenty d)))
       (.attr "r" (fn[d] (* 0.6 (.-durchmesser d))))
       (.attr "fill" (fn[d] (.-farbe d)))))

(def kreisdaten ;;blue
  [{:zentrumx 20 :zenty 70 :durchmesser 40 :farbe "green"}
   {:zentrumx 70 :zenty 20 :durchmesser 40 :farbe "green"}])

(defn kreise-component []
  [:svg
   {:style {:border "thin solid black"}
    :width 250 :height 250}
   [:g {:id "d3gruppe"}] ;;svg graphics are divided in gruoups :g
   [:g
    {:id "hardcoded"
     :transform "translate(0 20)"}  ;;which then can be moved to 150
    [:circle {:cx 20 :cy 70 :r 10 :fill "purple"}]
    [:circle {:cx 70 :cy 20 :r 10 :fill "purple"}]] ;;red
   (let [kreisdaten
         [{:zentrumx 20 :zenty 70 :durchmesser 40 :farbe "green"} ;;blue
          {:zentrumx 70 :zenty 20 :durchmesser 40 :farbe "green"}]]
     (into [:g
            {:id "clojuremap"
             :transform "translate(50 50)"}]
       (map (fn[d]
              [:circle
               {:cx (:zentrumx d)
                :cy (:zenty d)
                :r (* 0.4 (:durchmesser d))
                :fill (:farbe d)}]) kreisdaten)))])

(defn content []
  (let [dieklicks (r/cursor appdb/state [:clicks])]
    [:div
     [:p "draw rectangle to zoom:"]
     [production-linechart appdb/state]
     [:p]
     [(r/create-class
        {;;kreise-component returns vector like above
         :reagent-render kreise-component
         ;;kreise-did-mount does dom mutation with d3
         :component-did-mount kreise-did-mount})]
     [:p]
     [linie-react-only 250 250] ;no did-mount necessary, no d3-painting
     [:p]
     [(fn [width height]
        (r/create-class
          {:reagent-render linie-component ;takes 2 args
           :component-did-mount linie-did-mount}))
      380 250] ;;both fns have access to data [380 250]
     [:p "You clicked " @dieklicks " times"]  ;;h1
     [:button {:on-click (fn []
                           (swap! dieklicks inc))}
      "Click me"]]))


(def d debug/d) ;;map with stuff I inspect in repl
(debug/reset) ;;what is debug best practice?
