// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.klmlinechart');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.zip');
goog.require('pathfinder.debug');
pathfinder.klmlinechart.map_vec_zipper = (function pathfinder$klmlinechart$map_vec_zipper(m){
return clojure.zip.zipper.call(null,(function (x){
return ((cljs.core.map_QMARK_.call(null,x)) || (cljs.core.sequential_QMARK_.call(null,x)));
}),cljs.core.seq,(function (p,xs){
if(cljs.core.isa_QMARK_.call(null,cljs.core.type.call(null,p),cljs.core.MapEntry)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
} else {
return cljs.core.into.call(null,cljs.core.empty.call(null,p),xs);
}
}),m);
});
pathfinder.klmlinechart.zipwalkthrough = (function pathfinder$klmlinechart$zipwalkthrough(function$,data){
var zippedata = pathfinder.klmlinechart.map_vec_zipper.call(null,data);
while(true){
if(clojure.zip.end_QMARK_.call(null,zippedata)){
return clojure.zip.root.call(null,zippedata);
} else {
var G__9220 = clojure.zip.next.call(null,function$.call(null,zippedata));
zippedata = G__9220;
continue;
}
break;
}
});
pathfinder.klmlinechart.fn_parsetime = d3.timeParse("%Y%m%d");
pathfinder.klmlinechart.string_to_time = (function pathfinder$klmlinechart$string_to_time(zippedmapvec){
var node = clojure.zip.node.call(null,zippedmapvec);
if(cljs.core._EQ_.call(null,node,new cljs.core.Keyword(null,"xx","xx",-1542203733))){
var nextstep = clojure.zip.next.call(null,zippedmapvec);
return clojure.zip.replace.call(null,nextstep,pathfinder.klmlinechart.fn_parsetime.call(null,clojure.zip.node.call(null,nextstep)));
} else {
return zippedmapvec;
}
});
pathfinder.klmlinechart.achsen = (function pathfinder$klmlinechart$achsen(drawdomain,xdomain,ydomain,zdomain){
var vec__9223 = drawdomain;
var width = cljs.core.nth.call(null,vec__9223,(0),null);
var height = cljs.core.nth.call(null,vec__9223,(1),null);
var x_achse = d3.scaleTime().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width], null))).domain(cljs.core.clj__GT_js.call(null,xdomain));
var y_achse = d3.scaleLinear().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(0)], null))).domain(cljs.core.clj__GT_js.call(null,ydomain));
var z_namen = d3.scaleOrdinal(d3.schemeCategory10).domain(cljs.core.clj__GT_js.call(null,zdomain));
var fn_klmlinie = d3.line().curve(d3.curveBasis).x(((function (vec__9223,width,height,x_achse,y_achse,z_namen){
return (function (p1__9221_SHARP_){
return x_achse.call(null,p1__9221_SHARP_.xx);
});})(vec__9223,width,height,x_achse,y_achse,z_namen))
).y(((function (vec__9223,width,height,x_achse,y_achse,z_namen){
return (function (p1__9222_SHARP_){
return y_achse.call(null,p1__9222_SHARP_.yy);
});})(vec__9223,width,height,x_achse,y_achse,z_namen))
);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x-achse","x-achse",-1077501510),x_achse,new cljs.core.Keyword(null,"y-achse","y-achse",-1081868759),y_achse,new cljs.core.Keyword(null,"z-namen","z-namen",-463355990),z_namen,new cljs.core.Keyword(null,"fn-klmlinie","fn-klmlinie",-1949717359),fn_klmlinie], null);
});
pathfinder.klmlinechart.the_rect = (function pathfinder$klmlinechart$the_rect(db,margin){
var temp__5718__auto__ = cljs.core.deref.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"dom-node","dom-node",452283727)], null)));
if(cljs.core.truth_(temp__5718__auto__)){
var dom_node = temp__5718__auto__;
var bounds = dom_node.getBoundingClientRect();
var drag_start = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981)], null));
var drag_end = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"end","end",-268185958)], null));
var rect_x_min = (((function (){var x__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_start),(0));
var y__4223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_end),(0));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() - bounds.left) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin));
var rect_x_max = (((function (){var x__4219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_start),(0));
var y__4220__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_end),(0));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})() - bounds.left) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin));
var rect_y_min = (((function (){var x__4222__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_start),(1));
var y__4223__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_end),(1));
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})() - bounds.top) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin));
var rect_y_max = (((function (){var x__4219__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_start),(1));
var y__4220__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,drag_end),(1));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})() - bounds.top) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),rect_x_min,new cljs.core.Keyword(null,"y","y",-1757859776),rect_y_min,new cljs.core.Keyword(null,"width","width",-384071477),(rect_x_max - rect_x_min),new cljs.core.Keyword(null,"height","height",1025178622),(rect_y_max - rect_y_min),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"red",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(15),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null);
}
});
pathfinder.klmlinechart.maus_up = (function pathfinder$klmlinechart$maus_up(db,hohe,margin,achsen){
var chart_xdomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"xdomain","xdomain",-324348844)], null));
var chart_ydomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"ydomain","ydomain",-2056655172)], null));
var rect = cljs.core.get.call(null,pathfinder.klmlinechart.the_rect.call(null,db,margin),(1));
var xstart = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect);
var xend = (xstart + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect));
var ystart = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect);
var yend = (ystart + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect));
var map__9226 = achsen;
var map__9226__$1 = (((((!((map__9226 == null))))?(((((map__9226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9226):map__9226);
var x_achse = cljs.core.get.call(null,map__9226__$1,new cljs.core.Keyword(null,"x-achse","x-achse",-1077501510));
var y_achse = cljs.core.get.call(null,map__9226__$1,new cljs.core.Keyword(null,"y-achse","y-achse",-1081868759));
if(((((ystart + new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) < (hohe - (35)))) && ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect) > (5))) && ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect) > (5))))){
cljs.core.reset_BANG_.call(null,chart_xdomain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_achse.invert(xstart),x_achse.invert(xend)], null));

cljs.core.reset_BANG_.call(null,chart_ydomain,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_achse.invert(yend),y_achse.invert(ystart)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981)], null)),null);
});
pathfinder.klmlinechart.linechart_render = (function pathfinder$klmlinechart$linechart_render(db,gm,breite,hohe,margin,achsen){
var map__9234 = achsen;
var map__9234__$1 = (((((!((map__9234 == null))))?(((((map__9234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9234):map__9234);
var x_achse = cljs.core.get.call(null,map__9234__$1,new cljs.core.Keyword(null,"x-achse","x-achse",-1077501510));
var y_achse = cljs.core.get.call(null,map__9234__$1,new cljs.core.Keyword(null,"y-achse","y-achse",-1081868759));
var z_namen = cljs.core.get.call(null,map__9234__$1,new cljs.core.Keyword(null,"z-namen","z-namen",-463355990));
var fn_klmlinie = cljs.core.get.call(null,map__9234__$1,new cljs.core.Keyword(null,"fn-klmlinie","fn-klmlinie",-1949717359));
var translate = ((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie){
return (function (p1__9228_SHARP_,p2__9229_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9228_SHARP_),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9229_SHARP_),")"].join('');
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie))
;
var xdomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"xdomain","xdomain",-324348844)], null));
var ydomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"ydomain","ydomain",-2056655172)], null));
var drag = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290)], null));
var drag_end = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"end","end",-268185958)], null));
var fn_addays = ((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end){
return (function (date,days){
return (new Date(((days * (86400000)) + date.getTime())));
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end))
;
var fn_zoom = ((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays){
return (function (){
cljs.core.swap_BANG_.call(null,xdomain,((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays){
return (function (p1__9230_SHARP_){
return cljs.core.mapv.call(null,fn_addays,p1__9230_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null));
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays))
);

return cljs.core.swap_BANG_.call(null,ydomain,((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays){
return (function (p1__9231_SHARP_){
return cljs.core.mapv.call(null,cljs.core._PLUS_,p1__9231_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null));
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays))
);
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"klmlinie-svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),breite,new cljs.core.Keyword(null,"height","height",1025178622),hohe,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom){
return (function (pos){
var xy = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.clientX,pos.clientY], null);
pathfinder.debug.add.call(null,"down",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),xy,new cljs.core.Keyword(null,"end","end",-268185958),xy], null));

return cljs.core.reset_BANG_.call(null,drag,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),xy,new cljs.core.Keyword(null,"end","end",-268185958),xy], null));
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom){
return (function (_){
return pathfinder.klmlinechart.maus_up.call(null,db,hohe,margin,achsen);
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom))
], null),(cljs.core.truth_(cljs.core.deref.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom){
return (function (pos){
return cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"end","end",-268185958)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos.clientX,pos.clientY], null));
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom))
], null):null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"chartarea",new cljs.core.Keyword(null,"transform","transform",1381301764),translate.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"xachse",new cljs.core.Keyword(null,"transform","transform",1381301764),translate.call(null,(0),((hohe - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yachse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(-90)",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font","font",-1506159249),"10px sans-serif",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.Keyword(null,"y","y",-1757859776),(6),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.71em",new cljs.core.Keyword(null,"fill","fill",883462889),"#000"], null),"EUR"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"drag","drag",449951290),new cljs.core.Keyword(null,"start","start",-355208981)], null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.klmlinechart.the_rect,db,margin], null):null),((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom){
return (function (p1__9233_SHARP_,p2__9232_SHARP_){
return cljs.core.map.call(null,p2__9232_SHARP_,p1__9233_SHARP_);
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom))
.call(null,gm,((function (map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom){
return (function (data){
var lastx = new cljs.core.Keyword(null,"xx","xx",-1542203733).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(data)));
var lasty = new cljs.core.Keyword(null,"yy","yy",-1432012814).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(data)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"kurve",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"line",new cljs.core.Keyword(null,"d","d",1972142424),fn_klmlinie.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),z_namen.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),translate.call(null,x_achse.call(null,lastx),y_achse.call(null,lasty)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font","font",-1506159249),"10px sans-serif",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.Keyword(null,"x","x",2099068185),(3),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.35em"], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)], null);
});})(map__9234,map__9234__$1,x_achse,y_achse,z_namen,fn_klmlinie,translate,xdomain,ydomain,drag,drag_end,fn_addays,fn_zoom))
)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(75),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"y","y",-1757859776),(hohe - (35)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#66a"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),fn_zoom], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin) + (15)),new cljs.core.Keyword(null,"y","y",-1757859776),(hohe - (15)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),"Zoom"], null)], null);
});
pathfinder.klmlinechart.linechart_d3_renderings = (function pathfinder$klmlinechart$linechart_d3_renderings(this$){
var vec__9236 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__9236,(0),null);
var db = cljs.core.nth.call(null,vec__9236,(1),null);
var _gm = cljs.core.nth.call(null,vec__9236,(2),null);
var _breite = cljs.core.nth.call(null,vec__9236,(3),null);
var _hohe = cljs.core.nth.call(null,vec__9236,(4),null);
var _margin = cljs.core.nth.call(null,vec__9236,(5),null);
var achsen = cljs.core.nth.call(null,vec__9236,(6),null);
var map__9239 = achsen;
var map__9239__$1 = (((((!((map__9239 == null))))?(((((map__9239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9239):map__9239);
var x_achse = cljs.core.get.call(null,map__9239__$1,new cljs.core.Keyword(null,"x-achse","x-achse",-1077501510));
var y_achse = cljs.core.get.call(null,map__9239__$1,new cljs.core.Keyword(null,"y-achse","y-achse",-1081868759));
cljs.core.reset_BANG_.call(null,reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"dom-node","dom-node",452283727)], null)),reagent.core.dom_node.call(null,this$));

d3.select("#xachse").call(d3.axisBottom(x_achse)).selectAll("text").style("-webkit-user-select","none").style("pointer-events","none");

return d3.select("#yachse").call(d3.axisLeft(y_achse)).selectAll("text").style("-webkit-user-select","none").style("pointer-events","none");
});
pathfinder.klmlinechart.linechart_2 = (function pathfinder$klmlinechart$linechart_2(db,gm,breite,hohe,margin,achsen){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),pathfinder.klmlinechart.linechart_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pathfinder.klmlinechart.linechart_d3_renderings,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),pathfinder.klmlinechart.linechart_d3_renderings], null));
});
pathfinder.klmlinechart.linechart = (function pathfinder$klmlinechart$linechart(db,graphmap,breite,hohe){
var chart_xdomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"xdomain","xdomain",-324348844)], null));
var chart_ydomain = reagent.core.cursor.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"ydomain","ydomain",-2056655172)], null));
var gm = pathfinder.klmlinechart.zipwalkthrough.call(null,pathfinder.klmlinechart.string_to_time,graphmap);
var extract = ((function (chart_xdomain,chart_ydomain,gm){
return (function (data,kw1,kw2){
return cljs.core.map.call(null,((function (chart_xdomain,chart_ydomain,gm){
return (function (v1){
return kw2.call(null,v1);
});})(chart_xdomain,chart_ydomain,gm))
,cljs.core.flatten.call(null,cljs.core.map.call(null,((function (chart_xdomain,chart_ydomain,gm){
return (function (v0){
return kw1.call(null,v0);
});})(chart_xdomain,chart_ydomain,gm))
,data)));
});})(chart_xdomain,chart_ydomain,gm))
;
var xvalues = extract.call(null,gm,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"xx","xx",-1542203733));
var yvalues = extract.call(null,gm,new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword(null,"yy","yy",-1432012814));
var xdomain = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,xvalues),cljs.core.apply.call(null,cljs.core.max,xvalues)], null);
var ydomain = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.min,yvalues),cljs.core.apply.call(null,cljs.core.max,yvalues)], null);
var zvalues = cljs.core.mapv.call(null,((function (chart_xdomain,chart_ydomain,gm,extract,xvalues,yvalues,xdomain,ydomain){
return (function (v0){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v0);
});})(chart_xdomain,chart_ydomain,gm,extract,xvalues,yvalues,xdomain,ydomain))
,gm);
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),((0.1 * breite) | (0)),new cljs.core.Keyword(null,"right","right",-452581833),((0.2 * breite) | (0)),new cljs.core.Keyword(null,"top","top",-1856271961),((0.1 * hohe) | (0)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((0.25 * hohe) | (0))], null);
var graphbreite = ((breite - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin));
var graphhohe = ((hohe - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin));
var bang_BANG_ = cljs.core.reset_BANG_.call(null,chart_xdomain,xdomain);
var bang_BANG___$1 = cljs.core.reset_BANG_.call(null,chart_ydomain,ydomain);
return ((function (chart_xdomain,chart_ydomain,gm,extract,xvalues,yvalues,xdomain,ydomain,zvalues,margin,graphbreite,graphhohe,bang_BANG_,bang_BANG___$1){
return (function (db__$1,graphmap__$1,breite__$1,hohe__$1){
var achsen = pathfinder.klmlinechart.achsen.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [graphbreite,graphhohe], null),cljs.core.deref.call(null,chart_xdomain),cljs.core.deref.call(null,chart_ydomain),zvalues);
var dbg = pathfinder.debug.add.call(null,"achsen",achsen);
var dbg__$1 = pathfinder.debug.add.call(null,"xdomain",xdomain);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.klmlinechart.linechart_2,db__$1,gm,breite__$1,hohe__$1,margin,achsen], null);
});
;})(chart_xdomain,chart_ydomain,gm,extract,xvalues,yvalues,xdomain,ydomain,zvalues,margin,graphbreite,graphhohe,bang_BANG_,bang_BANG___$1))
});

//# sourceMappingURL=klmlinechart.js.map
