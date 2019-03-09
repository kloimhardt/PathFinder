// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8644__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8645__i = 0, G__8645__a = new Array(arguments.length -  0);
while (G__8645__i < G__8645__a.length) {G__8645__a[G__8645__i] = arguments[G__8645__i + 0]; ++G__8645__i;}
  args = new cljs.core.IndexedSeq(G__8645__a,0,null);
} 
return G__8644__delegate.call(this,args);};
G__8644.cljs$lang$maxFixedArity = 0;
G__8644.cljs$lang$applyTo = (function (arglist__8646){
var args = cljs.core.seq(arglist__8646);
return G__8644__delegate(args);
});
G__8644.cljs$core$IFn$_invoke$arity$variadic = G__8644__delegate;
return G__8644;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8647__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8648__i = 0, G__8648__a = new Array(arguments.length -  0);
while (G__8648__i < G__8648__a.length) {G__8648__a[G__8648__i] = arguments[G__8648__i + 0]; ++G__8648__i;}
  args = new cljs.core.IndexedSeq(G__8648__a,0,null);
} 
return G__8647__delegate.call(this,args);};
G__8647.cljs$lang$maxFixedArity = 0;
G__8647.cljs$lang$applyTo = (function (arglist__8649){
var args = cljs.core.seq(arglist__8649);
return G__8647__delegate(args);
});
G__8647.cljs$core$IFn$_invoke$arity$variadic = G__8647__delegate;
return G__8647;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
