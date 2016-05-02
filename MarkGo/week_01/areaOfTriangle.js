// s = (a + b + c)/ 2
// area = squareroof of (s(s-a)(s-b)(s-c))

var sideA = 5
var sideB = 4
var sideC = 3

var areaOfTriangle = function (a,b,c){
  var s = (a + b + c) /2
  var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
  console.log(area)
}

areaOfTriangle(sideA,sideB,sideC);
