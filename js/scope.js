// == vs ===

let x = "123";
let y = 123;

// NOTE:
// == (double equal to) """ it checks the content only and not type
// === checks the content as well as the type

// 123 but one is number and other is string
// if (x === y) {
//   console.log("both are same");
// } else {
//   console.log("both are not same");
// }

// if (x == y && typeof x == typeof y) {
//   console.log("both are same");
// } else {
//   console.log("both are not same");
// }

/////////////////////////////////
// There are 3 diff types of scopes in JS
// 1. Block Scope

// let and const have a block scope =>
// where ever block they are defined they can be accessed over there only
// outside the block the variables defined with let and const are not accessible
// if (true) {
//   var myName = "Tom";
//   let myRoll = 12;
//   console.log(myName);
//   console.log(myRoll);
// }
// console.log(myName);
// console.log(myRoll);

// 2. Function Scope/ local scope
// In a function scope when you define a variable whether using var/ let / const they wont be accessible outside
// the function
// function sayMyName() {
//   var myName = "Jerry";
//   console.log(myName);
// }

// sayMyName();
// // console.log(myName);
// console.log(myName);

let obj = {
  name: "tom",
  sayMyName: function () {
    console.log("my name is tom");
  },
};

// 3. Global Scope
let globalNumber = 123;

function sayMyMarks() {
  console.log(globalNumber);
}

sayMyMarks();

// sayMyName();
