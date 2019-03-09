// Compiled by ClojureScript 1.10.520 {}
goog.provide('pathfinder.lib');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('pathfinder.appdb');
goog.require('pathfinder.trace');
pathfinder.lib.draw_point = (function() {
var pathfinder$lib$draw_point = null;
var pathfinder$lib$draw_point__1 = (function (p_0){
return pathfinder.lib.draw_point.call(null,p_0,"#000000");
});
var pathfinder$lib$draw_point__2 = (function (p__9281,color){
var map__9282 = p__9281;
var map__9282__$1 = (((((!((map__9282 == null))))?(((((map__9282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9282):map__9282);
var x = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9282__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#ffffff",new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),(1)], null)], null);
});
pathfinder$lib$draw_point = function(p__9281,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_point__1.call(this,p__9281);
case 2:
return pathfinder$lib$draw_point__2.call(this,p__9281,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_point.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_point__1;
pathfinder$lib$draw_point.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_point__2;
return pathfinder$lib$draw_point;
})()
;
pathfinder.lib.draw_line = (function() {
var pathfinder$lib$draw_line = null;
var pathfinder$lib$draw_line__2 = (function (p_0,p_1){
return pathfinder.lib.draw_line.call(null,p_0,p_1,"#dddddd");
});
var pathfinder$lib$draw_line__3 = (function (p__9284,p__9285,color){
var map__9286 = p__9284;
var map__9286__$1 = (((((!((map__9286 == null))))?(((((map__9286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9286):map__9286);
var x0 = cljs.core.get.call(null,map__9286__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9286__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9287 = p__9285;
var map__9287__$1 = (((((!((map__9287 == null))))?(((((map__9287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9287):map__9287);
var x1 = cljs.core.get.call(null,map__9287__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9287__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"x1","x1",-1863922247),x0,new cljs.core.Keyword(null,"y1","y1",589123466),y0,new cljs.core.Keyword(null,"x2","x2",-1362513475),x1,new cljs.core.Keyword(null,"y2","y2",-718691301),y1], null)], null);
});
pathfinder$lib$draw_line = function(p__9284,p__9285,color){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_line__2.call(this,p__9284,p__9285);
case 3:
return pathfinder$lib$draw_line__3.call(this,p__9284,p__9285,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_line.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_line__2;
pathfinder$lib$draw_line.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_line__3;
return pathfinder$lib$draw_line;
})()
;
pathfinder.lib.draw_x = (function() {
var pathfinder$lib$draw_x = null;
var pathfinder$lib$draw_x__1 = (function (p_0){
return pathfinder.lib.draw_x.call(null,p_0,"#ff0000");
});
var pathfinder$lib$draw_x__2 = (function (p__9290,color){
var map__9291 = p__9290;
var map__9291__$1 = (((((!((map__9291 == null))))?(((((map__9291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9291):map__9291);
var x = cljs.core.get.call(null,map__9291__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9291__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var d = (5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - d),new cljs.core.Keyword(null,"y","y",-1757859776),(y - d)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + d),new cljs.core.Keyword(null,"y","y",-1757859776),(y + d)], null),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + d),new cljs.core.Keyword(null,"y","y",-1757859776),(y - d)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - d),new cljs.core.Keyword(null,"y","y",-1757859776),(y + d)], null),color], null)], null);
});
pathfinder$lib$draw_x = function(p__9290,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_x__1.call(this,p__9290);
case 2:
return pathfinder$lib$draw_x__2.call(this,p__9290,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_x.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_x__1;
pathfinder$lib$draw_x.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_x__2;
return pathfinder$lib$draw_x;
})()
;
pathfinder.lib.draw_cross = (function() {
var pathfinder$lib$draw_cross = null;
var pathfinder$lib$draw_cross__1 = (function (p_0){
return pathfinder.lib.draw_cross.call(null,p_0,"#FF0000");
});
var pathfinder$lib$draw_cross__2 = (function (p__9293,color){
var map__9294 = p__9293;
var map__9294__$1 = (((((!((map__9294 == null))))?(((((map__9294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9294):map__9294);
var x = cljs.core.get.call(null,map__9294__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9294__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var d = (5);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - d),new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x + d),new cljs.core.Keyword(null,"y","y",-1757859776),y], null),color], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y - d)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),(y + d)], null),color], null)], null);
});
pathfinder$lib$draw_cross = function(p__9293,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_cross__1.call(this,p__9293);
case 2:
return pathfinder$lib$draw_cross__2.call(this,p__9293,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_cross.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_cross__1;
pathfinder$lib$draw_cross.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_cross__2;
return pathfinder$lib$draw_cross;
})()
;
pathfinder.lib.draw_diamond = (function() {
var pathfinder$lib$draw_diamond = null;
var pathfinder$lib$draw_diamond__1 = (function (p_0){
return pathfinder.lib.draw_diamond.call(null,p_0,"#FF0000");
});
var pathfinder$lib$draw_diamond__2 = (function (p__9296,color){
var map__9297 = p__9296;
var map__9297__$1 = (((((!((map__9297 == null))))?(((((map__9297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9297):map__9297);
var x = cljs.core.get.call(null,map__9297__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9297__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var d = (5);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - d),(x - d),y,x,(y + d),(x + d),y,x,(y - d)], null)], null)], null);
});
pathfinder$lib$draw_diamond = function(p__9296,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_diamond__1.call(this,p__9296);
case 2:
return pathfinder$lib$draw_diamond__2.call(this,p__9296,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_diamond.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_diamond__1;
pathfinder$lib$draw_diamond.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_diamond__2;
return pathfinder$lib$draw_diamond;
})()
;
pathfinder.lib.draw_circle = (function() {
var pathfinder$lib$draw_circle = null;
var pathfinder$lib$draw_circle__2 = (function (p_0,p_1){
return pathfinder.lib.draw_circle.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_circle__3 = (function (p_0,p_1,p_2){
return pathfinder.lib.draw_circle.call(null,p_0,p_1,p_2,"#FFFFFF");
});
var pathfinder$lib$draw_circle__4 = (function (p__9299,r,color0,color1){
var map__9300 = p__9299;
var map__9300__$1 = (((((!((map__9300 == null))))?(((((map__9300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9300):map__9300);
var x = cljs.core.get.call(null,map__9300__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9300__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color0,new cljs.core.Keyword(null,"fill","fill",883462889),color1,new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null);
});
pathfinder$lib$draw_circle = function(p__9299,r,color0,color1){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_circle__2.call(this,p__9299,r);
case 3:
return pathfinder$lib$draw_circle__3.call(this,p__9299,r,color0);
case 4:
return pathfinder$lib$draw_circle__4.call(this,p__9299,r,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_circle.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_circle__2;
pathfinder$lib$draw_circle.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_circle__3;
pathfinder$lib$draw_circle.cljs$core$IFn$_invoke$arity$4 = pathfinder$lib$draw_circle__4;
return pathfinder$lib$draw_circle;
})()
;
pathfinder.lib.draw_text_field = (function() {
var pathfinder$lib$draw_text_field = null;
var pathfinder$lib$draw_text_field__2 = (function (p_0,p_1){
return pathfinder.lib.draw_text_field.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_text_field__3 = (function (p__9302,txt,color){
var map__9303 = p__9302;
var map__9303__$1 = (((((!((map__9303 == null))))?(((((map__9303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9303):map__9303);
var x = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9303__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"central",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"8",new cljs.core.Keyword(null,"fill","fill",883462889),color,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),txt], null);
});
pathfinder$lib$draw_text_field = function(p__9302,txt,color){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_text_field__2.call(this,p__9302,txt);
case 3:
return pathfinder$lib$draw_text_field__3.call(this,p__9302,txt,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_text_field.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_text_field__2;
pathfinder$lib$draw_text_field.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_text_field__3;
return pathfinder$lib$draw_text_field;
})()
;
pathfinder.lib.draw_text_circle = (function() {
var pathfinder$lib$draw_text_circle = null;
var pathfinder$lib$draw_text_circle__2 = (function (p_0,p_1){
return pathfinder.lib.draw_text_circle.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_text_circle__3 = (function (p_0,p_1,p_2){
return pathfinder.lib.draw_text_circle.call(null,p_0,p_1,p_2,"#FFFFFF");
});
var pathfinder$lib$draw_text_circle__4 = (function (p__9305,txt,color0,color1){
var map__9306 = p__9305;
var map__9306__$1 = (((((!((map__9306 == null))))?(((((map__9306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9306):map__9306);
var x = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9306__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = (7);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color0,new cljs.core.Keyword(null,"fill","fill",883462889),color1,new cljs.core.Keyword(null,"cx","cx",1272694324),x,new cljs.core.Keyword(null,"cy","cy",755331060),y,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),txt], null)], null);
});
pathfinder$lib$draw_text_circle = function(p__9305,txt,color0,color1){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_text_circle__2.call(this,p__9305,txt);
case 3:
return pathfinder$lib$draw_text_circle__3.call(this,p__9305,txt,color0);
case 4:
return pathfinder$lib$draw_text_circle__4.call(this,p__9305,txt,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_text_circle.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_text_circle__2;
pathfinder$lib$draw_text_circle.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_text_circle__3;
pathfinder$lib$draw_text_circle.cljs$core$IFn$_invoke$arity$4 = pathfinder$lib$draw_text_circle__4;
return pathfinder$lib$draw_text_circle;
})()
;
pathfinder.lib.draw_text_rect = (function() {
var pathfinder$lib$draw_text_rect = null;
var pathfinder$lib$draw_text_rect__2 = (function (p_0,p_1){
return pathfinder.lib.draw_text_rect.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_text_rect__3 = (function (p_0,p_1,p_2){
return pathfinder.lib.draw_text_rect.call(null,p_0,p_1,p_2,"#FFFFFF");
});
var pathfinder$lib$draw_text_rect__4 = (function (p_0,p_1,p_2,p_3){
return pathfinder.lib.draw_text_rect.call(null,p_0,p_1,p_2,p_3,"#000000");
});
var pathfinder$lib$draw_text_rect__5 = (function (p__9308,txt,color0,color1,color2){
var map__9309 = p__9308;
var map__9309__$1 = (((((!((map__9309 == null))))?(((((map__9309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9309):map__9309);
var x = cljs.core.get.call(null,map__9309__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9309__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = (7);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color0,new cljs.core.Keyword(null,"fill","fill",883462889),color1,new cljs.core.Keyword(null,"x","x",2099068185),(x - r),new cljs.core.Keyword(null,"y","y",-1757859776),(y - r),new cljs.core.Keyword(null,"width","width",-384071477),((2) * r),new cljs.core.Keyword(null,"height","height",1025178622),((2) * r)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),txt], null)], null);
});
pathfinder$lib$draw_text_rect = function(p__9308,txt,color0,color1,color2){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_text_rect__2.call(this,p__9308,txt);
case 3:
return pathfinder$lib$draw_text_rect__3.call(this,p__9308,txt,color0);
case 4:
return pathfinder$lib$draw_text_rect__4.call(this,p__9308,txt,color0,color1);
case 5:
return pathfinder$lib$draw_text_rect__5.call(this,p__9308,txt,color0,color1,color2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_text_rect.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_text_rect__2;
pathfinder$lib$draw_text_rect.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_text_rect__3;
pathfinder$lib$draw_text_rect.cljs$core$IFn$_invoke$arity$4 = pathfinder$lib$draw_text_rect__4;
pathfinder$lib$draw_text_rect.cljs$core$IFn$_invoke$arity$5 = pathfinder$lib$draw_text_rect__5;
return pathfinder$lib$draw_text_rect;
})()
;
pathfinder.lib.test1 = (function pathfinder$lib$test1(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"SvgContainer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_diamond,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_field,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),"A"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_circle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(200),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),"B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_rect,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),"C"], null)], null);
});
pathfinder.lib.triangle = (function pathfinder$lib$triangle(var_args){
var G__9312 = arguments.length;
switch (G__9312) {
case 1:
return pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$1 = (function (n0){
return pathfinder.lib.triangle.call(null,n0,n0,n0);
});

pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$2 = (function (n0,n1){
return pathfinder.lib.triangle.call(null,n0,n1,n1);
});

pathfinder.lib.triangle.cljs$core$IFn$_invoke$arity$3 = (function (n0,n1,n2){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"n0","n0",-1963304087),n0,new cljs.core.Keyword(null,"n1","n1",-1687681187),n1,new cljs.core.Keyword(null,"n2","n2",1481890316),n2,new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"ngb01","ngb01",1342721758),null,new cljs.core.Keyword(null,"ngb12","ngb12",-131368682),null,new cljs.core.Keyword(null,"ngb02","ngb02",86273950),null], null);
});

pathfinder.lib.triangle.cljs$lang$maxFixedArity = 3;

pathfinder.lib.draw_triangle = (function() {
var pathfinder$lib$draw_triangle = null;
var pathfinder$lib$draw_triangle__1 = (function (p_0){
return pathfinder.lib.draw_triangle.call(null,p_0,"#000000");
});
var pathfinder$lib$draw_triangle__2 = (function (p_0,p_1){
return pathfinder.lib.draw_triangle.call(null,p_0,p_1,"#ddffdd");
});
var pathfinder$lib$draw_triangle__3 = (function (p__9314,color0,color1){
var vec__9315 = p__9314;
var map__9318 = cljs.core.nth.call(null,vec__9315,(0),null);
var map__9318__$1 = (((((!((map__9318 == null))))?(((((map__9318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9318):map__9318);
var x0 = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9318__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9319 = cljs.core.nth.call(null,vec__9315,(1),null);
var map__9319__$1 = (((((!((map__9319 == null))))?(((((map__9319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9319):map__9319);
var x1 = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9319__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9320 = cljs.core.nth.call(null,vec__9315,(2),null);
var map__9320__$1 = (((((!((map__9320 == null))))?(((((map__9320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9320):map__9320);
var x2 = cljs.core.get.call(null,map__9320__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9320__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),color1,new cljs.core.Keyword(null,"fill","fill",883462889),color0,new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2,x0,y0,x1,y1,x2,y2], null)], null)], null);
});
pathfinder$lib$draw_triangle = function(p__9314,color0,color1){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_triangle__1.call(this,p__9314);
case 2:
return pathfinder$lib$draw_triangle__2.call(this,p__9314,color0);
case 3:
return pathfinder$lib$draw_triangle__3.call(this,p__9314,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_triangle.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_triangle__1;
pathfinder$lib$draw_triangle.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_triangle__2;
pathfinder$lib$draw_triangle.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_triangle__3;
return pathfinder$lib$draw_triangle;
})()
;
pathfinder.lib.triangle_nodes = (function pathfinder$lib$triangle_nodes(nodes,triangle){
return cljs.core.mapv.call(null,(function (p1__9324_SHARP_){
return cljs.core.get.call(null,nodes,p1__9324_SHARP_.call(null,triangle));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"n0","n0",-1963304087),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.Keyword(null,"n2","n2",1481890316)], null));
});
pathfinder.lib.draw_triangles = (function() {
var pathfinder$lib$draw_triangles = null;
var pathfinder$lib$draw_triangles__1 = (function (p_0){
return pathfinder.lib.draw_triangles.call(null,p_0,"#888888");
});
var pathfinder$lib$draw_triangles__2 = (function (p_0,p_1){
return pathfinder.lib.draw_triangles.call(null,p_0,p_1,null);
});
var pathfinder$lib$draw_triangles__3 = (function (tpath,color0,color1){
var draw = (function pathfinder$lib$draw_triangles_$_draw(triangle){
return pathfinder.lib.draw_triangle.call(null,pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),triangle),color0,color1);
});
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,draw,cljs.core.filter.call(null,new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath))));
});
pathfinder$lib$draw_triangles = function(tpath,color0,color1){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_triangles__1.call(this,tpath);
case 2:
return pathfinder$lib$draw_triangles__2.call(this,tpath,color0);
case 3:
return pathfinder$lib$draw_triangles__3.call(this,tpath,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_triangles.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_triangles__1;
pathfinder$lib$draw_triangles.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_triangles__2;
pathfinder$lib$draw_triangles.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_triangles__3;
return pathfinder$lib$draw_triangles;
})()
;
pathfinder.lib.draw_node_indexes = (function() {
var pathfinder$lib$draw_node_indexes = null;
var pathfinder$lib$draw_node_indexes__1 = (function (p_0){
return pathfinder.lib.draw_node_indexes.call(null,p_0,"#000000");
});
var pathfinder$lib$draw_node_indexes__2 = (function (p_0,p_1){
return pathfinder.lib.draw_node_indexes.call(null,p_0,p_1,"#FFFFFF");
});
var pathfinder$lib$draw_node_indexes__3 = (function (tpath,color0,color1){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map_indexed.call(null,(function (idx,node){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_circle,node,cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),color0,color1], null);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath)));
});
pathfinder$lib$draw_node_indexes = function(tpath,color0,color1){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_node_indexes__1.call(this,tpath);
case 2:
return pathfinder$lib$draw_node_indexes__2.call(this,tpath,color0);
case 3:
return pathfinder$lib$draw_node_indexes__3.call(this,tpath,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_node_indexes.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_node_indexes__1;
pathfinder$lib$draw_node_indexes.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_node_indexes__2;
pathfinder$lib$draw_node_indexes.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_node_indexes__3;
return pathfinder$lib$draw_node_indexes;
})()
;
pathfinder.lib.draw_triangle_index = (function() {
var pathfinder$lib$draw_triangle_index = null;
var pathfinder$lib$draw_triangle_index__2 = (function (p_0,p_1){
return pathfinder.lib.draw_triangle_index.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_triangle_index__3 = (function (p_0,p_1,p_2){
return pathfinder.lib.draw_triangle_index.call(null,p_0,p_1,p_2,"#ffffff");
});
var pathfinder$lib$draw_triangle_index__4 = (function (tindex,p__9325,color0,color1){
var vec__9326 = p__9325;
var map__9329 = cljs.core.nth.call(null,vec__9326,(0),null);
var map__9329__$1 = (((((!((map__9329 == null))))?(((((map__9329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9329):map__9329);
var x0 = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9329__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9330 = cljs.core.nth.call(null,vec__9326,(1),null);
var map__9330__$1 = (((((!((map__9330 == null))))?(((((map__9330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9330):map__9330);
var x1 = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9330__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9331 = cljs.core.nth.call(null,vec__9326,(2),null);
var map__9331__$1 = (((((!((map__9331 == null))))?(((((map__9331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9331):map__9331);
var x2 = cljs.core.get.call(null,map__9331__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9331__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var draw = ((function (vec__9326,map__9329,map__9329__$1,x0,y0,map__9330,map__9330__$1,x1,y1,map__9331,map__9331__$1,x2,y2){
return (function pathfinder$lib$draw_triangle_index_$_draw(pt){
return pathfinder.lib.draw_text_rect.call(null,pt,cljs.core.str.cljs$core$IFn$_invoke$arity$1(tindex),color0,color1);
});})(vec__9326,map__9329,map__9329__$1,x0,y0,map__9330,map__9330__$1,x1,y1,map__9331,map__9331__$1,x2,y2))
;
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null))){
return draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x0 + x1) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),((y0 + y1) / (2))], null));
} else {
return draw.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(((x0 + x1) + x2) / (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(((y0 + y1) + y2) / (3))], null));
}
});
pathfinder$lib$draw_triangle_index = function(tindex,p__9325,color0,color1){
switch(arguments.length){
case 2:
return pathfinder$lib$draw_triangle_index__2.call(this,tindex,p__9325);
case 3:
return pathfinder$lib$draw_triangle_index__3.call(this,tindex,p__9325,color0);
case 4:
return pathfinder$lib$draw_triangle_index__4.call(this,tindex,p__9325,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_triangle_index.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_triangle_index__2;
pathfinder$lib$draw_triangle_index.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_triangle_index__3;
pathfinder$lib$draw_triangle_index.cljs$core$IFn$_invoke$arity$4 = pathfinder$lib$draw_triangle_index__4;
return pathfinder$lib$draw_triangle_index;
})()
;
pathfinder.lib.draw_triangle_indexes = (function() {
var pathfinder$lib$draw_triangle_indexes = null;
var pathfinder$lib$draw_triangle_indexes__1 = (function (p_0){
return pathfinder.lib.draw_triangle_indexes.call(null,p_0,"#000000");
});
var pathfinder$lib$draw_triangle_indexes__2 = (function (p_0,p_1){
return pathfinder.lib.draw_triangle_indexes.call(null,p_0,p_1,"#ffffff");
});
var pathfinder$lib$draw_triangle_indexes__3 = (function (tpath,color0,color1){
var draw = (function pathfinder$lib$draw_triangle_indexes_$_draw(idx,triangle){
if(cljs.core.truth_(new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(triangle))){
return pathfinder.lib.draw_triangle_index.call(null,idx,pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),triangle),color0);
} else {
return null;
}
});
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map_indexed.call(null,draw,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath)));
});
pathfinder$lib$draw_triangle_indexes = function(tpath,color0,color1){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_triangle_indexes__1.call(this,tpath);
case 2:
return pathfinder$lib$draw_triangle_indexes__2.call(this,tpath,color0);
case 3:
return pathfinder$lib$draw_triangle_indexes__3.call(this,tpath,color0,color1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_triangle_indexes.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_triangle_indexes__1;
pathfinder$lib$draw_triangle_indexes.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_triangle_indexes__2;
pathfinder$lib$draw_triangle_indexes.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_triangle_indexes__3;
return pathfinder$lib$draw_triangle_indexes;
})()
;
pathfinder.lib.draw_tpath = (function() {
var pathfinder$lib$draw_tpath = null;
var pathfinder$lib$draw_tpath__1 = (function (p_0){
return pathfinder.lib.draw_tpath.call(null,p_0,"#eeffee");
});
var pathfinder$lib$draw_tpath__2 = (function (p_0,p_1){
return pathfinder.lib.draw_tpath.call(null,p_0,p_1,"#000000");
});
var pathfinder$lib$draw_tpath__3 = (function (p_0,p_1,p_2){
return pathfinder.lib.draw_tpath.call(null,p_0,p_1,p_2,"#ffffff");
});
var pathfinder$lib$draw_tpath__4 = (function (p_0,p_1,p_2,p_3){
return pathfinder.lib.draw_tpath.call(null,p_0,p_1,p_2,p_3,"#dddddd");
});
var pathfinder$lib$draw_tpath__5 = (function (tpath,color0,color1,color2,color3){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_triangles,tpath,color0,color3], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_node_indexes,tpath,color1,color2], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_triangle_indexes,tpath,color1,color2], null)], null);
});
pathfinder$lib$draw_tpath = function(tpath,color0,color1,color2,color3){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_tpath__1.call(this,tpath);
case 2:
return pathfinder$lib$draw_tpath__2.call(this,tpath,color0);
case 3:
return pathfinder$lib$draw_tpath__3.call(this,tpath,color0,color1);
case 4:
return pathfinder$lib$draw_tpath__4.call(this,tpath,color0,color1,color2);
case 5:
return pathfinder$lib$draw_tpath__5.call(this,tpath,color0,color1,color2,color3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_tpath.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_tpath__1;
pathfinder$lib$draw_tpath.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_tpath__2;
pathfinder$lib$draw_tpath.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$draw_tpath__3;
pathfinder$lib$draw_tpath.cljs$core$IFn$_invoke$arity$4 = pathfinder$lib$draw_tpath__4;
pathfinder$lib$draw_tpath.cljs$core$IFn$_invoke$arity$5 = pathfinder$lib$draw_tpath__5;
return pathfinder$lib$draw_tpath;
})()
;
pathfinder.lib.net0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(350)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(350)], null)], null),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.triangle.call(null,(0),(1),(2))], null)], null);
pathfinder.lib.test3 = (function pathfinder$lib$test3(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net0], null);
});
pathfinder.lib.get_param_u_0 = (function pathfinder$lib$get_param_u_0(p__9335,p__9336,p__9337){
var map__9338 = p__9335;
var map__9338__$1 = (((((!((map__9338 == null))))?(((((map__9338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9338):map__9338);
var x = cljs.core.get.call(null,map__9338__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9338__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9339 = p__9336;
var map__9339__$1 = (((((!((map__9339 == null))))?(((((map__9339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9339):map__9339);
var x0 = cljs.core.get.call(null,map__9339__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9339__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9340 = p__9337;
var map__9340__$1 = (((((!((map__9340 == null))))?(((((map__9340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9340):map__9340);
var x1 = cljs.core.get.call(null,map__9340__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9340__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx = (x1 - x0);
var dy = (y1 - y0);
var numerator = (((y0 - y) * dy) + ((x0 - x) * dx));
var denominator = ((dx * dx) + (dy * dy));
return ((- numerator) / denominator);
});
pathfinder.lib.get_param_u = (function pathfinder$lib$get_param_u(p__9344,p__9345,p__9346){
var map__9347 = p__9344;
var map__9347__$1 = (((((!((map__9347 == null))))?(((((map__9347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9347):map__9347);
var x = cljs.core.get.call(null,map__9347__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9347__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9348 = p__9345;
var map__9348__$1 = (((((!((map__9348 == null))))?(((((map__9348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9348):map__9348);
var x0 = cljs.core.get.call(null,map__9348__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9348__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9349 = p__9346;
var map__9349__$1 = (((((!((map__9349 == null))))?(((((map__9349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9349):map__9349);
var x1 = cljs.core.get.call(null,map__9349__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9349__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx = (x1 - x0);
var dy = (y1 - y0);
return ((- (((y0 - y) * dy) + ((x0 - x) * dx))) / ((dx * dx) + (dy * dy)));
});
pathfinder.lib.get_point_by_param = (function pathfinder$lib$get_point_by_param(p__9353,p__9354,u){
var map__9355 = p__9353;
var map__9355__$1 = (((((!((map__9355 == null))))?(((((map__9355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9355):map__9355);
var x0 = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9355__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9356 = p__9354;
var map__9356__$1 = (((((!((map__9356 == null))))?(((((map__9356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9356):map__9356);
var x1 = cljs.core.get.call(null,map__9356__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9356__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((((1) - u) * x0) + (u * x1)),new cljs.core.Keyword(null,"y","y",-1757859776),((((1) - u) * y0) + (u * y1))], null);
});
pathfinder.lib.test4 = (function pathfinder$lib$test4(){
var p = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var p0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null);
var p1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(350)], null);
var u = pathfinder.lib.get_param_u.call(null,p,p0,p1);
var pI = pathfinder.lib.get_point_by_param.call(null,p0,p1,u);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,p0,p1], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,p,pI,"lightblue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,p], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,p0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,p1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,pI,"red"], null)], null);
});
pathfinder.lib.net0a = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(500),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null)], null),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.triangle.call(null,(0),(1))], null)], null);
pathfinder.lib.cross_product_triangle = (function pathfinder$lib$cross_product_triangle(p__9359,p__9360,p__9361){
var map__9362 = p__9359;
var map__9362__$1 = (((((!((map__9362 == null))))?(((((map__9362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9362):map__9362);
var xa = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ya = cljs.core.get.call(null,map__9362__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9363 = p__9360;
var map__9363__$1 = (((((!((map__9363 == null))))?(((((map__9363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9363):map__9363);
var xb = cljs.core.get.call(null,map__9363__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var yb = cljs.core.get.call(null,map__9363__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9364 = p__9361;
var map__9364__$1 = (((((!((map__9364 == null))))?(((((map__9364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9364):map__9364);
var xc = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var yc = cljs.core.get.call(null,map__9364__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((xb - xa) * (yc - ya)) - ((yb - ya) * (xc - xa)));
});
pathfinder.lib.is_point_in_triangle = (function pathfinder$lib$is_point_in_triangle(pathnodes,triangle,p){
var vec__9368 = pathfinder.lib.triangle_nodes.call(null,pathnodes,triangle);
var n0 = cljs.core.nth.call(null,vec__9368,(0),null);
var n1 = cljs.core.nth.call(null,vec__9368,(1),null);
var n2 = cljs.core.nth.call(null,vec__9368,(2),null);
var p0 = pathfinder.lib.cross_product_triangle.call(null,n0,n1,p);
var p1 = pathfinder.lib.cross_product_triangle.call(null,n1,n2,p);
var p2 = pathfinder.lib.cross_product_triangle.call(null,n2,n0,p);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(triangle))){
return null;
} else {
if((((p0 >= (0))) && ((p1 >= (0))) && ((p2 >= (0))))){
return triangle;
} else {
if((((p0 <= (0))) && ((p1 <= (0))) && ((p2 <= (0))))){
return triangle;
} else {
return null;

}
}
}
});
pathfinder.lib.test5 = (function pathfinder$lib$test5(){
var p = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var dum = pathfinder.trace.add.call(null,"isPointInTriangle: ",pathfinder.lib.is_point_in_triangle.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net0a),new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net0a).call(null,(0)),p));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net0a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,p], null)], null);
});
pathfinder.lib.net3 = (function (){var nodes = cljs.core.PersistentVector.fromArray([(10),(10),(10),(390),(540),(10),(540),(390),(100),(50),(100),(150),(200),(50),(200),(150),(300),(50),(300),(150),(400),(50),(400),(150),(500),(50),(500),(150),(300),(250),(400),(250),(200),(350),(300),(350),(150),(250)], true);
var triangles = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(18)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(16)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(17)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(5),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(10),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(11),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(12),(13)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(9),(14)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(14),(15)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(15),(16)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(16),(17)], null)], null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.mapv.call(null,((function (nodes,triangles){
return (function (p__9372){
var vec__9373 = p__9372;
var x = cljs.core.nth.call(null,vec__9373,(0),null);
var y = cljs.core.nth.call(null,vec__9373,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
});})(nodes,triangles))
,cljs.core.partition.call(null,(2),nodes)),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),cljs.core.mapv.call(null,((function (nodes,triangles){
return (function (p1__9371_SHARP_){
return cljs.core.apply.call(null,pathfinder.lib.triangle,p1__9371_SHARP_);
});})(nodes,triangles))
,triangles)], null);
})();
pathfinder.lib.coords_abs_to_rel = (function pathfinder$lib$coords_abs_to_rel(p__9376,dom_node){
var map__9377 = p__9376;
var map__9377__$1 = (((((!((map__9377 == null))))?(((((map__9377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9377):map__9377);
var x = cljs.core.get.call(null,map__9377__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9377__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dim = dom_node.getBoundingClientRect();
var box = dom_node.getBBox();
var dum = pathfinder.trace.add.call(null,"w",dim.width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((((x - dim.left) / dim.width) * box.width) - box.x),new cljs.core.Keyword(null,"y","y",-1757859776),((((y - dim.top) / dim.height) * box.height) - box.y)], null);
});
pathfinder.lib.get_hit_triangle = (function pathfinder$lib$get_hit_triangle(tpath,p){
var is_p_in = (function pathfinder$lib$get_hit_triangle_$_is_p_in(triangle){
return pathfinder.lib.is_point_in_triangle.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),triangle,p);
});
return cljs.core.some.call(null,cljs.core.identity,cljs.core.map.call(null,is_p_in,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath)));
});
pathfinder.lib.get_square_dist = (function pathfinder$lib$get_square_dist(p__9379,p__9380){
var map__9381 = p__9379;
var map__9381__$1 = (((((!((map__9381 == null))))?(((((map__9381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9381):map__9381);
var x0 = cljs.core.get.call(null,map__9381__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9381__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9382 = p__9380;
var map__9382__$1 = (((((!((map__9382 == null))))?(((((map__9382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9382):map__9382);
var x1 = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9382__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var sd = ((function (map__9381,map__9381__$1,x0,y0,map__9382,map__9382__$1,x1,y1){
return (function pathfinder$lib$get_square_dist_$_sd(dx,dy){
return ((dx * dx) + (dy * dy));
});})(map__9381,map__9381__$1,x0,y0,map__9382,map__9382__$1,x1,y1))
;
return sd.call(null,(x1 - x0),(y1 - y0));
});
pathfinder.lib.get_dist = (function pathfinder$lib$get_dist(p__9385,p__9386){
var map__9387 = p__9385;
var map__9387__$1 = (((((!((map__9387 == null))))?(((((map__9387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9387):map__9387);
var x0 = cljs.core.get.call(null,map__9387__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9387__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9388 = p__9386;
var map__9388__$1 = (((((!((map__9388 == null))))?(((((map__9388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9388):map__9388);
var x1 = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9388__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var d = ((function (map__9387,map__9387__$1,x0,y0,map__9388,map__9388__$1,x1,y1){
return (function pathfinder$lib$get_dist_$_d(dx,dy){
return Math.sqrt(((dx * dx) + (dy * dy)));
});})(map__9387,map__9387__$1,x0,y0,map__9388,map__9388__$1,x1,y1))
;
return d.call(null,(x1 - x0),(y1 - y0));
});
pathfinder.lib.get_closest_node = (function() {
var pathfinder$lib$get_closest_node = null;
var pathfinder$lib$get_closest_node__2 = (function (p_0,p_1){
return pathfinder.lib.get_closest_node.call(null,p_0,p_1,null);
});
var pathfinder$lib$get_closest_node__3 = (function (nodes,p,sqmin){
var f0 = (function pathfinder$lib$get_closest_node_$_f0(node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.get_square_dist.call(null,node,p),node], null);
});
var f1 = (function pathfinder$lib$get_closest_node_$_f1(p__9403,p__9404){
var vec__9405 = p__9403;
var dist1 = cljs.core.nth.call(null,vec__9405,(0),null);
var _ = cljs.core.nth.call(null,vec__9405,(1),null);
var vec__9408 = p__9404;
var dist2 = cljs.core.nth.call(null,vec__9408,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9408,(1),null);
return (dist1 < dist2);
});
var f2 = (function pathfinder$lib$get_closest_node_$_f2(p__9411){
var vec__9412 = p__9411;
var dist = cljs.core.nth.call(null,vec__9412,(0),null);
var node = cljs.core.nth.call(null,vec__9412,(1),null);
if(((cljs.core.not.call(null,sqmin)) || ((sqmin > dist)))){
return node;
} else {
return null;
}
});
return cljs.core.some.call(null,f2,cljs.core.sort.call(null,f1,cljs.core.map.call(null,f0,nodes)));
});
pathfinder$lib$get_closest_node = function(nodes,p,sqmin){
switch(arguments.length){
case 2:
return pathfinder$lib$get_closest_node__2.call(this,nodes,p);
case 3:
return pathfinder$lib$get_closest_node__3.call(this,nodes,p,sqmin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$get_closest_node.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$get_closest_node__2;
pathfinder$lib$get_closest_node.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$get_closest_node__3;
return pathfinder$lib$get_closest_node;
})()
;
pathfinder.lib.idx_of_closest_node = (function() {
var pathfinder$lib$idx_of_closest_node = null;
var pathfinder$lib$idx_of_closest_node__2 = (function (p_0,p_1){
return pathfinder.lib.idx_of_closest_node.call(null,p_0,p_1,null);
});
var pathfinder$lib$idx_of_closest_node__3 = (function (nodes,p,sqmin){
var f0 = (function pathfinder$lib$idx_of_closest_node_$_f0(idx,node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.get_square_dist.call(null,node,p),idx], null);
});
var f1 = (function pathfinder$lib$idx_of_closest_node_$_f1(p__9427,p__9428){
var vec__9429 = p__9427;
var dist1 = cljs.core.nth.call(null,vec__9429,(0),null);
var _ = cljs.core.nth.call(null,vec__9429,(1),null);
var vec__9432 = p__9428;
var dist2 = cljs.core.nth.call(null,vec__9432,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9432,(1),null);
return (dist1 < dist2);
});
var f2 = (function pathfinder$lib$idx_of_closest_node_$_f2(p__9435){
var vec__9436 = p__9435;
var dist = cljs.core.nth.call(null,vec__9436,(0),null);
var idx = cljs.core.nth.call(null,vec__9436,(1),null);
if(((cljs.core.not.call(null,sqmin)) || ((sqmin > dist)))){
return idx;
} else {
return null;
}
});
return cljs.core.some.call(null,f2,cljs.core.sort.call(null,f1,cljs.core.map_indexed.call(null,f0,nodes)));
});
pathfinder$lib$idx_of_closest_node = function(nodes,p,sqmin){
switch(arguments.length){
case 2:
return pathfinder$lib$idx_of_closest_node__2.call(this,nodes,p);
case 3:
return pathfinder$lib$idx_of_closest_node__3.call(this,nodes,p,sqmin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$idx_of_closest_node.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$idx_of_closest_node__2;
pathfinder$lib$idx_of_closest_node.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$idx_of_closest_node__3;
return pathfinder$lib$idx_of_closest_node;
})()
;
pathfinder.lib.get_closest_triangle_edge = (function() {
var pathfinder$lib$get_closest_triangle_edge = null;
var pathfinder$lib$get_closest_triangle_edge__2 = (function (p_0,p_1){
return pathfinder.lib.get_closest_triangle_edge.call(null,p_0,p_1,null);
});
var pathfinder$lib$get_closest_triangle_edge__3 = (function (p__9439,p,sqmin){
var vec__9440 = p__9439;
var n0 = cljs.core.nth.call(null,vec__9440,(0),null);
var n1 = cljs.core.nth.call(null,vec__9440,(1),null);
var n2 = cljs.core.nth.call(null,vec__9440,(2),null);
var nds = vec__9440;
var gpu = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_gpu(p__9476){
var vec__9477 = p__9476;
var _ = cljs.core.nth.call(null,vec__9477,(0),null);
var a = cljs.core.nth.call(null,vec__9477,(1),null);
var b = cljs.core.nth.call(null,vec__9477,(2),null);
var triple = vec__9477;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,cljs.core.apply.call(null,pathfinder.lib.get_param_u,triple)], null);
});})(vec__9440,n0,n1,n2,nds))
;
var sd = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_sd(p__9480){
var vec__9481 = p__9480;
var _ = cljs.core.nth.call(null,vec__9481,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9481,(1),null);
var u = cljs.core.nth.call(null,vec__9481,(2),null);
var triple = vec__9481;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.get_square_dist.call(null,p,cljs.core.apply.call(null,pathfinder.lib.get_point_by_param,triple)),u], null);
});})(vec__9440,n0,n1,n2,nds))
;
var transform = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_transform(p__9484){
var vec__9485 = p__9484;
var vec__9488 = cljs.core.nth.call(null,vec__9485,(0),null);
var s1 = cljs.core.nth.call(null,vec__9488,(0),null);
var u1 = cljs.core.nth.call(null,vec__9488,(1),null);
var vec__9491 = cljs.core.nth.call(null,vec__9485,(1),null);
var s2 = cljs.core.nth.call(null,vec__9491,(0),null);
var u2 = cljs.core.nth.call(null,vec__9491,(1),null);
var vec__9494 = cljs.core.nth.call(null,vec__9485,(2),null);
var s3 = cljs.core.nth.call(null,vec__9494,(0),null);
var u3 = cljs.core.nth.call(null,vec__9494,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,u1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),u1,new cljs.core.Keyword(null,"u12","u12",1363173749),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s2,u2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),(1),new cljs.core.Keyword(null,"u12","u12",1363173749),u2], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s3,u3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),u3,new cljs.core.Keyword(null,"u12","u12",1363173749),u3], null)], null)], null);
});})(vec__9440,n0,n1,n2,nds))
;
var f0 = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_f0(p__9497,p__9498){
var vec__9499 = p__9497;
var dist1 = cljs.core.nth.call(null,vec__9499,(0),null);
var _ = cljs.core.nth.call(null,vec__9499,(1),null);
var vec__9502 = p__9498;
var dist2 = cljs.core.nth.call(null,vec__9502,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9502,(1),null);
return (dist1 < dist2);
});})(vec__9440,n0,n1,n2,nds))
;
var f1 = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_f1(p__9505){
var vec__9506 = p__9505;
var s = cljs.core.nth.call(null,vec__9506,(0),null);
var u = cljs.core.nth.call(null,vec__9506,(1),null);
var m = cljs.core.nth.call(null,vec__9506,(2),null);
if((((u >= (0))) && (((1) >= u)) && (((cljs.core.not.call(null,sqmin)) || ((sqmin > s)))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,m,nds], null);
} else {
return null;
}
});})(vec__9440,n0,n1,n2,nds))
;
var picknearest = ((function (vec__9440,n0,n1,n2,nds){
return (function pathfinder$lib$get_closest_triangle_edge_$_picknearest(vec){
return cljs.core.some.call(null,f1,cljs.core.sort.call(null,f0,vec));
});})(vec__9440,n0,n1,n2,nds))
;
return picknearest.call(null,transform.call(null,cljs.core.mapv.call(null,sd,cljs.core.map.call(null,gpu,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n0,n1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n1,n2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n0,n2], null)], null)))));
});
pathfinder$lib$get_closest_triangle_edge = function(p__9439,p,sqmin){
switch(arguments.length){
case 2:
return pathfinder$lib$get_closest_triangle_edge__2.call(this,p__9439,p);
case 3:
return pathfinder$lib$get_closest_triangle_edge__3.call(this,p__9439,p,sqmin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$get_closest_triangle_edge.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$get_closest_triangle_edge__2;
pathfinder$lib$get_closest_triangle_edge.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$get_closest_triangle_edge__3;
return pathfinder$lib$get_closest_triangle_edge;
})()
;
pathfinder.lib.get_closest_triangles_edge = (function() {
var pathfinder$lib$get_closest_triangles_edge = null;
var pathfinder$lib$get_closest_triangles_edge__2 = (function (p_0,p_1){
return pathfinder.lib.get_closest_triangles_edge.call(null,p_0,p_1,null);
});
var pathfinder$lib$get_closest_triangles_edge__3 = (function (tpath,p,sqmin){
var f1 = (function pathfinder$lib$get_closest_triangles_edge_$_f1(p__9517,p__9518){
var vec__9519 = p__9517;
var dist1 = cljs.core.nth.call(null,vec__9519,(0),null);
var _ = cljs.core.nth.call(null,vec__9519,(1),null);
var vec__9522 = p__9518;
var dist2 = cljs.core.nth.call(null,vec__9522,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__9522,(1),null);
return (dist1 < dist2);
});
var f2 = (function pathfinder$lib$get_closest_triangles_edge_$_f2(triangle){
return pathfinder.lib.get_closest_triangle_edge.call(null,pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),triangle),p,sqmin);
});
return cljs.core.rest.call(null,cljs.core.some.call(null,cljs.core.identity,cljs.core.sort.call(null,f1,cljs.core.map.call(null,f2,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath)))));
});
pathfinder$lib$get_closest_triangles_edge = function(tpath,p,sqmin){
switch(arguments.length){
case 2:
return pathfinder$lib$get_closest_triangles_edge__2.call(this,tpath,p);
case 3:
return pathfinder$lib$get_closest_triangles_edge__3.call(this,tpath,p,sqmin);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$get_closest_triangles_edge.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$get_closest_triangles_edge__2;
pathfinder$lib$get_closest_triangles_edge.cljs$core$IFn$_invoke$arity$3 = pathfinder$lib$get_closest_triangles_edge__3;
return pathfinder$lib$get_closest_triangles_edge;
})()
;
pathfinder.lib.get_point_from_pos = (function pathfinder$lib$get_point_from_pos(p__9525,p__9526){
var map__9527 = p__9525;
var map__9527__$1 = (((((!((map__9527 == null))))?(((((map__9527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9527):map__9527);
var u01 = cljs.core.get.call(null,map__9527__$1,new cljs.core.Keyword(null,"u01","u01",1634617236));
var u12 = cljs.core.get.call(null,map__9527__$1,new cljs.core.Keyword(null,"u12","u12",1363173749));
var vec__9528 = p__9526;
var map__9531 = cljs.core.nth.call(null,vec__9528,(0),null);
var map__9531__$1 = (((((!((map__9531 == null))))?(((((map__9531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9531):map__9531);
var x0 = cljs.core.get.call(null,map__9531__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9531__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9532 = cljs.core.nth.call(null,vec__9528,(1),null);
var map__9532__$1 = (((((!((map__9532 == null))))?(((((map__9532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9532):map__9532);
var x1 = cljs.core.get.call(null,map__9532__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9532__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9533 = cljs.core.nth.call(null,vec__9528,(2),null);
var map__9533__$1 = (((((!((map__9533 == null))))?(((((map__9533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9533):map__9533);
var x2 = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((x0 + (u01 * (x1 - x0))) + (u12 * (x2 - x1))),new cljs.core.Keyword(null,"y","y",-1757859776),((y0 + (u01 * (y1 - y0))) + (u12 * (y2 - y1)))], null);
});
pathfinder.lib.test6 = (function pathfinder$lib$test6(){
var db = (function pathfinder$lib$test6_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net3], null),(function (){var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"clicked-pos","clicked-pos",-504424725))));
if(cljs.core.truth_(temp__5718__auto__)){
var pos = temp__5718__auto__;
var rel = pathfinder.lib.coords_abs_to_rel.call(null,pos,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"dom-node","dom-node",452283727))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var temp__5718__auto____$1 = pathfinder.lib.get_hit_triangle.call(null,pathfinder.lib.net3,rel);
if(cljs.core.truth_(temp__5718__auto____$1)){
var tri = temp__5718__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_triangle,pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3),tri),"pink","black"], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,rel,"#008800"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,pathfinder.lib.get_closest_node.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3),rel),(9),"red","none"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_diamond,cljs.core.apply.call(null,pathfinder.lib.get_point_from_pos,pathfinder.lib.get_closest_triangles_edge.call(null,pathfinder.lib.net3,rel)),"red"], null)], null);
} else {
return null;
}
})()], null);
});
pathfinder.lib.trinodes_by_index = (function pathfinder$lib$trinodes_by_index(tpath,index){
return pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),cljs.core.get.call(null,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath),index));
});
pathfinder.lib.get_pos_from_point = (function pathfinder$lib$get_pos_from_point(p__9538,p__9539){
var vec__9540 = p__9538;
var map__9543 = cljs.core.nth.call(null,vec__9540,(0),null);
var map__9543__$1 = (((((!((map__9543 == null))))?(((((map__9543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9543):map__9543);
var n0 = map__9543__$1;
var x0 = cljs.core.get.call(null,map__9543__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y0 = cljs.core.get.call(null,map__9543__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9544 = cljs.core.nth.call(null,vec__9540,(1),null);
var map__9544__$1 = (((((!((map__9544 == null))))?(((((map__9544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9544):map__9544);
var n1 = map__9544__$1;
var x1 = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y1 = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9545 = cljs.core.nth.call(null,vec__9540,(2),null);
var map__9545__$1 = (((((!((map__9545 == null))))?(((((map__9545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9545):map__9545);
var n2 = map__9545__$1;
var x2 = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y2 = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var threenodes = vec__9540;
var map__9546 = p__9539;
var map__9546__$1 = (((((!((map__9546 == null))))?(((((map__9546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9546):map__9546);
var p = map__9546__$1;
var x = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9546__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core._EQ_.call(null,n0,n1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),null,new cljs.core.Keyword(null,"u12","u12",1363173749),null], null);
} else {
if(cljs.core._EQ_.call(null,n1,n2)){
var u = pathfinder.lib.get_param_u.call(null,p,n0,n1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),u,new cljs.core.Keyword(null,"u12","u12",1363173749),u], null);
} else {
var dx01 = (x1 - x0);
var dx12 = (x2 - x1);
var dy01 = (y1 - y0);
var dy12 = (y2 - y1);
var dx = (x - x0);
var dy = (y - y0);
var denominator = ((dx01 * dy12) - (dx12 * dy01));
var u01 = (((dx * dy12) - (dy * dx12)) / denominator);
var u12 = (((dy * dx01) - (dx * dy01)) / denominator);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),u01,new cljs.core.Keyword(null,"u12","u12",1363173749),u12], null);

}
}
});
pathfinder.lib.interpolate_by_pos = (function pathfinder$lib$interpolate_by_pos(p__9551,v0,v1,v2){
var map__9552 = p__9551;
var map__9552__$1 = (((((!((map__9552 == null))))?(((((map__9552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9552):map__9552);
var u01 = cljs.core.get.call(null,map__9552__$1,new cljs.core.Keyword(null,"u01","u01",1634617236));
var u12 = cljs.core.get.call(null,map__9552__$1,new cljs.core.Keyword(null,"u12","u12",1363173749));
var v3 = ((v2 - v1) + v0);
var v01 = ((v0 * (1.0 - u01)) + (v1 * u01));
var v32 = ((v3 * (1.0 - u01)) + (v2 * u01));
return ((v01 * (1.0 - u12)) + (v32 * u12));
});
pathfinder.lib.test7 = (function pathfinder$lib$test7(){
var pt = pathfinder.lib.get_point_from_pos.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),0.5,new cljs.core.Keyword(null,"u12","u12",1363173749),0.5], null),pathfinder.lib.trinodes_by_index.call(null,pathfinder.lib.net0,(0)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,pt,"red"], null)], null);
});
pathfinder.lib.net0d = (function (){var vec__9554 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(275),(120),(100),(80)], null);
var mx = cljs.core.nth.call(null,vec__9554,(0),null);
var my = cljs.core.nth.call(null,vec__9554,(1),null);
var dx = cljs.core.nth.call(null,vec__9554,(2),null);
var dy = cljs.core.nth.call(null,vec__9554,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mx,new cljs.core.Keyword(null,"y","y",-1757859776),(my - dy)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(mx - dx),new cljs.core.Keyword(null,"y","y",-1757859776),(my + dy)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(mx + dx),new cljs.core.Keyword(null,"y","y",-1757859776),(my + dy)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mx,new cljs.core.Keyword(null,"y","y",-1757859776),(my + ((3) * dy))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(mx - ((2) * dx)),new cljs.core.Keyword(null,"y","y",-1757859776),(my - dy)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(mx + ((2) * dx)),new cljs.core.Keyword(null,"y","y",-1757859776),(my - dy)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mx,new cljs.core.Keyword(null,"y","y",-1757859776),(my + (0.3333 * dy))], null)], null),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.triangle.call(null,(0),(1),(2))], null)], null);
})();
pathfinder.lib.draw_nodes = (function() {
var pathfinder$lib$draw_nodes = null;
var pathfinder$lib$draw_nodes__1 = (function (p_0){
return pathfinder.lib.draw_nodes.call(null,p_0,"#000000");
});
var pathfinder$lib$draw_nodes__2 = (function (tpath,color){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,(function (p){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_point,p,color], null);
}),new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath)));
});
pathfinder$lib$draw_nodes = function(tpath,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_nodes__1.call(this,tpath);
case 2:
return pathfinder$lib$draw_nodes__2.call(this,tpath,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_nodes.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_nodes__1;
pathfinder$lib$draw_nodes.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_nodes__2;
return pathfinder$lib$draw_nodes;
})()
;
pathfinder.lib.to_color = (function pathfinder$lib$to_color(c){
if((c < (0))){
return (0);
} else {
if((c > (255))){
return (255);
} else {
return (c | (0));

}
}
});
pathfinder.lib.test8 = (function pathfinder$lib$test8(){
var db = (function pathfinder$lib$test8_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
var colr = (function pathfinder$lib$test8_$_colr(pos,a,b,c){
return pathfinder.lib.to_color.call(null,pathfinder.lib.interpolate_by_pos.call(null,pos,a,b,c));
});
var to_str = (function pathfinder$lib$test8_$_to_str(r,g,b){
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
});
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_triangles,pathfinder.lib.net0d,"#eeeeee","#aaaaaa"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_nodes,pathfinder.lib.net0d], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net0d).call(null,(0)),(7),"black","rgb(255,0,0)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net0d).call(null,(1)),(7),"black","rgb(0,255,0)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net0d).call(null,(2)),(7),"black","rgb(0,0,255)"], null),(function (){var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"clicked-pos","clicked-pos",-504424725))));
if(cljs.core.truth_(temp__5718__auto__)){
var clicked_pos = temp__5718__auto__;
var rel = pathfinder.lib.coords_abs_to_rel.call(null,clicked_pos,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"dom-node","dom-node",452283727))));
var pos = pathfinder.lib.get_pos_from_point.call(null,pathfinder.lib.trinodes_by_index.call(null,pathfinder.lib.net0d,(0)),rel);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,rel,(7),"black",to_str.call(null,colr.call(null,pos,(255),(0),(0)),colr.call(null,pos,(0),(255),(0)),colr.call(null,pos,(0),(0),(255)))], null);
} else {
return null;
}
})()], null);
});
pathfinder.lib.test9 = (function pathfinder$lib$test9(){
var trinodes = pathfinder.lib.trinodes_by_index.call(null,pathfinder.lib.net0,(0));
var pt = pathfinder.lib.get_point_from_pos.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),(1),new cljs.core.Keyword(null,"u12","u12",1363173749),(1)], null),trinodes);
var vec__9557 = pathfinder.lib.get_closest_triangle_edge.call(null,trinodes,pt);
var d = cljs.core.nth.call(null,vec__9557,(0),null);
var pos = cljs.core.nth.call(null,vec__9557,(1),null);
var nodes = cljs.core.nth.call(null,vec__9557,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,pt,"green"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,pathfinder.lib.get_point_from_pos.call(null,pos,nodes),"red"], null)], null);
});
pathfinder.lib.test10 = (function pathfinder$lib$test10(){
var trinodes = pathfinder.lib.trinodes_by_index.call(null,pathfinder.lib.net0a,(0));
var pt = pathfinder.lib.get_point_from_pos.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),0.4,new cljs.core.Keyword(null,"u12","u12",1363173749),0.4], null),trinodes);
var pos = pathfinder.lib.get_pos_from_point.call(null,trinodes,pt);
var dum1 = pathfinder.trace.add.call(null,"gpfp",pos);
var dum2 = pathfinder.trace.add.call(null,"ibp",pathfinder.lib.interpolate_by_pos.call(null,pos,(1),(2),(2)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net0a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,pt,"red"], null)], null);
});
pathfinder.lib.set_active = (function pathfinder$lib$set_active(tpath,tindex,active){
return cljs.core.assoc_in.call(null,tpath,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),tindex,new cljs.core.Keyword(null,"active","active",1895962068)], null),active);
});
pathfinder.lib.node_triangle_links = (function pathfinder$lib$node_triangle_links(p__9562){
var map__9563 = p__9562;
var map__9563__$1 = (((((!((map__9563 == null))))?(((((map__9563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9563):map__9563);
var nodes = cljs.core.get.call(null,map__9563__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var triangles = cljs.core.get.call(null,map__9563__$1,new cljs.core.Keyword(null,"triangles","triangles",-1525417058));
var extract_node_idxs = ((function (map__9563,map__9563__$1,nodes,triangles){
return (function pathfinder$lib$node_triangle_links_$_extract_node_idxs(p__9572){
var map__9573 = p__9572;
var map__9573__$1 = (((((!((map__9573 == null))))?(((((map__9573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9573):map__9573);
var active = cljs.core.get.call(null,map__9573__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var n0 = cljs.core.get.call(null,map__9573__$1,new cljs.core.Keyword(null,"n0","n0",-1963304087));
var n1 = cljs.core.get.call(null,map__9573__$1,new cljs.core.Keyword(null,"n1","n1",-1687681187));
var n2 = cljs.core.get.call(null,map__9573__$1,new cljs.core.Keyword(null,"n2","n2",1481890316));
if(cljs.core.truth_(active)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n0,n1,n2], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});})(map__9563,map__9563__$1,nodes,triangles))
;
var add_index = ((function (map__9563,map__9563__$1,nodes,triangles){
return (function pathfinder$lib$node_triangle_links_$_add_index(triangle_idx,node_idxs){
return cljs.core.map.call(null,((function (map__9563,map__9563__$1,nodes,triangles){
return (function (p1__9560_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[triangle_idx,p1__9560_SHARP_],null));
});})(map__9563,map__9563__$1,nodes,triangles))
,node_idxs);
});})(map__9563,map__9563__$1,nodes,triangles))
;
var fill_vector = ((function (map__9563,map__9563__$1,nodes,triangles){
return (function pathfinder$lib$node_triangle_links_$_fill_vector(v,p__9575){
var vec__9576 = p__9575;
var triangle_idx = cljs.core.nth.call(null,vec__9576,(0),null);
var node_idx = cljs.core.nth.call(null,vec__9576,(1),null);
return cljs.core.update.call(null,v,node_idx,((function (vec__9576,triangle_idx,node_idx,map__9563,map__9563__$1,nodes,triangles){
return (function (p1__9561_SHARP_){
return cljs.core.conj.call(null,p1__9561_SHARP_,triangle_idx);
});})(vec__9576,triangle_idx,node_idx,map__9563,map__9563__$1,nodes,triangles))
);
});})(map__9563,map__9563__$1,nodes,triangles))
;
return cljs.core.reduce.call(null,fill_vector,cljs.core.vec.call(null,cljs.core.repeatedly.call(null,cljs.core.count.call(null,nodes),cljs.core.hash_set)),cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,add_index,cljs.core.map.call(null,extract_node_idxs,triangles))));
});
pathfinder.lib.register_triangle_neighbours = (function pathfinder$lib$register_triangle_neighbours(tpath,triangle_idx){
var cond_assoc_in = (function pathfinder$lib$register_triangle_neighbours_$_cond_assoc_in(hmap,condi,vec,val){
if(cljs.core.truth_(condi)){
return cljs.core.assoc_in.call(null,hmap,vec,val);
} else {
return hmap;
}
});
var ntl = (function pathfinder$lib$register_triangle_neighbours_$_ntl(node_idx){
return cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-triangle-links","node-triangle-links",1231510558),node_idx], null));
});
var setneighbours = (function pathfinder$lib$register_triangle_neighbours_$_setneighbours(tp,kw,a,b){
return cond_assoc_in.call(null,tp,cljs.core.not_EQ_.call(null,a,b),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),triangle_idx,kw], null),cljs.core.first.call(null,cljs.core.disj.call(null,clojure.set.intersection.call(null,ntl.call(null,a),ntl.call(null,b)),triangle_idx)));
});
var map__9579 = cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),triangle_idx], null));
var map__9579__$1 = (((((!((map__9579 == null))))?(((((map__9579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9579):map__9579);
var n0 = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"n0","n0",-1963304087));
var n1 = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"n1","n1",-1687681187));
var n2 = cljs.core.get.call(null,map__9579__$1,new cljs.core.Keyword(null,"n2","n2",1481890316));
return setneighbours.call(null,setneighbours.call(null,setneighbours.call(null,tpath,new cljs.core.Keyword(null,"ngb01","ngb01",1342721758),n0,n1),new cljs.core.Keyword(null,"ngb02","ngb02",86273950),n0,n2),new cljs.core.Keyword(null,"ngb12","ngb12",-131368682),n1,n2);
});
pathfinder.lib.register_triangles_neighbors = (function pathfinder$lib$register_triangles_neighbors(tpath){
return cljs.core.reduce.call(null,pathfinder.lib.register_triangle_neighbours,cljs.core.assoc.call(null,tpath,new cljs.core.Keyword(null,"node-triangle-links","node-triangle-links",1231510558),pathfinder.lib.node_triangle_links.call(null,tpath)),cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath))));
});
pathfinder.lib.test11 = (function pathfinder$lib$test11(){
var tpath = pathfinder.lib.register_triangles_neighbors.call(null,pathfinder.lib.set_active.call(null,pathfinder.lib.net3,(8),false));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,tpath], null)], null);
});
pathfinder.lib.get_node_pos_from_triangle = (function pathfinder$lib$get_node_pos_from_triangle(p__9581,node_idx){
var map__9582 = p__9581;
var map__9582__$1 = (((((!((map__9582 == null))))?(((((map__9582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9582):map__9582);
var n0 = cljs.core.get.call(null,map__9582__$1,new cljs.core.Keyword(null,"n0","n0",-1963304087));
var n1 = cljs.core.get.call(null,map__9582__$1,new cljs.core.Keyword(null,"n1","n1",-1687681187));
var n2 = cljs.core.get.call(null,map__9582__$1,new cljs.core.Keyword(null,"n2","n2",1481890316));
var pred__9584 = cljs.core._EQ_;
var expr__9585 = node_idx;
if(cljs.core.truth_(pred__9584.call(null,n0,expr__9585))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),(0),new cljs.core.Keyword(null,"u12","u12",1363173749),(0)], null);
} else {
if(cljs.core.truth_(pred__9584.call(null,n1,expr__9585))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),(1),new cljs.core.Keyword(null,"u12","u12",1363173749),(0)], null);
} else {
if(cljs.core.truth_(pred__9584.call(null,n2,expr__9585))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"u01","u01",1634617236),(1),new cljs.core.Keyword(null,"u12","u12",1363173749),(1)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__9585)].join('')));
}
}
}
});
pathfinder.lib.get_pos_of_node = (function pathfinder$lib$get_pos_of_node(tpath,node_idx){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node-triangle-links","node-triangle-links",1231510558),node_idx], null)));
if(cljs.core.truth_(temp__5718__auto__)){
var tri_idx = temp__5718__auto__;
var tri = cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),tri_idx], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.get_node_pos_from_triangle.call(null,tri,node_idx),pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),tri)], null);
} else {
return null;
}
});
pathfinder.lib.get_closest_pos = (function pathfinder$lib$get_closest_pos(tpath,p){
var is_in = (function pathfinder$lib$get_closest_pos_$_is_in(triangle){
return pathfinder.lib.is_point_in_triangle.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),triangle,p);
});
var temp__5718__auto__ = cljs.core.some.call(null,is_in,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath));
if(cljs.core.truth_(temp__5718__auto__)){
var tr = temp__5718__auto__;
var nds = pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),tr);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.get_pos_from_point.call(null,nds,p),nds], null);
} else {
var node_idx = pathfinder.lib.idx_of_closest_node.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),p);
var sqndist = pathfinder.lib.get_square_dist.call(null,p,cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),node_idx], null)));
var or__4131__auto__ = cljs.core.seq.call(null,pathfinder.lib.get_closest_triangles_edge.call(null,tpath,p,sqndist));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return pathfinder.lib.get_pos_of_node.call(null,tpath,node_idx);
}
}
});
pathfinder.lib.test12 = (function pathfinder$lib$test12(){
var db = (function pathfinder$lib$test12_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
var nb_tpath = pathfinder.lib.register_triangles_neighbors.call(null,pathfinder.lib.net3);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,nb_tpath], null),(function (){var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"clicked-pos","clicked-pos",-504424725))));
if(cljs.core.truth_(temp__5718__auto__)){
var pos = temp__5718__auto__;
var rel = pathfinder.lib.coords_abs_to_rel.call(null,pos,cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"dom-node","dom-node",452283727))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,rel,"#008800"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_diamond,cljs.core.apply.call(null,pathfinder.lib.get_point_from_pos,pathfinder.lib.get_closest_pos.call(null,nb_tpath,rel)),"red"], null)], null);
} else {
return null;
}
})()], null);
});
pathfinder.lib.intersection_check_one_direction = (function pathfinder$lib$intersection_check_one_direction(p__9587,p__9588,p__9589,p__9590){
var map__9591 = p__9587;
var map__9591__$1 = (((((!((map__9591 == null))))?(((((map__9591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9591):map__9591);
var p0x = cljs.core.get.call(null,map__9591__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p0y = cljs.core.get.call(null,map__9591__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9592 = p__9588;
var map__9592__$1 = (((((!((map__9592 == null))))?(((((map__9592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9592):map__9592);
var p1x = cljs.core.get.call(null,map__9592__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p1y = cljs.core.get.call(null,map__9592__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9593 = p__9589;
var map__9593__$1 = (((((!((map__9593 == null))))?(((((map__9593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9593):map__9593);
var p2x = cljs.core.get.call(null,map__9593__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p2y = cljs.core.get.call(null,map__9593__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9594 = p__9590;
var map__9594__$1 = (((((!((map__9594 == null))))?(((((map__9594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9594):map__9594);
var p3x = cljs.core.get.call(null,map__9594__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p3y = cljs.core.get.call(null,map__9594__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx1 = (p1x - p0x);
var dy1 = (p1y - p0y);
var dx2 = (p2x - p0x);
var dy2 = (p2y - p0y);
var dx3 = (p3x - p0x);
var dy3 = (p3y - p0y);
var c2 = ((dx1 * dy2) - (dy1 * dx2));
var c3 = ((dx1 * dy3) - (dy1 * dx3));
return (!((((((c2 >= (0))) && ((c3 >= (0))))) || ((((c2 <= (0))) && ((c3 <= (0))))))));
});
pathfinder.lib.intersection_check = (function pathfinder$lib$intersection_check(p0,p1,p2,p3){
return ((pathfinder.lib.intersection_check_one_direction.call(null,p0,p1,p2,p3)) && (pathfinder.lib.intersection_check_one_direction.call(null,p2,p3,p0,p1)));
});
pathfinder.lib.test13 = (function pathfinder$lib$test13(){
var pA = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var pB = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var intersec_check = ((function (pA,pB){
return (function pathfinder$lib$test13_$_intersec_check(p__9610){
var vec__9611 = p__9610;
var p2 = cljs.core.nth.call(null,vec__9611,(0),null);
var p3 = cljs.core.nth.call(null,vec__9611,(1),null);
return pathfinder.lib.intersection_check.call(null,pA,pB,p2,p3);
});})(pA,pB))
;
var draw_lines = ((function (pA,pB){
return (function pathfinder$lib$test13_$_draw_lines(p__9614){
var vec__9615 = p__9614;
var noda = cljs.core.nth.call(null,vec__9615,(0),null);
var nodb = cljs.core.nth.call(null,vec__9615,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,noda,nodb,"red"], null);
});})(pA,pB))
;
var node_pairs = ((function (pA,pB){
return (function pathfinder$lib$test13_$_node_pairs(tri){
var vec__9618 = pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3),tri);
var n0 = cljs.core.nth.call(null,vec__9618,(0),null);
var n1 = cljs.core.nth.call(null,vec__9618,(1),null);
var n2 = cljs.core.nth.call(null,vec__9618,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n0,n1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n0,n2], null)], null);
});})(pA,pB))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net3], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,pA,pB,"orange"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,draw_lines,cljs.core.filter.call(null,intersec_check,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,node_pairs,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3))))))], null);
});
pathfinder.lib.intersection = (function pathfinder$lib$intersection(p__9621,p__9622,p__9623,p__9624){
var map__9625 = p__9621;
var map__9625__$1 = (((((!((map__9625 == null))))?(((((map__9625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9625):map__9625);
var p0x = cljs.core.get.call(null,map__9625__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p0y = cljs.core.get.call(null,map__9625__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9626 = p__9622;
var map__9626__$1 = (((((!((map__9626 == null))))?(((((map__9626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9626):map__9626);
var p1x = cljs.core.get.call(null,map__9626__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p1y = cljs.core.get.call(null,map__9626__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9627 = p__9623;
var map__9627__$1 = (((((!((map__9627 == null))))?(((((map__9627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9627):map__9627);
var p2x = cljs.core.get.call(null,map__9627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p2y = cljs.core.get.call(null,map__9627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9628 = p__9624;
var map__9628__$1 = (((((!((map__9628 == null))))?(((((map__9628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9628):map__9628);
var p3x = cljs.core.get.call(null,map__9628__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p3y = cljs.core.get.call(null,map__9628__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var numerator = (((p0y - p2y) * (p3x - p2x)) - ((p0x - p2x) * (p3y - p2y)));
var denominator = (((p1x - p0x) * (p3y - p2y)) - ((p1y - p0y) * (p3x - p2x)));
if(cljs.core.not_EQ_.call(null,denominator,(0))){
return (numerator / denominator);
} else {
return null;
}
});
pathfinder.lib.strict_intersection = (function pathfinder$lib$strict_intersection(p0,p1,p2,p3){
var temp__5718__auto__ = pathfinder.lib.intersection.call(null,p2,p3,p0,p1);
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
if((!((((u > 1.00000000000001)) || ((u < -1.0E-14)))))){
var temp__5718__auto____$1 = pathfinder.lib.intersection.call(null,p0,p1,p2,p3);
if(cljs.core.truth_(temp__5718__auto____$1)){
var u__$1 = temp__5718__auto____$1;
if((!((((u__$1 > (1))) || ((u__$1 < (0))))))){
return u__$1;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
pathfinder.lib.test14 = (function pathfinder$lib$test14(){
var pA = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var pB = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var intersec_check = ((function (pA,pB){
return (function pathfinder$lib$test14_$_intersec_check(p__9644){
var vec__9645 = p__9644;
var p2 = cljs.core.nth.call(null,vec__9645,(0),null);
var p3 = cljs.core.nth.call(null,vec__9645,(1),null);
return pathfinder.lib.strict_intersection.call(null,pA,pB,p2,p3);
});})(pA,pB))
;
var draw_lines = ((function (pA,pB){
return (function pathfinder$lib$test14_$_draw_lines(p__9648){
var vec__9649 = p__9648;
var noda = cljs.core.nth.call(null,vec__9649,(0),null);
var nodb = cljs.core.nth.call(null,vec__9649,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,noda,nodb,"red"], null);
});})(pA,pB))
;
var node_pairs = ((function (pA,pB){
return (function pathfinder$lib$test14_$_node_pairs(tri){
var vec__9652 = pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3),tri);
var n0 = cljs.core.nth.call(null,vec__9652,(0),null);
var n1 = cljs.core.nth.call(null,vec__9652,(1),null);
var n2 = cljs.core.nth.call(null,vec__9652,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n0,n1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n0,n2], null)], null);
});})(pA,pB))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.net3], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,pA,pB,"orange"], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,draw_lines,cljs.core.filter.call(null,intersec_check,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,node_pairs,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(pathfinder.lib.net3))))))], null);
});
pathfinder.lib.are_lines_in_order = (function pathfinder$lib$are_lines_in_order(p__9655,p__9656,p__9657,p__9658){
var map__9659 = p__9655;
var map__9659__$1 = (((((!((map__9659 == null))))?(((((map__9659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9659):map__9659);
var p0x = cljs.core.get.call(null,map__9659__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p0y = cljs.core.get.call(null,map__9659__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9660 = p__9656;
var map__9660__$1 = (((((!((map__9660 == null))))?(((((map__9660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9660):map__9660);
var p1x = cljs.core.get.call(null,map__9660__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p1y = cljs.core.get.call(null,map__9660__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9661 = p__9657;
var map__9661__$1 = (((((!((map__9661 == null))))?(((((map__9661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9661):map__9661);
var p2x = cljs.core.get.call(null,map__9661__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p2y = cljs.core.get.call(null,map__9661__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__9662 = p__9658;
var map__9662__$1 = (((((!((map__9662 == null))))?(((((map__9662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9662):map__9662);
var p3x = cljs.core.get.call(null,map__9662__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var p3y = cljs.core.get.call(null,map__9662__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dx01 = (p1x - p0x);
var dy01 = (p1y - p0y);
var dx02 = (p2x - p0x);
var dy02 = (p2y - p0y);
var dx03 = (p3x - p0x);
var dy03 = (p3y - p0y);
var c12 = ((dx01 * dy02) - (dy01 * dx02));
var c23 = ((dx02 * dy03) - (dy02 * dx03));
var c13 = ((dx01 * dy03) - (dy01 * dx03));
if(cljs.core._EQ_.call(null,c13,(0))){
return cljs.core._EQ_.call(null,c12,(0));
} else {
return (((((c12 >= (0))) && ((c23 >= (0))) && ((c13 >= (0))))) || ((((c12 <= (0))) && ((c23 <= (0))) && ((c13 <= (0))))));
}
});
pathfinder.lib.test17 = (function pathfinder$lib$test17(){
var p0 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(200)], null);
var pb = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(401),new cljs.core.Keyword(null,"y","y",-1757859776),(50)], null);
var pg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(150)], null);
var pr = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(450),new cljs.core.Keyword(null,"y","y",-1757859776),(350)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,p0,pr,"red"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,p0,pg,"green"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,p0,pb,"blue"], null)], null);
});
pathfinder.lib.points_into_triangle = (function pathfinder$lib$points_into_triangle(tpath,tindex,nindex,p){
var map__9667 = cljs.core.get_in.call(null,tpath,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"triangles","triangles",-1525417058),tindex], null));
var map__9667__$1 = (((((!((map__9667 == null))))?(((((map__9667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9667):map__9667);
var tri = map__9667__$1;
var n0 = cljs.core.get.call(null,map__9667__$1,new cljs.core.Keyword(null,"n0","n0",-1963304087));
var n1 = cljs.core.get.call(null,map__9667__$1,new cljs.core.Keyword(null,"n1","n1",-1687681187));
var n2 = cljs.core.get.call(null,map__9667__$1,new cljs.core.Keyword(null,"n2","n2",1481890316));
var vec__9668 = pathfinder.lib.triangle_nodes.call(null,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath),tri);
var p0 = cljs.core.nth.call(null,vec__9668,(0),null);
var p1 = cljs.core.nth.call(null,vec__9668,(1),null);
var p2 = cljs.core.nth.call(null,vec__9668,(2),null);
if(cljs.core._EQ_.call(null,n0,nindex)){
return pathfinder.lib.are_lines_in_order.call(null,p0,p1,p,p2);
} else {
if(cljs.core._EQ_.call(null,n1,nindex)){
return pathfinder.lib.are_lines_in_order.call(null,p1,p0,p,p2);
} else {
if(cljs.core._EQ_.call(null,n2,nindex)){
return pathfinder.lib.are_lines_in_order.call(null,p2,p0,p,p1);
} else {
return new cljs.core.Keyword(null,"undefined","undefined",-1970511116);

}
}
}
});
pathfinder.lib.test18 = (function pathfinder$lib$test18(){
var tp = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(150),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(400),new cljs.core.Keyword(null,"y","y",-1757859776),(300)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.triangle.call(null,(0),(1),(2))], null)], null);
var p = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(275),new cljs.core.Keyword(null,"y","y",-1757859776),(350)], null);
var clr = ((function (tp,p){
return (function pathfinder$lib$test18_$_clr(res){
if(cljs.core.not.call(null,res)){
return "grey";
} else {
if(cljs.core._EQ_.call(null,res,new cljs.core.Keyword(null,"undefined","undefined",-1970511116))){
return "orange";
} else {
return "lightgreen";

}
}
});})(tp,p))
;
var p_i_t = ((function (tp,p){
return (function pathfinder$lib$test18_$_p_i_t(nidx){
return pathfinder.lib.points_into_triangle.call(null,tp,(0),nidx,p);
});})(tp,p))
;
var node = ((function (tp,p){
return (function pathfinder$lib$test18_$_node(nidx){
return cljs.core.get_in.call(null,tp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nidx], null));
});})(tp,p))
;
var line = ((function (tp,p){
return (function pathfinder$lib$test18_$_line(nidx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,node.call(null,nidx),p,clr.call(null,p_i_t.call(null,nidx))], null);
});})(tp,p))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,tp], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.map.call(null,line,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(3)], null))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_circle,node.call(null,(0)),(9),"blue","none"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,p,"blue"], null)], null);
});
pathfinder.lib.point_construct = (function pathfinder$lib$point_construct(p__9672){
var map__9673 = p__9672;
var map__9673__$1 = (((((!((map__9673 == null))))?(((((map__9673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9673):map__9673);
var x = cljs.core.get.call(null,map__9673__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__9673__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (new Point(x,y));
});
pathfinder.lib.point_js__GT_clj = (function pathfinder$lib$point_js__GT_clj(Point){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),Point.x,new cljs.core.Keyword(null,"y","y",-1757859776),Point.y], null);
});
pathfinder.lib.tpath_construct = (function pathfinder$lib$tpath_construct(tpath){
var tp = (new TPath());
var step1 = cljs.core.mapv.call(null,((function (tp){
return (function (p){
return tp.addNodeXY(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p));
});})(tp))
,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(tpath));
var step2 = cljs.core.mapv.call(null,((function (tp,step1){
return (function (t){
return tp.addTriangle(new cljs.core.Keyword(null,"n0","n0",-1963304087).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"n1","n1",-1687681187).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"n2","n2",1481890316).cljs$core$IFn$_invoke$arity$1(t));
});})(tp,step1))
,new cljs.core.Keyword(null,"triangles","triangles",-1525417058).cljs$core$IFn$_invoke$arity$1(tpath));
return tp;
});
pathfinder.lib.tpath_js__GT_clj = (function pathfinder$lib$tpath_js__GT_clj(TPath){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.mapv.call(null,(function (n){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),n.x,new cljs.core.Keyword(null,"y","y",-1757859776),n.y], null);
}),TPath.nodes),new cljs.core.Keyword(null,"triangles","triangles",-1525417058),cljs.core.mapv.call(null,(function (t){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"n0","n0",-1963304087),t.n0,new cljs.core.Keyword(null,"n1","n1",-1687681187),t.n1,new cljs.core.Keyword(null,"n2","n2",1481890316),t.n2,new cljs.core.Keyword(null,"active","active",1895962068),t.active,new cljs.core.Keyword(null,"ngb01","ngb01",1342721758),null,new cljs.core.Keyword(null,"ngb12","ngb12",-131368682),null,new cljs.core.Keyword(null,"ngb02","ngb02",86273950),null], null);
}),TPath.triangles)], null);
});
pathfinder.lib.draw_start_and_goal = (function() {
var pathfinder$lib$draw_start_and_goal = null;
var pathfinder$lib$draw_start_and_goal__1 = (function (p_0){
return pathfinder.lib.draw_start_and_goal.call(null,p_0,"red");
});
var pathfinder$lib$draw_start_and_goal__2 = (function (TProute,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(((!((void 0 === TProute.goalPos))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,pathfinder.lib.point_js__GT_clj.call(null,TProute.tpath.getPointFromPos(TProute.goalPos)),color], null):null),(((!((void 0 === TProute.startPos))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_x,pathfinder.lib.point_js__GT_clj.call(null,TProute.tpath.getPointFromPos(TProute.startPos)),color], null):null)], null);
});
pathfinder$lib$draw_start_and_goal = function(TProute,color){
switch(arguments.length){
case 1:
return pathfinder$lib$draw_start_and_goal__1.call(this,TProute);
case 2:
return pathfinder$lib$draw_start_and_goal__2.call(this,TProute,color);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pathfinder$lib$draw_start_and_goal.cljs$core$IFn$_invoke$arity$1 = pathfinder$lib$draw_start_and_goal__1;
pathfinder$lib$draw_start_and_goal.cljs$core$IFn$_invoke$arity$2 = pathfinder$lib$draw_start_and_goal__2;
return pathfinder$lib$draw_start_and_goal;
})()
;
pathfinder.lib.draw_goal_backlink_line = (function pathfinder$lib$draw_goal_backlink_line(TPRoute,color){
if((((void 0 === TPRoute.goalRN)) && ((void 0 === TPRoute.goalPos)))){
return null;
} else {
var pg = TPRoute.tpath.getPointFromPos(TPRoute.goalPos);
var ps = ((cljs.core._EQ_.call(null,TPRoute.goalRN.back,(-1)))?TPRoute.tpath.getPointFromPos(TPRoute.startPos):(TPRoute.tpath.nodes[TPRoute.goalRN.back]));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,pathfinder.lib.point_js__GT_clj.call(null,ps),pathfinder.lib.point_js__GT_clj.call(null,pg),color], null);
}
});
pathfinder.lib.draw_backlink_line = (function pathfinder$lib$draw_backlink_line(TPRoute,nindex,color){
var pA = (TPRoute.tpath.nodes[nindex]);
var nx = (TPRoute.nArr[nindex]);
if(cljs.core.not.call(null,nx.isDefined())){
return null;
} else {
var pB = ((cljs.core._EQ_.call(null,nx.back,(-1)))?TPRoute.tpath.getPointFromPos(TPRoute.startPos):(TPRoute.tpath.nodes[nx.back]));
return pathfinder.lib.draw_line.call(null,pathfinder.lib.point_js__GT_clj.call(null,pA),pathfinder.lib.point_js__GT_clj.call(null,pB),color);
}
});
pathfinder.lib.draw_backlink_lines = (function pathfinder$lib$draw_backlink_lines(TPRoute,color){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.mapv.call(null,(function (p1__9675_SHARP_){
return pathfinder.lib.draw_backlink_line.call(null,TPRoute,p1__9675_SHARP_,color);
}),cljs.core.range.call(null,TPRoute.tpath.nodes.length)));
});
pathfinder.lib.draw_backlink_index = (function pathfinder$lib$draw_backlink_index(TPRoute,nindex,color){
var h = (TPRoute.tpath.nodes[nindex]);
var nx = (TPRoute.nArr[nindex]);
var p = (new Point((h.x + (13)),(h.y - (5))));
if(cljs.core.truth_(nx.isDefined())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_text_field,pathfinder.lib.point_js__GT_clj.call(null,p),nx.back,color], null);
} else {
return null;
}
});
pathfinder.lib.draw_backlink_indexes = (function pathfinder$lib$draw_backlink_indexes(TPRoute,color){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.mapv.call(null,(function (p1__9676_SHARP_){
return pathfinder.lib.draw_backlink_index.call(null,TPRoute,p1__9676_SHARP_,color);
}),cljs.core.range.call(null,TPRoute.tpath.nodes.length)));
});
pathfinder.lib.draw_backlinks = (function pathfinder$lib$draw_backlinks(TPRoute,color0,color1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_backlink_lines,TPRoute,color0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_backlink_indexes,TPRoute,color1], null)], null);
});
pathfinder.lib.draw_route = (function pathfinder$lib$draw_route(TPRoute,color){
if(cljs.core.truth_((function (){var or__4131__auto__ = (void 0 === TPRoute.goalPos);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (void 0 === TPRoute.startPos);
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return isNaN(TPRoute.goalRN.dist);
}
}
})())){
return null;
} else {
var posA = TPRoute.goalPos;
var pA = cljs.core.atom.call(null,TPRoute.tpath.getPointFromPos(posA));
var pB = cljs.core.atom.call(null,null);
var back = cljs.core.atom.call(null,TPRoute.goalRN.back);
var erg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null));
while(true){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,back),(-1))){
cljs.core.reset_BANG_.call(null,pB,(TPRoute.tpath.nodes[cljs.core.deref.call(null,back)]));

cljs.core.swap_BANG_.call(null,erg,((function (posA,pA,pB,back,erg){
return (function (p1__9677_SHARP_){
return cljs.core.conj.call(null,p1__9677_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,pathfinder.lib.point_js__GT_clj.call(null,cljs.core.deref.call(null,pA)),pathfinder.lib.point_js__GT_clj.call(null,cljs.core.deref.call(null,pB)),color], null));
});})(posA,pA,pB,back,erg))
);

cljs.core.reset_BANG_.call(null,back,(TPRoute.nArr[cljs.core.deref.call(null,back)]).back);

cljs.core.reset_BANG_.call(null,pA,cljs.core.deref.call(null,pB));

continue;
} else {
}
break;
}

var posB_9679 = TPRoute.startPos;
var pB_9680__$1 = TPRoute.tpath.getPointFromPos(posB_9679);
cljs.core.swap_BANG_.call(null,erg,((function (posB_9679,pB_9680__$1,posA,pA,pB,back,erg){
return (function (p1__9678_SHARP_){
return cljs.core.conj.call(null,p1__9678_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_line,pathfinder.lib.point_js__GT_clj.call(null,cljs.core.deref.call(null,pA)),pathfinder.lib.point_js__GT_clj.call(null,pB_9680__$1),color], null));
});})(posB_9679,pB_9680__$1,posA,pA,pB,back,erg))
);

return cljs.core.deref.call(null,erg);
}
});
pathfinder.lib.test24 = (function pathfinder$lib$test24(){
var db = (function pathfinder$lib$test24_$_db(kw){
return reagent.core.cursor.call(null,pathfinder.appdb.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw], null));
});
var clicked_pos = cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"clicked-pos","clicked-pos",-504424725)));
var dom_node = cljs.core.deref.call(null,db.call(null,new cljs.core.Keyword(null,"dom-node","dom-node",452283727)));
var tp = pathfinder.lib.tpath_construct.call(null,pathfinder.lib.net3);
var step1 = tp.setActive((3),false);
var tpath = pathfinder.lib.tpath_js__GT_clj.call(null,tp);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_tpath,pathfinder.lib.tpath_js__GT_clj.call(null,tp)], null),(function (){var temp__5718__auto__ = cljs.core.first.call(null,clicked_pos);
if(cljs.core.truth_(temp__5718__auto__)){
var abs = temp__5718__auto__;
var p_a = pathfinder.lib.coords_abs_to_rel.call(null,abs,dom_node);
var pA = pathfinder.lib.point_construct.call(null,p_a);
var tpr = (new TPRoute(tp));
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clicked_pos))){
var startPos = tp.getClosestPos(pA);
var step2 = tpr.startPropagation(startPos);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,p_a,"green"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_start_and_goal,tpr,"red"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_backlinks,tpr,"pink","black"], null)], null);
} else {
var p_b = pathfinder.lib.coords_abs_to_rel.call(null,cljs.core.second.call(null,clicked_pos),dom_node);
var pB = pathfinder.lib.point_construct.call(null,p_b);
var startPos = tp.getClosestPos(pB);
var goalPos = tp.getClosestPos(pA);
var step3 = tpr.startPropagation(startPos);
var step4 = tpr.endPropagation(goalPos);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,p_a,"green"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_cross,p_b,"green"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_start_and_goal,tpr,"red"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_backlinks,tpr,"pink","black"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_goal_backlink_line,tpr,"purple"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pathfinder.lib.draw_route,tpr,"green"], null)], null);
}
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=lib.js.map
