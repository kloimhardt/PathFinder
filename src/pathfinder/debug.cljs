(ns pathfinder.debug)

(defonce d (atom []))

(defn reset [] (reset! d [[0 "text" nil]]))

(defn add [text expr]
  (cond (> (count @d) 999) (reset) :else nil)
  (swap! d #(conj % [(inc (first (last %)))
                     text
                     expr])))

(defn f [text]
  (filter (fn[a] (= text (get a 1))) (deref d)))
