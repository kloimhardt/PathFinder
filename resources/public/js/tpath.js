  ///////////
 // TPath //
///////////

//see: file:///C:/xampp/htdocs/zuderstorfer.com/html/test/TPath%20Documentation.htm

function trace(o) {
	console.debug(o);
}

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	toString() {
		return "x: "+ this.x +", y: "+ this.y;
	}
	
	trace() {
		trace(this.toString());
	}
}

  /////////////
 // Display //
/////////////

// Helpers for display

function drawPoint(p, color="#000000", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	mc.innerHTML += '<circle fill="#ffffff" stroke="'+ color +'" cx="'+ p.x +'" cy="'+ p.y +'" r="1" />';
}

function drawLine(p0, p1, color="#dddddd", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	mc.innerHTML += '<line stroke="'+ color +'" x1="'+ p0.x +'" y1="'+ p0.y +'" x2="'+ p1.x +'" y2="'+ p1.y +'" />';
}

function drawX(p, color="#ff0000", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	var d = 5;
	drawLine(new Point(p.x - d, p.y - d), new Point(p.x + d, p.y + d), color, mc);
	drawLine(new Point(p.x + d, p.y - d), new Point(p.x - d, p.y + d), color, mc);
}

function drawCross(p, color="#FF0000", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	var d = 5;
	drawLine(new Point(p.x - d, p.y), new Point(p.x + d, p.y), color, mc);
	drawLine(new Point(p.x, p.y - d), new Point(p.x, p.y + d), color, mc);
}

function drawDiamond(p, color="#FF0000", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	var d = 5;
	mc.innerHTML += '<polyline stroke="'+ color +'" fill="none" points="'
		+ p.x +', '+ (p.y - d) +' '
		+ (p.x - d) +', '+ p.y +' '
		+ p.x +', '+ (p.y + d) +' '
		+ (p.x + d) +', '+ p.y +' '
		+ p.x +', '+ (p.y - d)
		+'" />';
}

function drawCircle(p, r, color0="#000000", color1="#FFFFFF", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	mc.innerHTML += '<circle stroke="'+ color0 +'" fill="'+ color1 +'" cx="'+ p.x +'" cy="'+ p.y +'" r="'+ r +'" />';
}

function drawTextField(p, txt, color="#000000", mc = undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	mc.innerHTML += '<text text-anchor="middle" dominant-baseline="central" font-family="helvetica" font-size="8" fill="'+
		color +'" x="'+ p.x +'" y="'+ p.y +'" >'+ txt +'</text>';
}

function drawTextCircle(p, txt, color0="#000000", color1="#FFFFFF", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	var r = 7;
	mc.innerHTML += '<circle stroke="'+ color0 +'" fill="'+ color1 +'" cx="'+ p.x +'" cy="'+ p.y +'" r="'+ r +'" />';
	drawTextField(p, txt, color0, mc);
}

function drawTextRect(p, txt, color0="#000000", color1="#FFFFFF", color2="#000000", mc=undefined) {
	if(mc == undefined) {
		mc = document.getElementById(SvgContainer);
	}
	var r = 7;
	mc.innerHTML += '<rect stroke="'+ color0 +'" fill="'+ color1 +'" x="'+ (p.x-r) +'" y="'+ (p.y-r) +'" width="'+ (2*r) +'" height="'+ (2*r) +'" />';
	drawTextField(p, txt, color2, mc);
}

  //////////////
 // Geometry //
//////////////

// Helpers for geometric calculations

function getPointByParam(p0, p1, u) {
	var x = (1-u)*p0.x + u*p1.x;
	var y = (1-u)*p0.y + u*p1.y;
	return new Point(x, y);
}

// Compare floatingpoint values assuming a rounding error
// machine epsilon = 2.2204460492503130808472633361816E-16
function compareEpsilon(vA, vB) {
	if(Math.abs(vA-vB) < 1E-12)
		return true;
	return false;
}

// Compare points assuming a rounding error
function comparePointsEpsilon(pA, pB) {
	return(compareEpsilon(pA.x, pB.x) && compareEpsilon(pA.y, pB.y));
}

// Intersection between 2 lines in parametric representation.
// Result: Parameter "u" between "p0" and "p1".
function intersection(p0, p1, p2, p3) {
	var numerator   = (p0.y - p2.y)*(p3.x - p2.x) - (p0.x - p2.x)*(p3.y - p2.y);
	var denominator = (p1.x - p0.x)*(p3.y - p2.y) - (p1.y - p0.y)*(p3.x - p2.x);
	if(denominator == 0)
		return NaN;
	return  numerator/denominator;
}

// See "intersection"
// Result: NaN if no intersection or intersection not between "p0" and "p1".
function strictIntersection(p0, p1, p2, p3) {
	var u = intersection(p2, p3, p0, p1);
	if(isNaN(u))   return NaN;
	if(u>1.00000000000001 || u<-0.00000000000001) return NaN;
	u = intersection(p0, p1, p2, p3);
	if(isNaN(u))   return NaN;
	if(u>1 || u<0) return NaN;
	return u;
}

// Given a line between p0 and p1: Are both p2 and p3 on different sides of this line?
// Should be faster than strictIntersection, but there is actually no difference in speed!
function intersectionCheckOneDirection(p0, p1, p2, p3) {
	var dx1 = p1.x - p0.x;
	var dy1 = p1.y - p0.y;
	var dx2 = p2.x - p0.x;
	var dy2 = p2.y - p0.y;
	var dx3 = p3.x - p0.x;
	var dy3 = p3.y - p0.y;
	var c2 = dx1*dy2 - dy1*dx2;
	var c3 = dx1*dy3 - dy1*dx3;
	if(c2 >= 0 && c3 >= 0) return false;
	if(c2 <= 0 && c3 <= 0) return false;
	return true;
}

function intersectionCheck(p0, p1, p2, p3) {
	return intersectionCheckOneDirection(p0, p1, p2, p3) && intersectionCheckOneDirection(p2, p3, p0, p1);
}

// Are the lines from point p0 to p1, p2, and p3 in the given order?
// Is line p0-p2 between lines p0-p1 and p0-p3?
// Uses cross product.
// Returns true even if lines lay one on another.
function areLinesInOrder(p0, p1, p2, p3) {
	var dx01 = p1.x - p0.x;
	var dy01 = p1.y - p0.y;
	var dx02 = p2.x - p0.x;
	var dy02 = p2.y - p0.y;
	var dx03 = p3.x - p0.x;
	var dy03 = p3.y - p0.y;
	var c12 = dx01*dy02 - dy01*dx02;
	var c23 = dx02*dy03 - dy02*dx03;
	var c13 = dx01*dy03 - dy01*dx03;
	if(c13 == 0) { // Lines p0-p1 and p0-p3 have the same direction
		return (c12 == 0);
	}
	if(c12 >= 0 && c23 >=0 && c13 >= 0) return true;
	if(c12 <= 0 && c23 <=0 && c13 <= 0) return true;
	return false;
}

// Point 0 (not given) must be between n0 and n1.
// n2 and pt1 must be on the same side of line n0 to n1.
function pointsIntoAreaTriangleHelper(n0, n1, n2, pt1) {
	var dx1 = n1.x - n0.x;
	var dy1 = n1.y - n0.y;
	var dx2 = n2.x - n0.x;
	var dy2 = n2.y - n0.y;
	var dx3 = pt1.x - n0.x;
	var dy3 = pt1.y - n0.y;
	var c2 = dx1*dy2 - dy1*dx2;
	var c3 = dx1*dy3 - dy1*dx3;
	if(c2 == 0) { // The triangle is a line!
		return (c3 == 0);
	}
	if(c2 > 0 && c3 >= 0) return true;
	if(c2 < 0 && c3 <= 0) return true;
	return false;
	//return !intersectionCheckOneDirection(n0, n1, n2, pt1);
}

// Distance between points according to Pythagoras but as square (no taking the root)
function getSquareDist(p0, p1) {
	var dx = p1.x - p0.x;
	var dy = p1.y - p0.y;
	return dx*dx + dy*dy;
}

// Distance between points
function getDist(p0, p1) {
	var dx = p1.x - p0.x;
	var dy = p1.y - p0.y;
	return Math.sqrt( dx*dx + dy*dy );
}

function crossProduct(pa, pb) {
	return pa.x*pb.y - pa.y*pb.y;
}

function crossProductTriangle(pa, pb, pc) {
	return (pb.x - pa.x)*(pc.y - pa.y) - (pb.y - pa.y)*(pc.x - pa.x);
}

// Calculates parameter u between points p0 and p1
// for a point p between
function getParamU(p, p0, p1) {
	var x0 = p0.x;
	var dx = p1.x-x0;
	var y0 = p0.y;
	var dy = p1.y-y0;
	var numerator = (y0-p.y) * dy + (x0-p.x) * dx;
	var denominator = dx*dx + dy*dy;
	if(denominator == 0)
		return NaN;
	return -numerator/denominator;
}

  ///////////////////
 // Helpers TPath //
///////////////////

// A triangle given by three node indexes.
// Temp-info: neighbouring triangles (that share an edge)
class TPTriangle {
	constructor(n0, n1, n2) {
		this.n0 = n0;
		this.n1 = n1;
		this.n2 = n2;
		this.active = true;
		this.ngb01 = -1;
		this.ngb12 = -1;
		this.ngb02 = -1;
	}
}

// A position within the map of triangles.
// A point on a certain triangle given by parameters u01 and u12.
class TPPos {
	constructor(tindex, u01, u12) {
		if(tindex==undefined) {
			this.tindex = -1;
			this.u01 = NaN;
			this.u12 = NaN;
		}
		this.tindex = tindex;
		this.u01 = u01;
		this.u12 = u12;
	}
	
	toString() {
		return "tindex: "+ this.tindex +", u01: "+ this.u01 +", u12: "+ this.u12;
	}
	
	trace() {
		trace(this.toString());
	}
}

  /////////////////
 // class TPath //
/////////////////

// 
class TPath {

	constructor() {
		this.nodes = [];
		this.triangles = [];
		this.tempData = false; // Temp data of graph
		this.nodeTriangleLinks = Array(); // Link node to triangle. Array of arrays with links tindex for each node.
	}

	// Nodes

	addNode(point) {
		if(!(point instanceof Point)) {
			throw("addNode: Argument 1 is not a Point");
		}
		this.nodes.push(point);
	}

	addNodeXY(x, y) {
		this.addNode(new Point(x, y));
	}

	drawNodes(color, mc) {
		var length = this.nodes.length;
		for(var index = 0; index < length; index++) {
			drawPoint(this.nodes[index], color, mc);
		}
	}

	drawNodeIndex(index, color0="#000000", color1="#FFFFFF", mc) {
		var node = this.nodes[index];
		drawTextCircle(node, index.toString(), color0, color1, mc);
	}

	drawNodeIndexes(color0="#000000", color1="#FFFFFF", mc) {
		var length = this.nodes.length;
		for(var index = 0; index < length; index++) {
			this.drawNodeIndex(index, color0, color1, mc);
		}
	}

	nodeToString(node) {
		return "Node(" + node.x + ", " + node.y +")";
	}

	traceNode(node) {
		trace(this.nodeToString(node));
	}

	nodeToStringPerIndex(index) {
		var node = this.nodes[index];
		return index + ": " + this.nodeToString(node);
	}

	traceNodePerIndex(index) {
		trace(this.nodeToStringPerIndex(index));
	}

	traceNodes() {
		var length = this.nodes.length;
		trace("Nodes: "+ length +"\n");
		for(var index = 0; index < length; index++) {
			this.traceNodePerIndex(index);
		}
	}
	
	// Get the closest node nindex to a point (if distance is smaller than sqmin)
	// Compare squares of distances (so no call to Math.Sqrt is necessary)
	getClosestNode(p, sqmin) {
		if(sqmin==undefined)
			sqmin = NaN;
		var minindex = -1;
		var length = this.nodes.length;
		for(var nindex = 0; nindex < length; nindex++) {
			var sqdist = getSquareDist(p, this.nodes[nindex]);
			if(sqdist < sqmin || isNaN(sqmin)) {
				minindex = nindex;
				sqmin = sqdist;
			}
		}
		return minindex;
	}

	  ///////////////
	 // triangles //
	///////////////

	// If all nodes are the same, the triangle is a node only.
	// If n1==n2 the triangle is a line only.
	// If a triangle is not active, it will not be drawn and no pathes go over it.

	setTriangleDists(triangle) {
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		//triangle.dist01 = getDist(n0, n1);
		//triangle.dist12 = getDist(n1, n2);
		//triangle.dist02 = getDist(n0, n2);
	}
	
	addTriangle(n0, n1, n2) {
		var triangle;
		if(n1==undefined) { // Only a node
			triangle = new TPTriangle(n0, n0, n0);
		} else if(n2==undefined) { // Only a line
			triangle = new TPTriangle(n0, n1, n1);
		} else { // Full triangle
			triangle = new TPTriangle(n0, n1, n2);
		}
		//this.setTriangleDists(triangle);
		this.triangles.push(triangle);
		this.madeChanges();
	}

	add(n0, n1, n2) {
		addTriangle(n0, n1, n2);
	}

	setActive(tindex, active) {
		var triangle = this.triangles[tindex];
		triangle.active = active;
		this.madeChanges();
	}
	
	drawTriangle(tindex, color0="#000000", color1="#ddffdd", mc) {
		if(mc==undefined)
			var mc = document.getElementById(SvgContainer);
		var triangle = this.triangles[tindex];
		if(!triangle.active) return;
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		mc.innerHTML += '<polyline stroke="'+ color1 +'" fill="'+ color0 +'" points="'
			+ n2.x +', '+ n2.y +' '
			+ n0.x +', '+ n0.y +' '
			+ n1.x +', '+ n1.y +' '
			+ n2.x +', '+ n2.y
			+'" />';
	}

	drawTriangles(color="#888888", mc) {
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			this.drawTriangle(tindex, color, mc);
		}
	}
	
	drawTriangleIndex(tindex, color0="#000000", color1="#ffffff", mc) {
		var triangle = this.triangles[tindex];
		if(!triangle.active) return;
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		var pt;
		if(n1==n2) { // Only a line
			pt = new Point((n0.x + n1.x)/2, (n0.y + n1.y)/2);
		} else { // Full triangle
			pt = new Point((n0.x + n1.x + n2.x)/3, (n0.y + n1.y + n2.y)/3);
		}
		drawTextRect(pt, tindex.toString(), color0, color1, mc);
	}

	drawTriangleIndexes(color0="#000000", color1="#ffffff", mc) {
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			this.drawTriangleIndex(tindex, color0, color1, mc);
		}
	}

	draw(color0="#eeffee", color1="#000000", color2="#ffffff", color3="#dddddd", mc) {
		this.drawTriangles(color0, color3, mc);
		this.drawNodeIndexes(color1, color2, mc);
		this.drawTriangleIndexes(color1, color2, mc);
	}

	triangleToString(tindex) {
		var triangle = this.triangles[tindex];
		return tindex + ": Triangle ("+ triangle.n0 +", "+ triangle.n1 +", "+ triangle.n2 +"); active: "+ triangle.active +
			"; neighbors: "+ triangle.ngb01 +", "+ triangle.ngb12 +", "+ triangle.ngb02;
	}

	traceTriangle(tindex) {
		trace(this.triangleToString(tindex));
	}

	traceTriangles() {
		var length = this.triangles.length;
		trace("Triangles: "+ length +"\n");
		for(var tindex = 0; tindex < length; tindex++) {
			this.traceTriangle(tindex);
		}
	}

	trace() {
		this.traceNodes();
		this.traceTriangles();
	}

	// Check if the point p is in (or at the edge of) triangle given by tindex.
	// Triangle must be active.
	isPointInTriangle(tindex, p) {
		var triangle = this.triangles[tindex];
		if(!triangle.active) return false;
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		var p0 = crossProductTriangle(n0, n1 ,p);
		var p1 = crossProductTriangle(n1, n2 ,p);
		var p2 = crossProductTriangle(n2, n0 ,p);
		if( p0 >= 0 && p1 >= 0 && p2 >= 0) return true;
		if( p0 <= 0 && p1 <= 0 && p2 <= 0) return true;
		return false;
	}

	// Check if the point p is in any triangle and return the index.
	// Return -1 if no hit.
	getHitTriangle(p) {
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			if(this.isPointInTriangle(tindex, p))
				return tindex;
		}
		return -1;
	}

	triangleHasNode(tindex, nindex) {
		var triangle = this.triangles[tindex];
		if(triangle.n0 == nindex) return true;
		if(triangle.n1 == nindex) return true;
		if(triangle.n2 == nindex) return true;
		return false;
	}

	// Get the index of a triangle which has the given node nindex
	getTriangleFromNode(nindex) {
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			if(!this.triangles[tindex].active) continue;
			if(this.triangleHasNode(tindex, nindex))
				return tindex;
		}
		return -1;
	}

	// Does the line from node nindex to p point into the triangle tindex?
	pointsIntoTriangle(tindex, nindex, p) {
		var triangle = this.triangles[tindex];
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		if(triangle.n0 == nindex) {
			return areLinesInOrder(n0, n1, p, n2);
		}
		if(triangle.n1 == nindex) {
			return areLinesInOrder(n1, n0, p, n2);
		}
		if(triangle.n2 == nindex) {
			return areLinesInOrder(n2, n0, p, n1);
		}
		return undefined;
	}

	// Like pointsIntoTriangle but point given as node index
	nodePointsIntoTriangle(tindex, nindex, pindex) {
		return pointsIntoTriangle(tindex, nindex, this.nodes[pindex]);
	}

	  ///////////////
	 // Positions //
	///////////////

	// pos is changed
	// returns squaredist
	// Compare squares of distances (so no call to Sqrt is necessary)
	// Triangle must be active
	getClosestTriangleEdge(tindex, p, pos, sqmin) {
		if(sqmin==undefined)
			sqmin = NaN;
		var triangle = this.triangles[tindex];
		if(!triangle.active) return sqmin;
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		var u;
		var pt;
		var sqdist;
		u = getParamU(p, n0, n1);
		if(u >= 0 && u <= 1) {
			pt = getPointByParam(n0, n1, u);
			sqdist = getSquareDist(p, pt);
			if(sqdist < sqmin || isNaN(sqmin)) {
				sqmin = sqdist;
				pos.tindex = tindex;
				pos.u01 = u;
				pos.u12 = 0;
			}
		}
		u = getParamU(p, n1, n2);
		if(u >= 0 && u <= 1) {
			pt = getPointByParam(n1, n2, u);
			sqdist = getSquareDist(p, pt);
			if(sqdist < sqmin || isNaN(sqmin)) {
				sqmin = sqdist;
				pos.tindex = tindex;
				pos.u12 = u;
				pos.u01 = 1;
			}
		}
		u = getParamU(p, n0, n2);
		if(u >= 0 && u <= 1) {
			pt = getPointByParam(n0, n2, u);
			sqdist = getSquareDist(p, pt);
			if(sqdist < sqmin || isNaN(sqmin)) {
				sqmin = sqdist;
				pos.tindex = tindex;
				pos.u12 = u;
				pos.u01 = u;
			}
		}
		return sqmin;
	}

	getClosestTrianglesEdge(p, pos, sqmin) {
		if(sqmin==undefined)
			sqmin = NaN;
		var posmin = new TPPos();
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			var sqdist = this.getClosestTriangleEdge(tindex, p, posmin);
			if(sqdist < sqmin || isNaN(sqmin)) {
				sqmin = sqdist;
				pos.tindex = posmin.tindex;
				pos.u01 = posmin.u01;
				pos.u12 = posmin.u12;
			}
		}
		return sqmin;
	}

	getPointFromPos(pos) {
		if(pos.tindex==-1)
			return undefined;
		var triangle = this.triangles[pos.tindex];
		if(triangle==undefined)
			return undefined;
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		return new Point(
			n0.x + pos.u01 * (n1.x - n0.x) + pos.u12 * (n2.x - n1.x),
			n0.y + pos.u01 * (n1.y - n0.y) + pos.u12 * (n2.y - n1.y)
		);
	}

	getNodePosFromTriangle(tindex, nindex) {
		var triangle = this.triangles[tindex];
		if(triangle.n0 == nindex)
			return new TPPos(tindex, 0, 0);
		if(triangle.n1 == nindex)
			return new TPPos(tindex, 1, 0);
		if(triangle.n2 == nindex)
			return new TPPos(tindex, 1, 1);
		return undefined;
	}
	
	getPosFromPoint(tindex, p) {
		var triangle = this.triangles[tindex];
		if(triangle.n0==triangle.n1) { // Triangle is only a node
			return new TPPos(tindex, NaN, NaN);
		}
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		if(triangle.n1==triangle.n2) { // Triangle is only a line
			var u = getParamU(p, n0, n1);
			return new TPPos(tindex, u, u);
		}
		var dx01 = n1.x - n0.x;
		var dx12 = n2.x - n1.x;
		var dy01 = n1.y - n0.y;
		var dy12 = n2.y - n1.y;
		var x0 = p.x - n0.x;
		var y0 = p.y - n0.y;
		var denominator = dx01*dy12 - dx12*dy01;
		var u01 = (x0*dy12 - y0*dx12) / denominator;
		var u12 = (y0*dx01 - x0*dy01) / denominator;
		return new TPPos(tindex, u01, u12);
	}

	interpolateByPos(pos, v0, v1, v2) {
		var triangle = this.triangles[pos.tindex];
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		var v3 = v2 - v1 + v0;
		var v01 =  v0*(1.0-pos.u01)  +  v1*(pos.u01);
		var v32 =  v3*(1.0-pos.u01)  +  v2*(pos.u01);
		var v   =  v01*(1.0-pos.u12) + v32*(pos.u12);
		return v;
	}

	// Is the position inside the triangle?
	posIsInItsTriangle(pos) {
		//var triangle = this.triangles[pos.tindex];
		return (pos.u01 >= 0 && pos.u01 <= 1 && pos.u12 >= 0 && pos.u12 <= 1 && pos.u01 >= pos.u12);
	}

	// Is the position exactly at a node? Return nindex or -1
	posIsOnNode(pos) {
		var triangle = this.triangles[pos.tindex];
		if(pos.u01 == 0 && pos.u12 == 0) return triangle.n0;
		if(pos.u01 == 1 && pos.u12 == 0) return triangle.n1;
		if(pos.u01 == 1 && pos.u12 == 1) return triangle.n2;
		return -1;
	}
	
	  ///////////////
	 // Temp Data //
	///////////////
	
	// A method calls this after changes in the triangle section.
	madeChanges() {
		this.tempData = false;
	}

	traceNodeTriangleLinks() {
		trace("Node to triangle links:");
		var length = this.nodes.length;
		for(var nindex = 0; nindex < length; nindex++) {
			trace(nindex +": "+ this.nodeTriangleLinks[nindex].join(", "));
		}
	}
	
	buildNodeTriangleLinks() {
		this.nodeTriangleLinks.length = 0;
		var length = this.nodes.length;
		for(var nindex = 0; nindex < length; nindex++) {
			this.nodeTriangleLinks[nindex] = Array();
		}
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			var triangle = this.triangles[tindex];
			if(!triangle.active) continue;
			this.nodeTriangleLinks[triangle.n0].push(tindex);
			if(triangle.n1!=triangle.n0) {
				this.nodeTriangleLinks[triangle.n1].push(tindex);
			}
			if(triangle.n2!=triangle.n1) {
				this.nodeTriangleLinks[triangle.n2].push(tindex);
			}
		}
	}

	registerTriangleNeighbors(tindex) {
		var triangle = this.triangles[tindex];
		var length;
		var index;
		var nindex;
		var arrA;
		var arrB;
		if(triangle.n0 != triangle.n1) {
			arrA = this.nodeTriangleLinks[triangle.n0];
			arrB = this.nodeTriangleLinks[triangle.n1];
			length = arrA.length;
			for(index = 0; index < length; index++) {
				nindex = arrA[index];
				if(arrB.indexOf(nindex)!=-1 && nindex != tindex) {
					triangle.ngb01 = nindex;
				}
			}
		}
		if(triangle.n1 != triangle.n2) {
			arrA = this.nodeTriangleLinks[triangle.n1];
			arrB = this.nodeTriangleLinks[triangle.n2];
			length = arrA.length;
			for(index = 0; index < length; index++) {
				nindex = arrA[index];
				if(arrB.indexOf(nindex)!=-1 && nindex != tindex) {
					triangle.ngb12 = nindex;
				}
			}
			arrA = this.nodeTriangleLinks[triangle.n0];
			arrB = this.nodeTriangleLinks[triangle.n2];
			length = arrA.length;
			for(index = 0; index < length; index++) {
				nindex = arrA[index];
				if(arrB.indexOf(nindex)!=-1 && nindex != tindex) {
					triangle.ngb02 = nindex;
				}
			}
		}
	}

	registerTrianglesNeighbors() {
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			this.registerTriangleNeighbors(tindex);
		}
	}

	// Rebuilds temp data if outdated
	rebuildTempDataIfOutdated() {
		if(this.tempData) return;
		this.buildNodeTriangleLinks();
		this.registerTrianglesNeighbors();
		this.tempData = true;
	}
	
	//////////////////////////
	
	getTrianglesByNode(nindex) {
		this.rebuildTempDataIfOutdated();
		return this.nodeTriangleLinks[nindex];
	}

	// Get all the nodes that connect (via a triangle) to this node
	getAdjacentNodes(nindex) {
		var nArray = Array(); // Array of adjacent nodes
		nArray.push(nindex); // Will be removed later
		var tArray = this.getTrianglesByNode(nindex); // Array of triangles with nindex
		var length = tArray.length;
		for(var tindex = 0; tindex < length; tindex++) {
			var triangle = this.triangles[tArray[tindex]];
			if(!triangle.active) continue;
			var ntindex;
			var index;
			ntindex = triangle.n0;
			if(nArray.indexOf(ntindex) == -1)
				nArray.push(ntindex);
			ntindex = triangle.n1;
			if(nArray.indexOf(ntindex) == -1)
				nArray.push(ntindex);
			ntindex = triangle.n2;
			if(nArray.indexOf(ntindex) == -1)
				nArray.push(ntindex);
		}
		nArray.shift(); // Remove nindex
		return nArray;
	}
	
	getPosOfNode(nindex) {
		var arr = this.getTrianglesByNode(nindex);
		if(arr.length == 0) return undefined;
		var tindex = arr[0];
		return this.getNodePosFromTriangle(tindex, nindex);
	}

	// Given a point p get the closest triangle and position within
	getClosestPos(p) {
		var tindex = this.getHitTriangle(p);
		if(tindex != -1) {
			return this.getPosFromPoint(tindex, p);
		}
		var nindex = this.getClosestNode(p);
		var ndist = getDist(p, this.nodes[nindex]);
		var sqndist = ndist*ndist;
		var pos = new TPPos();
		var sqtdist = this.getClosestTrianglesEdge(p, pos, sqndist);
		if(sqtdist < sqndist) { // Edge of a triangle is closest
			return pos;
		} else { // Node is closest
			return this.getPosOfNode(nindex);
		}
	}

	// Is the line given by two points pA and pB crossing any borders?
	// Intersects line with every edge of every triangle.
	// A border is an edge (of a triangle) that doesn't connect to a neightboring triangle. Therefor it "connects" to the outside.
	crossesBorderPoints(pA, pB) {
		this.rebuildTempDataIfOutdated(); // Needs triangle ngb01, ngb12, ngb02
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			var triangle = this.triangles[tindex];
			if(!triangle.active) continue;
			var n0 = this.nodes[triangle.n0];
			var n1 = this.nodes[triangle.n1];
			var n2 = this.nodes[triangle.n2];
			if(intersectionCheck(pA, pB, n0, n1))
				if(triangle.ngb01==-1)
					return true;
			if(intersectionCheck(pA, pB, n1, n2))
				if(triangle.ngb12==-1)
					return true;
			if(intersectionCheck(pA, pB, n0, n2))
				if(triangle.ngb02==-1)
					return true;
		}
		return false; // line has never crossed a border
	}

	onBorderHelper(tn0, tn1, n0, n1) {
		if(n0 == -1)
			return false;
		if(tn0 == n0) {
			if(n1 == -1) // Point exactly on tn0
				return true;
			if(tn1 == n1) // Point on edge tn0 to tn1
				return true;
		}
		if(tn1 == n0) {
			if(n1 == -1) // Point exactly on tn1
				return true;
			if(tn0 == n1) // Point on edge tn1 to tn0
				return true;
		}
		return false;
	}
	
	onBorder(tn0, tn1, nA0, nA1, nB0, nB1) {
		return (this.onBorderHelper(tn0, tn1, nA0, nA1) || this.onBorderHelper(tn0, tn1, nB0, nB1));
	}
	
	// Is the line given by two positions pA and pB crossing any borders?
	// Intersects line with every edge of every triangle.
	// A border is an edge (of a triangle) that doesn't connect to a neightboring triangle. Therefor it "connects" to the outside.
	// Checks if a position is on the node or edge of a border (in this case it does not cross the border).
	crossesBorderPositions(posA, posB) {
		this.rebuildTempDataIfOutdated(); // Needs triangle ngb01, ngb12, ngb02
		// Prepare special cases posA
		var triangleA = this.triangles[posA.tindex];
		var nodeA0 = -1; // != -1 if pos is on node or edge
		var nodeA1 = -1; // != -1 if pos is on edge
		if(posA.u01 == 0 && posA.u12 == 0)
			nodeA0 = triangleA.n0;
		if(posA.u01 == 1 && posA.u12 == 0)
			nodeA0 = triangleA.n1;
		if(posA.u01 == 1 && posA.u12 == 1)
			nodeA0 = triangleA.n2;
		if(posA.u01 != 0 && posA.u12 == 0) {
			nodeA0 = triangleA.n0;
			nodeA1 = triangleA.n1;
		}
		if(posA.u01 == 1 && posA.u12 != 0) {
			nodeA0 = triangleA.n1;
			nodeA1 = triangleA.n2;
		}
		if(posA.u01 == posA.u12 && posA.u01 != 0 && posA.u01 != 1) {
			nodeA0 = triangleA.n0;
			nodeA1 = triangleA.n2;
		}
		// Prepare special cases posB
		var triangleB = this.triangles[posB.tindex];
		var nodeB0 = -1; // != -1 if pos is on node or edge
		var nodeB1 = -1; // != -1 if pos is on edge
		if(posB.u01 == 0 && posB.u12 == 0)
			nodeB0 = triangleB.n0;
		if(posB.u01 == 1 && posB.u12 == 0)
			nodeB0 = triangleB.n1;
		if(posB.u01 == 1 && posB.u12 == 1)
			nodeB0 = triangleB.n2;
		if(posB.u01 != 0 && posB.u12 == 0) {
			nodeB0 = triangleB.n0;
			nodeB1 = triangleB.n1;
		}
		if(posB.u01 == 1 && posB.u12 != 0) {
			nodeB0 = triangleB.n1;
			nodeB1 = triangleB.n2;
		}
		if(posB.u01 == posB.u12 && posB.u01 != 0 && posB.u01 != 1) {
			nodeB0 = triangleB.n0;
			nodeB1 = triangleB.n2;
		}
		// Points A and B
		var pA = this.getPointFromPos(posA);
		var pB = this.getPointFromPos(posB);
		// Loop over triangles
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			var triangle = this.triangles[tindex];
			if(!triangle.active) continue;
			var n0 = this.nodes[triangle.n0];
			var n1 = this.nodes[triangle.n1];
			var n2 = this.nodes[triangle.n2];
			if(intersectionCheck(pA, pB, n0, n1))
				if(triangle.ngb01==-1)
					if(!this.onBorder(triangle.n0, triangle.n1, nodeA0, nodeA1, nodeB0, nodeB1))
						return true;
			if(intersectionCheck(pA, pB, n1, n2))
				if(triangle.ngb12==-1)
					if(!this.onBorder(triangle.n1, triangle.n2, nodeA0, nodeA1, nodeB0, nodeB1))
						return true;
			if(intersectionCheck(pA, pB, n0, n2))
				if(triangle.ngb02==-1)
					if(!this.onBorder(triangle.n0, triangle.n2, nodeA0, nodeA1, nodeB0, nodeB1))
						return true;
		}
		return false; // line has never crossed a border
	}

	// Does the line from nindex to p point into the area (of triangles)?
	pointsFromNodeIntoArea(nindex, p) {
		//trace("pointsIntoArea("+nindex+", "+p.x+", "+p.y+")");
		this.rebuildTempDataIfOutdated(); // Needs nodeTriangleLinks
		var arr = this.nodeTriangleLinks[nindex];
		//trace("  triangles: "+arr.join(", "));
		var length = arr.length;
		for(var index = 0; index < length; index++) {
			var tindex = arr[index];
			//trace("  tindex: "+tindex);
			var triangle = this.triangles[tindex];
			if(!triangle.active) continue;
			var res = this.pointsIntoTriangle(tindex, nindex, p);
			if(res) return true;
		}
		return false;
	}

	pointsIntoAreaTriangle(pos, pt) {
		this.rebuildTempDataIfOutdated(); // Needs neigbour
		var triangle = this.triangles[pos.tindex];
		//if(triangle)
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		if(0 < pos.u01 && pos.u01 < 1 && pos.u12 == 0 && triangle.ngb01 == -1) { // node0 to node1
			return pointsIntoAreaTriangleHelper(n0, n1, n2, pt);
		}
		if(pos.u01 == 1 && 0 < pos.u12 && pos.u12 < 1 && triangle.ngb12 == -1) { // node1 to node2
			return pointsIntoAreaTriangleHelper(n1, n2, n0, pt);
		}
		if(pos.u01 == pos.u12 && 0 < pos.u01 && pos.u01 < 1 && triangle.ngb02 == -1) { // node0 to node2
			return pointsIntoAreaTriangleHelper(n0, n2, n1, pt);
		}
		return true;
	}
	
	//If a position is at the areas border, the line must point inwards.
	pointsIntoArea(pos, pt) {
		//If a position is at the areas border, the line must point inwards.
		var nindex = this.posIsOnNode(pos);
		if( nindex!=-1 && !this.pointsFromNodeIntoArea(nindex, pt) ) return false;
		if(!this.pointsIntoAreaTriangle(pos, pt)) return false;
		return true;
	}
	
	// Is the line from posA to posB completely inside the area (of triangles)?
	// * The positions posA and posB must be in the area (or atleast at its border).
	// * If a position is at the areas border, the line must point inwards.
	// * The line doesn't cross any border.
	isInArea(posA, posB) {
		// The positions posA and posB must be in the area (or atleast at its border).
		if( !this.posIsInItsTriangle(posA) ) return false;
		if( !this.posIsInItsTriangle(posB) ) return false;
		if(posA.tindex == posB.tindex) return true; // Both positions on the same triangle
		var pA = this.getPointFromPos(posA);
		var pB = this.getPointFromPos(posB);
		if(!this.pointsIntoArea(posA, pB)) return false;
		if(!this.pointsIntoArea(posB, pA)) return false;
		// The line doesn't cross any border
		if(this.crossesBorderPositions(posA, posB)) return false;
		//if(this.crossesBorderPoints(pA, pB)) return false;
		return true;
	}

	getAllTriangleIntersections(pA, pB, tindex) {
		var poss = Array();
		var triangle = this.triangles[tindex];
		var n0 = this.nodes[triangle.n0];
		var n1 = this.nodes[triangle.n1];
		var n2 = this.nodes[triangle.n2];
		var u = NaN;
		u = strictIntersection(n0, n1, pA, pB);
		if(!isNaN(u))
			poss.push(new TPPos(tindex, u, 0));
		u = strictIntersection(n1, n2, pA, pB);
		if(!isNaN(u))
			poss.push(new TPPos(tindex, 1, u));
		u = strictIntersection(n0, n2, pA, pB);
		if(!isNaN(u))
			poss.push(new TPPos(tindex, u, u));
		return poss;
	}

	distComparator(tp, pt) {
		return function(posA, posB) {
			var pA = tp.getPointFromPos(posA);
			var pB = tp.getPointFromPos(posB);
			return getSquareDist(pt, pA) - getSquareDist(pt, pB);
		}
	}

	removeDuplicatesFromPosArray(poss) {
		var pindex = 0;
		var posA, posB;
		var pA, pB;
		while(true) {
			posA = poss[pindex];
			if(posA == undefined)
				break;
			pA = this.getPointFromPos(posA);
			pindex++;
			while(true) {
				posB = poss[pindex];
				if(posB == undefined)
					break;
				pB = this.getPointFromPos(posB);
				if(!comparePointsEpsilon(pA, pB))
					break;
				poss.splice(pindex, 1);
			}
		}
	}
	
	getAllIntersections(pA, pB) {
		var poss = Array();
		var length = this.triangles.length;
		for(var tindex = 0; tindex < length; tindex++) {
			if(!this.triangles[tindex].active) continue;
			poss = poss.concat(this.getAllTriangleIntersections(pA, pB, tindex));
		}
		poss.sort(this.distComparator(this, pA));
		this.removeDuplicatesFromPosArray(poss);
		return poss;
	}

} // class TPath

  ////////////////////////
 // Helper for TPRoute //
////////////////////////

// Extra Information per node.
class TPRouteNode {
	constructor() {
		this.dist = NaN; // Distance to backlink
		this.back = -1; // Backlink (nindex)
	}

	isDefined() { // Defined if the dist is a number
		return !isNaN(this.dist);
	}

	linksToGoal() { // If a node links to the goal it's dist is always a minimum (because it's the distance as a crow flies)
		return (this.isDefined() && this.back == -1);
	}
}

/*
// Extra Information per triangle.
class TPRouteTriangle {
	constructor() {
		this.minDist = NaN; // The minimal distance of any (?) point within the triangle the startPos. If NaN then not yet inspected.
	}
}*/

  ///////////////////
 // class TPRoute //
///////////////////

// Necessary to calculate a route in the pathway fo TPath from one position (start) to another (goal)
class TPRoute {

	constructor(tpath) {
		this.tpath = tpath;
		this.goalPos = undefined;
		this.startPos = undefined;
		this.goalRN = undefined;
		this.nArr = Array();
		this.resetNArr();
		//this.tArr = Array();
		//this.resetTArr();
	}

	resetNArr() {
		this.nArr.length = 0; // Delete all items
		this.nArr.length = this.tpath.nodes.length;
		var length = this.nArr.length;
		for(var nindex = 0; nindex < length; nindex++) {
			this.nArr[nindex] = new TPRouteNode();
		}
	}

	/*
	resetTArr() {
		this.tArr.length = 0; // Delete all items
		this.tArr.length = this.tpath.triangles.length;
		var length = this.tArr.length;
		for(var tindex = 0; tindex < length; tindex++) {
			this.tArr[tindex] = new TPRouteTriangle();
		}
	}*/

	nodeToString(nindex) {
		var nx = this.nArr[nindex];
		return "dist: "+ nx.dist +", back: "+ nx.back;
	}

	nodeToStringPerIndex(nindex) {
		var node = this.tpath.nodes[nindex];
		return nindex + ": " + this.tpath.nodeToString(node) +" - "+ this.nodeToString(nindex);
	}

	traceNodePerIndex(nindex) {
		trace(this.nodeToStringPerIndex(nindex));
	}

	traceNodes() {
		var length = this.tpath.nodes.length;
		trace("Nodes: "+ length +"\n");
		for(var nindex = 0; nindex < length; nindex++) {
			this.traceNodePerIndex(nindex);
		}
	}

	propagateHelper(posB, nindexL) {
		var res; // Result from call to isInArea
		var pL; // Point corresponding to posB
		var posL; // Position corresponding to nindexL
		var nxL; // Extra data (dist and back) for nindexL
		while(true) { // Go down the chain of backlinks
			nxL = this.nArr[nindexL];
			if(nxL.back == -1)
				posL = this.startPos;
			else
				posL = this.tpath.getPosOfNode(nxL.back);
			res = this.tpath.isInArea(posB, posL);
			if(!res)
				break;
			nindexL = nxL.back;
			if(nindexL == -1)
				break;
		}
		var back = nindexL;
		if(res) // posB and posL are connected by a straight line
			pL = this.tpath.getPointFromPos(posL);
		else
			pL = this.tpath.nodes[nindexL];
		var pB = this.tpath.getPointFromPos(posB);
		nxL = this.nArr[nindexL];
	// Calculation of distance:
		var dist = 0;
		if(nxL != undefined)
			dist = nxL.dist;
		dist += getDist(pL, pB);
		var nx = new TPRouteNode();
		nx.dist = dist;
		nx.back = nindexL;
		return nx;
	}

	propagateFromNode(nindexA, maxdepth = 1) {
		if(!maxdepth) return;
		var nodeA = this.tpath.nodes[nindexA];
		var nxA = this.nArr[nindexA];
		var nArray = this.tpath.getAdjacentNodes(nindexA);
		var length = nArray.length;
		for(var aindex = 0; aindex < length; aindex++) { // Inspect all adjacent nodes
			var nindexB = nArray[aindex];
			var nxB = this.nArr[nindexB];
			//trace("  "+ nindexA +"->"+ nindexB);
			// Abort propagation before calculation of the distance?
				if(nxB.linksToGoal()) continue; // The node B links back to startPos. This is the shortest distance possible.
				if(nxB.back == nindexA) continue; // The node B links back to the originating node A.
			// Follow backlinks down (L is for Link):
				var posB = this.tpath.getPosOfNode(nindexB);
				var nindexL = nindexA;
				var nx = this.propagateHelper(posB, nindexL);
				nindexL = nx.back;
				var dist = nx.dist;
			// Abort propagation after calculation of the distance?
				if(!isNaN(nxB.dist) && dist >= nxB.dist) continue;
			// Set values:
				nxB.back = nindexL;
				nxB.dist = dist;
			// Propagate:
				this.propagateFromNode(nindexB, maxdepth-1); // Depth first
		}
	}

	
	propagateNode(nindexA, newnodes) {
		var nodeA = this.tpath.nodes[nindexA];
		var nxA = this.nArr[nindexA];
		var nArray = this.tpath.getAdjacentNodes(nindexA);
		var length = nArray.length;
		for(var aindex = 0; aindex < length; aindex++) { // Inspect all adjacent nodes
			var nindexB = nArray[aindex];
			var nxB = this.nArr[nindexB];
			//trace("  "+ nindexA +"->"+ nindexB);
			// Abort propagation before calculation of the distance?
				if(nxB.linksToGoal()) continue; // The node B links back to startPos. This is the shortest distance possible.
				if(nxB.back == nindexA) continue; // The node B links back to the originating node A.
			// Follow backlinks down (L is for Link):
				var posB = this.tpath.getPosOfNode(nindexB);
				var nindexL = nindexA;
				var nx = this.propagateHelper(posB, nindexL);
				nindexL = nx.back;
				var dist = nx.dist;
			// Abort propagation after calculation of the distance?
				if(!isNaN(nxB.dist) && dist >= nxB.dist) continue;
			// Set values:
				nxB.back = nindexL;
				nxB.dist = dist;
			// New node (propagate later)
				if(newnodes.indexOf(nindexB)==-1)
					newnodes.push(nindexB);
				//this.propagateFromNode(nindexB, maxdepth-1); // Depth first
		}
	}

	// Breadth-first propagation
	// 
	propagateNodes(nodes, maxindex = 1) {
		if(!maxindex) return;
		var length = nodes.length;
		if(!length) return;
		var newnodes = new Array();
		for(var index = 0; index < length; index++) {
			var nindex = nodes[index];
			this.propagateNode(nindex, newnodes);
		}
		//trace("new nodes: "+ newnodes.join(", "));
		this.propagateNodes(newnodes, maxindex-1);
	}

	/*
	// Set pos as start pos.
	// Set dists and backlink for the three nodes.
	// Propagate.
	startPropagationOld(pos, maxdepth = 9999) {
		if(!maxdepth) return;
		this.startPos = pos;
		var p = this.tpath.getPointFromPos(pos);
		var triangle = this.tpath.triangles[pos.tindex];
		var n0 = this.tpath.nodes[triangle.n0];
		var n1 = this.tpath.nodes[triangle.n1];
		var n2 = this.tpath.nodes[triangle.n2];
		var nx;
		nx = this.nArr[triangle.n0];
		nx.dist = getDist(p, n0);
		nx.back = -1;
		nx = this.nArr[triangle.n1];
		nx.dist = getDist(p, n1);
		nx.back = -1;
		nx = this.nArr[triangle.n2];
		nx.dist = getDist(p, n2);
		nx.back = -1;
		this.propagateFromNode(triangle.n0, maxdepth-1);
		this.propagateFromNode(triangle.n1, maxdepth-1);
		this.propagateFromNode(triangle.n2, maxdepth-1);
	}
	*/

	// Set pos as start pos.
	// Set dists and backlink for the three nodes.
	// Propagate.
	startPropagation(pos, maxdepth = 999) {
		if(!maxdepth) return;
		this.startPos = pos;
		var p = this.tpath.getPointFromPos(pos);
		var triangle = this.tpath.triangles[pos.tindex];
		var n0 = this.tpath.nodes[triangle.n0];
		var n1 = this.tpath.nodes[triangle.n1];
		var n2 = this.tpath.nodes[triangle.n2];
		var nx;
		nx = this.nArr[triangle.n0];
		nx.dist = getDist(p, n0);
		nx.back = -1;
		nx = this.nArr[triangle.n1];
		nx.dist = getDist(p, n1);
		nx.back = -1;
		nx = this.nArr[triangle.n2];
		nx.dist = getDist(p, n2);
		nx.back = -1;
		/*
		this.propagateFromNode(triangle.n0, maxdepth-1);
		this.propagateFromNode(triangle.n1, maxdepth-1);
		this.propagateFromNode(triangle.n2, maxdepth-1);
		*/
		this.propagateNodes([triangle.n0, triangle.n1, triangle.n2], maxdepth-1);
	}

	/*
	endPropagationOld(pos) {
		this.goalPos = pos;
		var triangle = this.tpath.triangles[pos.tindex];
		var goalTRN;
		goalTRN = this.propagateHelper(pos, triangle.n0);
		this.goalRN = goalTRN;
		goalTRN = this.propagateHelper(pos, triangle.n1);
		if(isNaN(this.goalRN.dist) || goalTRN < this.goalRN.dist) {
			this.goalRN = goalTRN;
		}
		goalTRN = this.propagateHelper(pos, triangle.n2);
		if(isNaN(this.goalRN.dist) || goalTRN < this.goalRN.dist) {
			this.goalRN = goalTRN;
		}
	}
	*/

	endPropagation(pos) {
		this.goalPos = pos;
		var triangle = this.tpath.triangles[pos.tindex];
		var goalTRN;
		this.goalRN = new TPRouteNode();
		goalTRN = this.propagateHelper(pos, triangle.n0);
		this.goalRN.back = goalTRN.back;
		this.goalRN.dist = goalTRN.dist;
		goalTRN = this.propagateHelper(pos, triangle.n1);
		if(isNaN(this.goalRN.dist) || goalTRN.dist < this.goalRN.dist) {
			this.goalRN.back = goalTRN.back;
			this.goalRN.dist = goalTRN.dist;
		}
		goalTRN = this.propagateHelper(pos, triangle.n2);
		if(isNaN(this.goalRN.dist) || goalTRN.dist < this.goalRN.dist) {
			this.goalRN.back = goalTRN.back;
			this.goalRN.dist = goalTRN.dist;
		}
	}

	drawBacklinkIndex(nindex, color, mc) {
		var h = this.tpath.nodes[nindex];
		var nx = this.nArr[nindex];
		var p = new Point(h.x + 13, h.y - 5);
		if(nx.isDefined())
			drawTextField(p, nx.back, color, mc);
	}

	drawBacklinkIndexes(color="purple", mc) {
		var length = this.tpath.nodes.length;
		for(var nindex = 0; nindex < length; nindex++) {
			this.drawBacklinkIndex(nindex, color, mc);
		}
	}

	drawBacklinkLine(nindex, color, mc) {
		var pA = this.tpath.nodes[nindex];
		var nx = this.nArr[nindex];
		if(!nx.isDefined()) return;
		var pB;
		if(nx.back == -1) { // startPos
			pB = this.tpath.getPointFromPos(this.startPos);
		} else { // Backlinked node
			pB = this.tpath.nodes[nx.back];
		}
		drawLine(pA, pB, color, mc);
	}

	drawBacklinkLines(color="pink", mc) {
		var length = this.tpath.nodes.length;
		for(var nindex = 0; nindex < length; nindex++) {
			this.drawBacklinkLine(nindex, color, mc);
		}
	}

	drawBacklinks(color0="pink", color1="purple", mc) {
		this.drawBacklinkLines(color0, mc);
		this.drawBacklinkIndexes(color1, mc);
	}

	drawGoalBacklinkLine(color="red", mc) {
		if(this.goalRN == undefined && this.goalPos == undefined)
			return;
		var pg = this.tpath.getPointFromPos(this.goalPos);
		var ps;
		if(this.goalRN.back == -1)
			ps = this.tpath.getPointFromPos(this.startPos);
		else
			ps = this.tpath.nodes[this.goalRN.back];
		drawLine(ps, pg, color, mc);
	}

	drawStartAndGoal(color="red", mc) {
		if(this.goalPos != undefined) {
			var goalP = this.tpath.getPointFromPos(this.goalPos);
			drawX(goalP, color, mc);
		}
		if(this.startPos != undefined) {
			var startP = this.tpath.getPointFromPos(this.startPos);
			drawX(startP, color, mc);
		}
	}

	drawRoute(color="red", mc) {
		if(this.goalPos == undefined || this.startPos == undefined || isNaN(this.goalRN.dist))
			return;
		//var startP = this.tpath.getPointFromPos(this.startPos);
		//var goalP = this.tpath.getPointFromPos(this.goalPos);
		var posA = this.goalPos;
		var posB;
		var pA = this.tpath.getPointFromPos(posA);
		var pB;
		var back = this.goalRN.back;
		while(back != -1) {
			pB = this.tpath.nodes[back];
			//pB = this.tpath.getPointFromPos(posB);
			drawLine(pA, pB, color, mc);
			var nx = this.nArr[back];
			back = nx.back;
			pA = pB;
		}
		posB = this.startPos;
		pB = this.tpath.getPointFromPos(posB);
		drawLine(pA, pB, color, mc);
	}

	// Returns an array of positions TPPos from start to goal.
	// Returns an empty array if goal can't be reached from starting position.
	getFullRoute() {
		var poss = Array();
		if(this.goalPos == undefined || this.startPos == undefined || isNaN(this.goalRN.dist))
			return poss;
		var posA = this.goalPos;
		poss.push(posA);
		var posB;
		var pA = this.tpath.getPointFromPos(posA);
		var pB;
		var back = this.goalRN.back;
		while(back != -1) {
			pB = this.tpath.nodes[back];
			poss = poss.concat(tp.getAllIntersections(pA, pB));
			var nx = this.nArr[back];
			back = nx.back;
			pA = pB;
		}
		posB = this.startPos;
		pB = this.tpath.getPointFromPos(posB);
		poss = poss.concat(tp.getAllIntersections(pA, pB));
		poss.push(posB);
		tp.removeDuplicatesFromPosArray(poss);
		return poss;
	}

} // class TPRoute
