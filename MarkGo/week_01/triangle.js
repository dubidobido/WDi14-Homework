
// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
var triangle = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
console.log(triangle.sideA)

var typeOfTriangle = function (sideA, sideB, sideC) {
  if (sideA + sideB >= sideC || sideB + sideC >= sideA || sideA + sideC >= sideB){ // see if this can be a triangle
    if (sideA === sideB && sideB === sideC) {
      return console.log("this is an equilateral");
    } else {
      if ( (sideA === sideB) && (sideA !== sideC)) {
          console.log("this is an isosceles triangle");
      } else if ( (sideA === sideC) && (sideA !== sideB) ) {
          console.log("this is an isosceles triangle");
      } else if ( (sideB === sideC) && (sideB !== sideA) ) {
        console.log("this is an isosceles triangle");
      }
    }
  };
};

typeOfTriangle(triangle.sideA, triangle.sideB, triangle.sideC);
