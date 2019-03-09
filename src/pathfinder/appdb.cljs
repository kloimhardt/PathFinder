(ns pathfinder.appdb
  (:require [reagent.core :as r]))

(defonce state (r/atom {:dom-node nil
                        :clicked-pos (list)
                        :example '("24")
                        :clicks 0
                        :chart {:xdomain [] :ydomain []    ;;:chart only needed in...
                                :drag {:start nil :end nil} ;;...last example...
                                :dom-node nil}}))
