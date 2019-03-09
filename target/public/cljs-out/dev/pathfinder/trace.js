// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.trace');
goog.require('cljs.core');
if((typeof pathfinder !== 'undefined') && (typeof pathfinder.trace !== 'undefined') && (typeof pathfinder.trace.d !== 'undefined')){
} else {
pathfinder.trace.d = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
pathfinder.trace.reset = (function pathfinder$trace$reset(){
return cljs.core.reset_BANG_.call(null,pathfinder.trace.d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"text",null], null)], null));
});
pathfinder.trace.add = (function pathfinder$trace$add(text,expr){
if((cljs.core.count.call(null,cljs.core.deref.call(null,pathfinder.trace.d)) > (999))){
pathfinder.trace.reset.call(null);
} else {

}

return cljs.core.swap_BANG_.call(null,pathfinder.trace.d,(function (p1__9150_SHARP_){
return cljs.core.conj.call(null,p1__9150_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,cljs.core.last.call(null,p1__9150_SHARP_)) + (1)),text,expr], null));
}));
});
pathfinder.trace.f = (function pathfinder$trace$f(text){
return cljs.core.filter.call(null,(function (a){
return cljs.core._EQ_.call(null,text,cljs.core.get.call(null,a,(1)));
}),cljs.core.deref.call(null,pathfinder.trace.d));
});

//# sourceMappingURL=trace.js.map
