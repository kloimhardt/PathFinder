(ns pathfinder.klmacros)

(defmacro defn-lt [name argsvec defltmap body]
  (let [args (vec (concat  argsvec (keys defltmap)))
        defvals (vec (vals defltmap))
        start (- (count args) (count defvals))]
    (list 'def name
      (conj
        (concat
          (map (fn[x]
                 (let [theargs (map #(symbol (str "p_" %)) (range x))]
                   (list
                     (into [] theargs)
                     (conj (concat theargs [(defvals (- x start))]) name))))
            (range start (count args)))
          [(list args body)])
        'fn))))

(comment
 (defmacro defn-lt1 [name args-lt body]
   (let [args (vec (concat  (butlast args-lt) (keys (last args-lt))))
         defvals (vec (vals (last args-lt)))
         start (- (count args) (count defvals))]
     (list 'def name
       (conj
         (concat
           (map (fn[x]
                  (let [theargs (map #(symbol (str "p_" %)) (range x))]
                    (list
                      (into [] theargs)
                      (conj (concat theargs [(defvals (- x start))]) name))))
             (range start (count args)))
           [(list args body)])
         'fn)))))

(comment
  (macroexpand '(defn-lt1 myplus2 [c d {e 3}] (+ c d e)))
  (defn-lt1 myplus3 [c d {e 3}] (+ c d e))
  (myplus3 4 6 1)
  (macroexpand '(defn-lt myplus4 [{c :a} d] {{e :b} 3} (+ c d e)))
  (defn-lt myplus5 [{c :a} d] {{e :b} {:b 3}} (+ c d e))
  (myplus5 {:a 6} 3 {:b 1}))
