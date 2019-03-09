// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19041){
var map__19042 = p__19041;
var map__19042__$1 = (((((!((map__19042 == null))))?(((((map__19042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19042):map__19042);
var m = map__19042__$1;
var n = cljs.core.get.call(null,map__19042__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19044_19076 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19045_19077 = null;
var count__19046_19078 = (0);
var i__19047_19079 = (0);
while(true){
if((i__19047_19079 < count__19046_19078)){
var f_19080 = cljs.core._nth.call(null,chunk__19045_19077,i__19047_19079);
cljs.core.println.call(null,"  ",f_19080);


var G__19081 = seq__19044_19076;
var G__19082 = chunk__19045_19077;
var G__19083 = count__19046_19078;
var G__19084 = (i__19047_19079 + (1));
seq__19044_19076 = G__19081;
chunk__19045_19077 = G__19082;
count__19046_19078 = G__19083;
i__19047_19079 = G__19084;
continue;
} else {
var temp__5720__auto___19085 = cljs.core.seq.call(null,seq__19044_19076);
if(temp__5720__auto___19085){
var seq__19044_19086__$1 = temp__5720__auto___19085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19044_19086__$1)){
var c__4550__auto___19087 = cljs.core.chunk_first.call(null,seq__19044_19086__$1);
var G__19088 = cljs.core.chunk_rest.call(null,seq__19044_19086__$1);
var G__19089 = c__4550__auto___19087;
var G__19090 = cljs.core.count.call(null,c__4550__auto___19087);
var G__19091 = (0);
seq__19044_19076 = G__19088;
chunk__19045_19077 = G__19089;
count__19046_19078 = G__19090;
i__19047_19079 = G__19091;
continue;
} else {
var f_19092 = cljs.core.first.call(null,seq__19044_19086__$1);
cljs.core.println.call(null,"  ",f_19092);


var G__19093 = cljs.core.next.call(null,seq__19044_19086__$1);
var G__19094 = null;
var G__19095 = (0);
var G__19096 = (0);
seq__19044_19076 = G__19093;
chunk__19045_19077 = G__19094;
count__19046_19078 = G__19095;
i__19047_19079 = G__19096;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19097 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19097);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19097)))?cljs.core.second.call(null,arglists_19097):arglists_19097));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19048_19098 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19049_19099 = null;
var count__19050_19100 = (0);
var i__19051_19101 = (0);
while(true){
if((i__19051_19101 < count__19050_19100)){
var vec__19062_19102 = cljs.core._nth.call(null,chunk__19049_19099,i__19051_19101);
var name_19103 = cljs.core.nth.call(null,vec__19062_19102,(0),null);
var map__19065_19104 = cljs.core.nth.call(null,vec__19062_19102,(1),null);
var map__19065_19105__$1 = (((((!((map__19065_19104 == null))))?(((((map__19065_19104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19065_19104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19065_19104):map__19065_19104);
var doc_19106 = cljs.core.get.call(null,map__19065_19105__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19107 = cljs.core.get.call(null,map__19065_19105__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19103);

cljs.core.println.call(null," ",arglists_19107);

if(cljs.core.truth_(doc_19106)){
cljs.core.println.call(null," ",doc_19106);
} else {
}


var G__19108 = seq__19048_19098;
var G__19109 = chunk__19049_19099;
var G__19110 = count__19050_19100;
var G__19111 = (i__19051_19101 + (1));
seq__19048_19098 = G__19108;
chunk__19049_19099 = G__19109;
count__19050_19100 = G__19110;
i__19051_19101 = G__19111;
continue;
} else {
var temp__5720__auto___19112 = cljs.core.seq.call(null,seq__19048_19098);
if(temp__5720__auto___19112){
var seq__19048_19113__$1 = temp__5720__auto___19112;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19048_19113__$1)){
var c__4550__auto___19114 = cljs.core.chunk_first.call(null,seq__19048_19113__$1);
var G__19115 = cljs.core.chunk_rest.call(null,seq__19048_19113__$1);
var G__19116 = c__4550__auto___19114;
var G__19117 = cljs.core.count.call(null,c__4550__auto___19114);
var G__19118 = (0);
seq__19048_19098 = G__19115;
chunk__19049_19099 = G__19116;
count__19050_19100 = G__19117;
i__19051_19101 = G__19118;
continue;
} else {
var vec__19067_19119 = cljs.core.first.call(null,seq__19048_19113__$1);
var name_19120 = cljs.core.nth.call(null,vec__19067_19119,(0),null);
var map__19070_19121 = cljs.core.nth.call(null,vec__19067_19119,(1),null);
var map__19070_19122__$1 = (((((!((map__19070_19121 == null))))?(((((map__19070_19121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19070_19121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19070_19121):map__19070_19121);
var doc_19123 = cljs.core.get.call(null,map__19070_19122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19124 = cljs.core.get.call(null,map__19070_19122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19120);

cljs.core.println.call(null," ",arglists_19124);

if(cljs.core.truth_(doc_19123)){
cljs.core.println.call(null," ",doc_19123);
} else {
}


var G__19125 = cljs.core.next.call(null,seq__19048_19113__$1);
var G__19126 = null;
var G__19127 = (0);
var G__19128 = (0);
seq__19048_19098 = G__19125;
chunk__19049_19099 = G__19126;
count__19050_19100 = G__19127;
i__19051_19101 = G__19128;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__19072 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19073 = null;
var count__19074 = (0);
var i__19075 = (0);
while(true){
if((i__19075 < count__19074)){
var role = cljs.core._nth.call(null,chunk__19073,i__19075);
var temp__5720__auto___19129__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19129__$1)){
var spec_19130 = temp__5720__auto___19129__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19130));
} else {
}


var G__19131 = seq__19072;
var G__19132 = chunk__19073;
var G__19133 = count__19074;
var G__19134 = (i__19075 + (1));
seq__19072 = G__19131;
chunk__19073 = G__19132;
count__19074 = G__19133;
i__19075 = G__19134;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__19072);
if(temp__5720__auto____$1){
var seq__19072__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19072__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19072__$1);
var G__19135 = cljs.core.chunk_rest.call(null,seq__19072__$1);
var G__19136 = c__4550__auto__;
var G__19137 = cljs.core.count.call(null,c__4550__auto__);
var G__19138 = (0);
seq__19072 = G__19135;
chunk__19073 = G__19136;
count__19074 = G__19137;
i__19075 = G__19138;
continue;
} else {
var role = cljs.core.first.call(null,seq__19072__$1);
var temp__5720__auto___19139__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19139__$2)){
var spec_19140 = temp__5720__auto___19139__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19140));
} else {
}


var G__19141 = cljs.core.next.call(null,seq__19072__$1);
var G__19142 = null;
var G__19143 = (0);
var G__19144 = (0);
seq__19072 = G__19141;
chunk__19073 = G__19142;
count__19074 = G__19143;
i__19075 = G__19144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19145 = cljs.core.conj.call(null,via,t);
var G__19146 = cljs.core.ex_cause.call(null,t);
via = G__19145;
t = G__19146;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19149 = datafied_throwable;
var map__19149__$1 = (((((!((map__19149 == null))))?(((((map__19149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19149):map__19149);
var via = cljs.core.get.call(null,map__19149__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19149__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19149__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19150 = cljs.core.last.call(null,via);
var map__19150__$1 = (((((!((map__19150 == null))))?(((((map__19150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19150):map__19150);
var type = cljs.core.get.call(null,map__19150__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19150__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19150__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19151 = data;
var map__19151__$1 = (((((!((map__19151 == null))))?(((((map__19151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19151):map__19151);
var problems = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19151__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19152 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19152__$1 = (((((!((map__19152 == null))))?(((((map__19152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19152):map__19152);
var top_data = map__19152__$1;
var source = cljs.core.get.call(null,map__19152__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19157 = phase;
var G__19157__$1 = (((G__19157 instanceof cljs.core.Keyword))?G__19157.fqn:null);
switch (G__19157__$1) {
case "read-source":
var map__19158 = data;
var map__19158__$1 = (((((!((map__19158 == null))))?(((((map__19158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19158):map__19158);
var line = cljs.core.get.call(null,map__19158__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19158__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19160 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19160__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19160,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19160);
var G__19160__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19160__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19160__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19160__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19161 = top_data;
var G__19161__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19161,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19161);
var G__19161__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19161__$1);
var G__19161__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19161__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19161__$2);
var G__19161__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19161__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19161__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19161__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19161__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19162 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19162,(0),null);
var method = cljs.core.nth.call(null,vec__19162,(1),null);
var file = cljs.core.nth.call(null,vec__19162,(2),null);
var line = cljs.core.nth.call(null,vec__19162,(3),null);
var G__19165 = top_data;
var G__19165__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19165,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19165);
var G__19165__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19165__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19165__$1);
var G__19165__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__19165__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19165__$2);
var G__19165__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19165__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19165__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19165__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19165__$4;
}

break;
case "execution":
var vec__19166 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19166,(0),null);
var method = cljs.core.nth.call(null,vec__19166,(1),null);
var file = cljs.core.nth.call(null,vec__19166,(2),null);
var line = cljs.core.nth.call(null,vec__19166,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__19166,source__$1,method,file,line,G__19157,G__19157__$1,map__19149,map__19149__$1,via,trace,phase,map__19150,map__19150__$1,type,message,data,map__19151,map__19151__$1,problems,fn,caller,map__19152,map__19152__$1,top_data,source){
return (function (p1__19148_SHARP_){
var or__4131__auto__ = (p1__19148_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19148_SHARP_);
}
});})(vec__19166,source__$1,method,file,line,G__19157,G__19157__$1,map__19149,map__19149__$1,via,trace,phase,map__19150,map__19150__$1,type,message,data,map__19151,map__19151__$1,problems,fn,caller,map__19152,map__19152__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19169 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19169__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19169,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19169);
var G__19169__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19169__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19169__$1);
var G__19169__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19169__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19169__$2);
var G__19169__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19169__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19169__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19169__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19169__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19157__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19173){
var map__19174 = p__19173;
var map__19174__$1 = (((((!((map__19174 == null))))?(((((map__19174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19174):map__19174);
var triage_data = map__19174__$1;
var phase = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19174__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19176 = phase;
var G__19176__$1 = (((G__19176 instanceof cljs.core.Keyword))?G__19176.fqn:null);
switch (G__19176__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19177_19186 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19178_19187 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19179_19188 = true;
var _STAR_print_fn_STAR__temp_val__19180_19189 = ((function (_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19179_19188;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19180_19189;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,_STAR_print_fn_STAR__temp_val__19180_19189,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,_STAR_print_fn_STAR__temp_val__19180_19189,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19171_SHARP_){
return cljs.core.dissoc.call(null,p1__19171_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,_STAR_print_fn_STAR__temp_val__19180_19189,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19177_19186,_STAR_print_fn_STAR__orig_val__19178_19187,_STAR_print_newline_STAR__temp_val__19179_19188,_STAR_print_fn_STAR__temp_val__19180_19189,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19178_19187;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19177_19186;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19181_19190 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19182_19191 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19183_19192 = true;
var _STAR_print_fn_STAR__temp_val__19184_19193 = ((function (_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19183_19192;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19184_19193;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,_STAR_print_fn_STAR__temp_val__19184_19193,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,_STAR_print_fn_STAR__temp_val__19184_19193,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19172_SHARP_){
return cljs.core.dissoc.call(null,p1__19172_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,_STAR_print_fn_STAR__temp_val__19184_19193,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19181_19190,_STAR_print_fn_STAR__orig_val__19182_19191,_STAR_print_newline_STAR__temp_val__19183_19192,_STAR_print_fn_STAR__temp_val__19184_19193,sb__4661__auto__,G__19176,G__19176__$1,loc,class_name,simple_class,cause_type,format,map__19174,map__19174__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19182_19191;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19181_19190;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19176__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
