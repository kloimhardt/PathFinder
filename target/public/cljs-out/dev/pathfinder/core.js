// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pathfinder.appdb');
goog.require('pathfinder.trace');
goog.require('pathfinder.lib');
goog.require('pathfinder.svgexample');
pathfinder.trace.reset.call(null);
pathfinder.core.testvec = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["24","click-test 1",pathfinder.lib.test24], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["6","click-test 2",pathfinder.lib.test6], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["8","click-test 3",pathfinder.lib.test8], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["100","svg-d3-test 1",pathfinder.svgexample.content], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["12","click-test 4",pathfinder.lib.test12], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","draw-test 1",pathfinder.lib.test1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3","draw-test 3",pathfinder.lib.test3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4","draw-test 4",pathfinder.lib.test4], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["5","draw-test 5",pathfinder.lib.test5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["7","draw-test 7",pathfinder.lib.test7], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["9","draw-test 9",pathfinder.lib.test9], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["10","draw-test 10",pathfinder.lib.test10], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["11","draw-test 11",pathfinder.lib.test11], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["13","draw-test 13",pathfinder.lib.test13], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["14","draw-test 14",pathfinder.lib.test14], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["17","draw-test 17",pathfinder.lib.test17], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["18","draw-test 18",pathfinder.lib.test18], null)], null);
pathfinder.core.testmap = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function pathfinder$core$iter__9683(s__9684){
return (new cljs.core.LazySeq(null,(function (){
var s__9684__$1 = s__9684;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9684__$1);
if(temp__5720__auto__){
var s__9684__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9684__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9684__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9686 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9685 = (0);
while(true){
if((i__9685 < size__4522__auto__)){
var trpl = cljs.core._nth.call(null,c__4521__auto__,i__9685);
cljs.core.chunk_append.call(null,b__9686,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,trpl),cljs.core.last.call(null,trpl)], null));

var G__9687 = (i__9685 + (1));
i__9685 = G__9687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9686),pathfinder$core$iter__9683.call(null,cljs.core.chunk_rest.call(null,s__9684__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9686),null);
}
} else {
var trpl = cljs.core.first.call(null,s__9684__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,trpl),cljs.core.last.call(null,trpl)], null),pathfinder$core$iter__9683.call(null,cljs.core.rest.call(null,s__9684__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,pathfinder.core.testvec);
})());
pathfinder.core.content_render = (function pathfinder$core$content_render(){
var db = (function pathfinder$core$content_render_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
var write_BANG_ = (function pathfinder$core$content_render_$_write_BANG_(kw,val){
return cljs.core.swap_BANG_.call(null,db.call(null,kw),(function (p1__9688_SHARP_){
return cljs.core.conj.call(null,p1__9688_SHARP_,val);
}));
});
var click_handler = (function pathfinder$core$content_render_$_click_handler(event){
return write_BANG_.call(null,new cljs.core.Keyword(null,"clicked-pos","clicked-pos",-504424725),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),event.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),event.clientY], null));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"SvgStage",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(550),(400)], null)], null),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"xMidYMid meet",new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"SvgScene",new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(550),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"lightyellow"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.core.testmap.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pathfinder.appdb.state))))], null)], null);
});
pathfinder.core.content_did_update = (function pathfinder$core$content_did_update(this$){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-node","dom-node",452283727)], null)),reagent.core.dom_node.call(null,this$));
});
pathfinder.core.content = (function pathfinder$core$content(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),pathfinder.core.content_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pathfinder.core.content_did_update,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),pathfinder.core.content_did_update], null));
});
pathfinder.core.select = (function pathfinder$core$select(){
var db = (function pathfinder$core$select_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
var write_BANG_ = (function pathfinder$core$select_$_write_BANG_(kw,val){
return cljs.core.swap_BANG_.call(null,db.call(null,kw),(function (p1__9689_SHARP_){
return cljs.core.conj.call(null,p1__9689_SHARP_,val);
}));
});
var select_handler = (function pathfinder$core$select_$_select_handler(event){
return write_BANG_.call(null,new cljs.core.Keyword(null,"example","example",-1755779144),event.target.value);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"dropdown",new cljs.core.Keyword(null,"on-click","on-click",1632826543),select_handler], null),(function (){var iter__4523__auto__ = (function pathfinder$core$select_$_iter__9690(s__9691){
return (new cljs.core.LazySeq(null,(function (){
var s__9691__$1 = s__9691;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9691__$1);
if(temp__5720__auto__){
var s__9691__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9691__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9691__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9693 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9692 = (0);
while(true){
if((i__9692 < size__4522__auto__)){
var trpl = cljs.core._nth.call(null,c__4521__auto__,i__9692);
cljs.core.chunk_append.call(null,b__9693,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,trpl)], null),cljs.core.second.call(null,trpl)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,trpl)], null)));

var G__9694 = (i__9692 + (1));
i__9692 = G__9694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9693),pathfinder$core$select_$_iter__9690.call(null,cljs.core.chunk_rest.call(null,s__9691__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9693),null);
}
} else {
var trpl = cljs.core.first.call(null,s__9691__$2);
return cljs.core.cons.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,trpl)], null),cljs.core.second.call(null,trpl)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first.call(null,trpl)], null)),pathfinder$core$select_$_iter__9690.call(null,cljs.core.rest.call(null,s__9691__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,pathfinder.core.testvec);
})()], null);
});
pathfinder.core.main_panel = (function pathfinder$core$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.core.select], null),((cljs.core._EQ_.call(null,"100",cljs.core.first.call(null,new cljs.core.Keyword(null,"example","example",-1755779144).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,pathfinder.appdb.state)))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.svgexample.content], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.core.content], null))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.core.main_panel], null),document.querySelector("#app"));

//# sourceMappingURL=core.js.map
