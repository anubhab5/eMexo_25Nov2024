const PI = 3.14;

// let radius = 10;
// console.log(2 * PI * radius);
// console.log(2 * PI * radius);
// console.log(2 * PI * radius);

// let radius1 = 11;
// console.log(2 * PI * radius1);

// syntax
// function <FUNCTION_NAME>() {//}

// function getCircumference() {
// let radius = 10;
//   console.log(2 * PI * radius);
// }

// here radius is called the parameter of the function
// radius is a variable
// function getCircumference(radius) {
//   console.log(2 * PI * radius);
// }

function getCircumference(radius) {
  // in order to return a value from a function we use the keyword return
  return 2 * PI * radius; // 20
}

// when ever the function is called and the value passed with in the argument round bracket
// will go and sit in the parameter variable of the function
let circum = getCircumference(10);
console.log(circum);
// getCircumference(11);
// getCircumference(12);

// function call
console.log(getAreaOfRectangle(10, 11)); // val got printed

// Function definition
function getAreaOfRectangle(length, breadth) {
  // in order to return a value from a function we use the keyword return
  return length * breadth;
}

// anonymous functions
// function with no name
// how to call the function? ===> the function should be assigned to a variable
// variable should be used along with round bracket ()

console.log("hiiiii");
var getPerimeterOfRectangle = function (length, breadth) {
  console.log(2 * (length + breadth));
};

// getPerimeterOfRectangle(10, 10);
// getPerimeterOfRectangle(10, 10);

// pass_1 :: getAreaOfRectangle [FN], getPerimeterOfRectangle = undefined [variable]

// pass_2 :: getPerimeterOfRectangle =  FN

// ES6 ::: new way to define a function => arrow function/ fat arrow function
// main intention is simplification
const getMyName = (myName) => {
  console.log("my name is ", myName);
};
getMyName("Tom");

////
const add = (myFunc) => {
  myFunc();
};

function testMe() {
  console.log("Test me is called");
}

add(testMe);
