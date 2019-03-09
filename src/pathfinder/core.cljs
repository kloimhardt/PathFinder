(ns pathfinder.core
  (:require [reagent.core :as r]
            [pathfinder.appdb :as appdb]
            [pathfinder.trace :as trace]
            [pathfinder.lib :as lib]
            [pathfinder.svgexample :as svgexample]))

(trace/reset)

(def testvec [["24" "click-test 1" lib/test24]
              ["6" "click-test 2" lib/test6]
              ["8" "click-test 3" lib/test8]
              ["100" "svg-d3-test 1" svgexample/content]
              ["12" "click-test 4" lib/test12]
              ["1" "draw-test 1" lib/test1]
              ["3" "draw-test 3" lib/test3]
              ["4" "draw-test 4" lib/test4]
              ["5" "draw-test 5" lib/test5]
              ["7" "draw-test 7" lib/test7]
              ["9" "draw-test 9" lib/test9]
              ["10" "draw-test 10" lib/test10]
              ["11" "draw-test 11" lib/test11]
              ["13" "draw-test 13" lib/test13]
              ["14" "draw-test 14" lib/test14]
              ["17" "draw-test 17" lib/test17]
              ["18" "draw-test 18" lib/test18]])

(def testmap
  (into {} (for [trpl testvec] [(first trpl) (last trpl)])))

(defn content-render []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))
          (write! [kw val] (swap! (db kw) #(conj % val)))
          (click-handler [event]
           (write! :clicked-pos {:x (.-clientX event) :y (.-clientY event)}))]
     [:svg
      {:id "SvgStage"
       :viewBox [[0 0] [550 400]]
       :preserveAspectRatio "xMidYMid meet"
       :on-click click-handler}
      [:rect
       {:id "SvgScene" :x 0 :y 0 :width 550 :height 400
        :stroke "none" :fill "lightyellow"}]
      [(testmap (first (:example @appdb/state)))]]))

(defn content-did-update [this]
  (reset! (r/cursor appdb/state [:dom-node]) (r/dom-node this)))

(defn content []
    (r/create-class
      {:reagent-render content-render
       :component-did-mount content-did-update
       :component-did-update content-did-update}))

(defn select []
  (letfn [(db [kw] (r/cursor appdb/state [kw]))
          (write! [kw val] (swap! (db kw) #(conj % val)))
          (select-handler [event]
           (write! :example (.-value (.-target event))))]
   [:select
    {:id "dropdown"
     :on-click select-handler}
    (for [trpl testvec]
     (with-meta [:option {:value (first trpl)} (second trpl)]
      {:key (first trpl)}))]))

(defn main-panel []
  [:div
   [select]
   (if (= "100" (first (:example @appdb/state)))
    [svgexample/content]
    [content])])

; tells reagent to begin rendering
(r/render-component [main-panel]
  (.querySelector js/document "#app"))
