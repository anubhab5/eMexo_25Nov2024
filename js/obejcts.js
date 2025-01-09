// object is a collection of key value pair
// define an object using curly braces

// empty object
let obj = {};

// console.log(obj);

// here name is the key
// Tom is the value of the key
// key is not required/ mandatory to keep in double quotes
// object key is also called a property
obj = {
  name: "Tom",
  country: "India",
  marks: [25, 34, 45],
  fullAddress: {
    houseNumber: 101,
    city: "blr",
  },
  isPassed: true,
  sayMyName: function () {
    console.log("my name is Tom");
  },
};
// when a function is defined inside an object => the function is called a METHOD
// console.log(obj);
// // 2 diff ways you can access a JS object
// console.log(obj.country); // dot operator :::
// console.log(obj["country"]); // :::

// TO DO ::: print the city present in the above object
// console.log(obj.fullAddress.city);
// console.log(obj["fullAddress"]["city"]);

let key = "country";
// console.log(obj[key]); // obj["country"]
// for - in loop
// for (let key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

let arr = [1, 2, 3];

obj.sayMyName();

arr.push(4);

arr.length;

obj.name;

let str = "India";
// typeof operator in JS => which tells us what is the datatype of the variable
console.log(typeof str);

let roll = 12;
console.log(typeof roll);

let isPassed = true;
console.log(typeof isPassed);

console.log(typeof obj);

// array is also an object in JS
console.log(typeof arr);

// ******
// the undefined has a typeof of undefined
let myName;
console.log(typeof myName);

let myRoll = null;
console.log(typeof myRoll);
