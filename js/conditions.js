// conditions
// if, if-else, if else if else, switch

// if
let num = 15;

// if block
if (num > 1) {
  console.log("number is greater than 1");
}
// inside the {} is called a block

// if block and else block
// if (num > 1) {
//   console.log("number is greater than 1");
// } else {
//   console.log("number is less than 1");
// }

// if elseif

// if (num < 5) {
//   console.log("less than 5");
// } else if (num >= 5 && num <= 9) {
//   console.log("between 5 and 9");
// } else if (num >= 5 && num <= 9) {
//   console.log("between 5 and 9");
// } else if (num >= 5 && num <= 9) {
//   console.log("between 5 and 9");
// } else {
// }

let num1 = 5;
let num2 = 11;
let num3 = 9;
// && con1 and cond2
// in and op both/ all conditions should satisfy then the result will be true
// when all conditions needs to be true then use ***AND***
if (num1 == 5 && num2 == 10 && num3 > 100) {
}
// true false false => false
// true true false => false
// true true true => true

// -----------------
// JUST any one condition needs to be true
// Logical OR / OR / ||
// if (num1 == 5 || num2 == 10 || num3 > 100) {
// }
// let result = num1 == 5 || num2 == 10 || num3 > 100;
// console.log(result);
// true true false => true
// true false false => true
// false false false => false
let day = "Saturday";
switch (day) {
  case "Monday":
    console.log("monday");
    break;
  case "Tuesday":
    console.log("tuesday");
    break;
  case "Wednesday":
    console.log("wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It is holiday");
    break;
  default:
    console.log("default val");
}
