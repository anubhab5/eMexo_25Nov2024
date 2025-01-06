// console.log("learning JAVASCRIPT");
// console.log(1 + 4);
// use keyword debugger
// add the breakpoint directly in browser sources tab

/**
 * variables, operators, data types, objects, functions
 */
// variables
// 3 different ways we can define/ declare a variable
// 1. var 2. let 3. const

//  ES6 => ECMASCRIPT 6
// keyword var
// texts should be inside double quotes ""
// here myCountry is the variable name
// India is the value which is stored in the variable/ (container)
/**
 * statement:
 * a computer is a list of instructions
 * these instructions are called statements
 * JS PROGRAM IS A COLLECTION OF STATEMENTS
 */
var myCountry = "India is my country";
// console.log(myCountry);

// In JS typecheck does not happen
myCountry = 12;

// console.log(myCountry);

// let and const were introduced in ES6
// let can be reassigned
// const cannot be reassigned
let myRoll = 12;

myRoll = 21;

const myAadhar = 1234567890;
// myAadhar = 258444;

// ARITHMATIC OPERATOR
// +, -, , *, / , ** (EXPONENTIAL), % (modulus), , ++ increment, -- decrement
let add = 3 + 3;
console.log("add " + add);
let sub = 5 - 3;
console.log("sub " + sub);

let mul = 4 * 5;
console.log("mul " + mul);

let div1 = 10 / 2;
console.log("div1 " + div1);

let div2 = 10 / 3;
console.log("div2 " + div2);

// 3 to the power of 2
let exp = 3 ** 2;
console.log("exp " + exp);

let mod1 = 10 % 2;
console.log("mod1 " + mod1);

let mod2 = 10 % 3;
console.log("mod2 " + mod2);

// inc / dec happens only on variable ----- NOT ON CONSTANT
// postfix
// 2 operation happens

// increment/ decrement can be used in 2 diff ways
// 1. postfix variable++
// 2. prefix ++variable

// postfix
let exampleVariable = 6;
let myVar = exampleVariable; // 6
exampleVariable = exampleVariable + 1; // 7
console.log(myVar);

// 1. assignment
// 2. increment
let inc = add++;
console.log("inc " + inc);
console.log(add);

// prefix => ++ is sitting before the variable
// 1. increment
// 2. assignment
let inc1 = ++add;
console.log("inc " + inc1);
console.log(add);

let exampleVariable1 = 6;
exampleVariable1 = exampleVariable1 + 1; //  7
let myVar1 = exampleVariable;
console.log(myVar1);

// TODO : HW
// -- decrement

// ASSIGNMENT OPERATOR
// =
let myEx = 5;

// =, +=, -=, *=, /=, %=, **=

// +=
let x = 10;
// x = x + 5;
x += 5;

x -= 1;

x *= 2;

x /= 4;

x %= 1;

x **= 3;

console.log("x " + x);

// JAVASCRIPT DATATYPES

// Built in data types
// string, number, boolean, undefined, null, object, :::: (ES6 intr) bigint, symbol

// string
let myCountry1 = "India";

// number
let myMarks = 67;

// boolean
//  values can be either true/ false
let isPassed = true;

// bigint
let bigNumber = BigInt(1234567898552222220020220287666556778888);
console.log(bigNumber);

// derived
