// this is a keyword
// I have a pen. The pen is red in color. The pen is very costly. The pen was gifted by my dad. the pen is the best pen.
// I have a pen. The pen is red in color. This pen is very costly. The pen was gifted by my dad. the pen is the best pen.

"use strict";

// 1.
var abc = "abc";
console.log(this);
// this points to window object when used globally (behaves same in strict and non strict mode)
// console.log(this);

// 2.
// In non  strict mode this points to the window object
// In Strict mode this is undefined
function myName() {
  console.log(this);
}

// myName();
// 3
// Inside a method this points to the object itself. In this case this points to obj
// behaves same in both the modes
const obj = {
  firstName: "Tom",
  lastName: "Cat",
  sayMyName: function () {
    console.log(this);
  },
};
// console.log(obj);
// obj.sayMyName();

// 4
// ***arrow method*** (arrow function defined inside an object)  - this points to ***window*** in ***NON STRICT and STRICT*** mode
const mouse = {
  firstName: "Jerry",
  lastName: "Mouse",
  sayMyName: () => {
    console.log(this);
  },
};

// mouse.sayMyName();

// 5. Events

// 6. Normal arrow function always points to WINDOW object (strict and non strict mode)
function myName() {
  console.log(this);
}
const arrowFn = () => {
  console.log(this);
};
// myName();
// arrowFn();

// let abc1 = "abc1";

// console.log(this);

// after some time you need to perform some activity
// setTimeout is called after the defined time (ms) JUST ONCE
setTimeout(() => {
  console.log("called after 5s");
}, 5000);

// this is called after every predefined time
// setInterval(() => {
//   console.log("called every 5s");
// }, 5000);

// add(5,6)
// setTimeout();

const arr = () => {
  console.log("called after 5s");
};

// NOTE:
// setTimeout is called / executed immediately
// The function which is passed will be executed after 5s
// the ***CALLBACK function*** is called after 5s
setTimeout(arr, 5000);
console.log(this);
