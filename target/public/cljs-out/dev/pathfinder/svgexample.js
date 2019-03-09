// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.svgexample');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pathfinder.appdb');
goog.require('pathfinder.klmlinechart');
goog.require('pathfinder.debug');
pathfinder.svgexample.production_linechart = (function pathfinder$svgexample$production_linechart(app_db){
var graphmap = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"New Yorky",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),63.4], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),58.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),53.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"San Fracisco",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),62.7], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),59.9], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),59.1], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Austin",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),72.2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),67.7], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),69.4], null)], null)], null)], null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.klmlinechart.linechart,app_db,graphmap,(500),(250)], null);
});
pathfinder.svgexample.linie_component = (function pathfinder$svgexample$linie_component(svgwidth,svgheight){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"linie-svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),svgwidth,new cljs.core.Keyword(null,"height","height",1025178622),svgheight], null)], null);
});
pathfinder.svgexample.linie_did_mount = (function pathfinder$svgexample$linie_did_mount(this$){
var vec__9251 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__9251,(0),null);
var svgwidth = cljs.core.nth.call(null,vec__9251,(1),null);
var svgheight = cljs.core.nth.call(null,vec__9251,(2),null);
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(80),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(30),new cljs.core.Keyword(null,"left","left",-399115937),(20)], null);
var width = ((svgwidth - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin));
var height = ((svgheight - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin));
var x_achse = d3.scaleTime().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width], null)));
var y_achse = d3.scaleLinear().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(0)], null)));
var z_namen = d3.scaleOrdinal(d3.schemeCategory10);
var fn_parsetime = d3.timeParse("%Y%m%d");
var setxdomain = x_achse.domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_parsetime.call(null,"20111001"),fn_parsetime.call(null,"20111003")], null)));
var setydomain = y_achse.domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)));
var setzdomain = z_namen.domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Kurve1","Kurve2"], null)));
var fn_klmlinie = d3.line().curve(d3.curveBasis).x(((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain){
return (function (p1__9243_SHARP_){
return x_achse.call(null,p1__9243_SHARP_.xx);
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain))
).y(((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain){
return (function (p1__9244_SHARP_){
return y_achse.call(null,p1__9244_SHARP_.yy);
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain))
);
var kurvendaten = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Kurve1",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111001"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111002"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111003"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(6)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"Kurve2",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111001"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(6)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111002"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(4)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111003"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(1)], null)], null)], null)], null));
var debug1 = fn_klmlinie.call(null,(kurvendaten[(0)]["values"]));
var translate = ((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1){
return (function (p1__9245_SHARP_,p2__9246_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9245_SHARP_),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9246_SHARP_),")"].join('');
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1))
;
var svg_gruppe = d3.select("#linie-svg").append("g").attr("transform",translate.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)));
var kurve = svg_gruppe.selectAll(".kurve").data(kurvendaten).enter().append("g").attr("class","kurve");
var drawcurves = kurve.append("path").attr("class","line").style("stroke",((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve){
return (function (d){
return z_namen.call(null,d.id);
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve))
).attr("d",((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve){
return (function (d){
return fn_klmlinie.call(null,d.values);
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve))
).style("fill","none");
var last = ((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves){
return (function (p1__9247_SHARP_){
return (p1__9247_SHARP_[(p1__9247_SHARP_.length - (1))]);
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves))
;
var lables = kurve.append("text").datum(((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last){
return (function (p1__9248_SHARP_){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kurvename","kurvename",-880517230),p1__9248_SHARP_.id,new cljs.core.Keyword(null,"wert","wert",1259303496),last.call(null,p1__9248_SHARP_.values)], null));
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last))
).attr("transform",((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last){
return (function (p1__9249_SHARP_){
return translate.call(null,x_achse.call(null,p1__9249_SHARP_.wert.xx),y_achse.call(null,p1__9249_SHARP_.wert.yy));
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last))
).attr("x",(3)).attr("dy","0.35em").style("font","10px sans-serif").text(((function (vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last){
return (function (p1__9250_SHARP_){
return p1__9250_SHARP_.kurvename;
});})(vec__9251,_,svgwidth,svgheight,margin,width,height,x_achse,y_achse,z_namen,fn_parsetime,setxdomain,setydomain,setzdomain,fn_klmlinie,kurvendaten,debug1,translate,svg_gruppe,kurve,drawcurves,last))
);
var drawx = svg_gruppe.append("g").attr("class","axis axis--x").attr("transform",["translate(0,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height),")"].join('')).call(d3.axisBottom(x_achse));
var drawy = svg_gruppe.append("g").attr("class","axis axis--y").call(d3.axisLeft(y_achse)).append("text").attr("transform","rotate(-90)").attr("y",(6)).attr("dy","0.71em").attr("fill","#000").text("EUR");
return null;
});
pathfinder.svgexample.linie_react_only = (function pathfinder$svgexample$linie_react_only(svgwidth,svgheight){
var margin = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(20),new cljs.core.Keyword(null,"right","right",-452581833),(80),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(30),new cljs.core.Keyword(null,"left","left",-399115937),(10)], null);
var width = ((svgwidth - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(margin));
var height = ((svgheight - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin)) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(margin));
var fn_parsetime = d3.timeParse("%Y%m%d");
var x_achse = d3.scaleTime().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),width], null))).domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_parsetime.call(null,"20111001"),fn_parsetime.call(null,"20111003")], null)));
var y_achse = d3.scaleLinear().range(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [height,(0)], null))).domain(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null)));
var kurvendaten = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111001"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111002"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),fn_parsetime.call(null,"20111003"),new cljs.core.Keyword(null,"yy","yy",-1432012814),(6)], null)], null));
var fn_klmlinie = d3.line().curve(d3.curveBasis).x(((function (margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten){
return (function (p1__9254_SHARP_){
return x_achse.call(null,p1__9254_SHARP_.xx);
});})(margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten))
).y(((function (margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten){
return (function (p1__9255_SHARP_){
return y_achse.call(null,p1__9255_SHARP_.yy);
});})(margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten))
);
var translate = ((function (margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten,fn_klmlinie){
return (function (p1__9256_SHARP_,p2__9257_SHARP_){
return ["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__9256_SHARP_),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__9257_SHARP_),")"].join('');
});})(margin,width,height,fn_parsetime,x_achse,y_achse,kurvendaten,fn_klmlinie))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"linie-react-svg",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),svgwidth,new cljs.core.Keyword(null,"height","height",1025178622),svgheight], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),translate.call(null,new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(margin),new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(margin))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"line",new cljs.core.Keyword(null,"d","d",1972142424),fn_klmlinie.call(null,kurvendaten),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(31,119,180)",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),translate.call(null,(165),(80))], null),"Kurve1"], null)], null)], null);
});
new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,pathfinder.svgexample.linie_react_only.call(null,(10),(10)),(2)),(2)),(1)));
pathfinder.svgexample.kreisdaten1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(20),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(70),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"cyan"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(70),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(20),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"cyan"], null)], null);
pathfinder.svgexample.kreise_did_mount = (function pathfinder$svgexample$kreise_did_mount(){
return d3.select("#d3gruppe").attr("transform","translate(120 100)").selectAll("circle").data(cljs.core.clj__GT_js.call(null,pathfinder.svgexample.kreisdaten1)).enter().append("circle").attr("cx",(function (d){
return d.zentrumx;
})).attr("cy",(function (d){
return d.zenty;
})).attr("r",(function (d){
return (0.6 * d.durchmesser);
})).attr("fill",(function (d){
return d.farbe;
}));
});
pathfinder.svgexample.kreisdaten = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(20),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(70),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"green"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(70),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(20),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"green"], null)], null);
pathfinder.svgexample.kreise_component = (function pathfinder$svgexample$kreise_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"thin solid black"], null),new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(250)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"d3gruppe"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"hardcoded",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0 20)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(20),new cljs.core.Keyword(null,"cy","cy",755331060),(70),new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),"purple"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(70),new cljs.core.Keyword(null,"cy","cy",755331060),(20),new cljs.core.Keyword(null,"r","r",-471384190),(10),new cljs.core.Keyword(null,"fill","fill",883462889),"purple"], null)], null)], null),(function (){var kreisdaten = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(20),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(70),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"green"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475),(70),new cljs.core.Keyword(null,"zenty","zenty",-1070360718),(20),new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645),(40),new cljs.core.Keyword(null,"farbe","farbe",-766528101),"green"], null)], null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"clojuremap",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(50 50)"], null)], null),cljs.core.map.call(null,((function (kreisdaten){
return (function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"zentrumx","zentrumx",-1095852475).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"zenty","zenty",-1070360718).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"r","r",-471384190),(0.4 * new cljs.core.Keyword(null,"durchmesser","durchmesser",-1272249645).cljs$core$IFn$_invoke$arity$1(d)),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"farbe","farbe",-766528101).cljs$core$IFn$_invoke$arity$1(d)], null)], null);
});})(kreisdaten))
,kreisdaten));
})()], null);
});
pathfinder.svgexample.content = (function pathfinder$svgexample$content(){
var dieklicks = reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicks","clicks",673274951)], null));
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"draw rectangle to zoom:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.svgexample.production_linechart,pathfinder.appdb.state], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),pathfinder.svgexample.kreise_component,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pathfinder.svgexample.kreise_did_mount], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.svgexample.linie_react_only,(250),(250)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (dieklicks){
return (function (width,height){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),pathfinder.svgexample.linie_component,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pathfinder.svgexample.linie_did_mount], null));
});})(dieklicks))
,(380),(250)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You clicked ",cljs.core.deref.call(null,dieklicks)," times"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (dieklicks){
return (function (){
return cljs.core.swap_BANG_.call(null,dieklicks,cljs.core.inc);
});})(dieklicks))
], null),"Click me"], null)], null);
});
pathfinder.svgexample.d = pathfinder.debug.d;
pathfinder.debug.reset.call(null);

//# sourceMappingURL=svgexample.js.map
