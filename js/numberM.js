// let marks = 12;
// let str = marks.toString();
// console.log(str);
// console.log(marks);

// console.log(typeof str);

// let num1 = 2;
// let num2 = 3;

// console.log(num1.toExponential(num2));

const x = 29.156;
// toFixed - converts a decimal number with specified number of digits after the decimal
// whatever value you are passing in the argument that many number of digits will be there after decimal
// ranges from 0 to 100
// original value is not changed
// negative number is not allowed
// console.log(x.toFixed(1));
// console.log(x);

// toPrecision()
// whatever value you are passing in the argument that many number of total digits will be there in the number
// if you don't pass anything then the whole value will be available
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(3));

let str = "abc";
// convert a string number to number
console.log(Number(str));
