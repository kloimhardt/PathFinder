// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.debug');
goog.require('cljs.core');
if((typeof pathfinder !== 'undefined') && (typeof pathfinder.debug !== 'undefined') && (typeof pathfinder.debug.d !== 'undefined')){
} else {
pathfinder.debug.d = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
pathfinder.debug.reset = (function pathfinder$debug$reset(){
return cljs.core.reset_BANG_.call(null,pathfinder.debug.d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"text",null], null)], null));
});
pathfinder.debug.add = (function pathfinder$debug$add(text,expr){
if((cljs.core.count.call(null,cljs.core.deref.call(null,pathfinder.debug.d)) > (999))){
pathfinder.debug.reset.call(null);
} else {

}

return cljs.core.swap_BANG_.call(null,pathfinder.debug.d,(function (p1__9217_SHARP_){
return cljs.core.conj.call(null,p1__9217_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first.call(null,cljs.core.last.call(null,p1__9217_SHARP_)) + (1)),text,expr], null));
}));
});
pathfinder.debug.f = (function pathfinder$debug$f(text){
return cljs.core.filter.call(null,(function (a){
return cljs.core._EQ_.call(null,text,cljs.core.get.call(null,a,(1)));
}),cljs.core.deref.call(null,pathfinder.debug.d));
});

//# sourceMappingURL=debug.js.map
