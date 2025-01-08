// array is a collection of different types

// syntax is square bracket
// const arr = [];

// // assign values in array

// function testFunc() {}

// const arr1 = [12, 5, 8, "India", true, testFunc, undefined];

// console.log(arr1);

// length of the array is 6
// length => how many items are present in the array

// array is 0 index based

// console.log(arr1[0]);
// console.log(arr1[2]);
// console.log(arr1[7]);
// console.log(arr1[6]);

// arr1[1] = "Bangalore";

// console.log(arr1);

// // array property
// // get the length of the array
// console.log(arr1.length);

// [12, 5, 8, "India", true, testFunc, undefined];
// array methods
// add item at the end of the array
// push
// arr1.push("new item");
// console.log(arr1);

// // remove item from the end
// // pop
// const removedItem = arr1.pop();
// console.log(arr1);
// console.log(removedItem);

// // add item at the beginning of the array
// // unshift
// arr1.unshift("WORLD");
// console.log(arr1);

// // remove item from the beginning of the array
// // shift
// const removedItemFromBeginning = arr1.shift();
// console.log(arr1);
// console.log(removedItemFromBeginning);

//
let arr2 = [1, 2, 3];
let arr3 = [4, 5, 6];

// concat
// original arrays are not modified
// a new array is created
// concat returns the new array
// const concatenatedArray = arr2.concat(arr3);
// console.log(arr2);
// console.log(arr3);
// console.log(concatenatedArray);

// // flatten array
// const myArr = [[1, 2]];
// console.log(myArr);
// const flattenedArray = myArr.flat();
// console.log(flattenedArray);

// loops
// for, while, do-while
// for-each, map
const arr = [12, 5, 8, "India", true, undefined];
// in for loop there are 3 sections
// section 1 : initialize a counter variable
// section 2: a condition check
// section 3: increment
// for (let i = 0; i < arr.length; i++) {

// step 1: counter variable is initialize to 0
// step 2: counter value is checked with the condition provided => if it becomes a true value then the loop body will execute; else it will exit
// step 3: if the condition check is true; then loop body will execute and the section 3 (increment) will be executed
// step 4: condition check/ section 2 will be checked
// step 5: if step 4 is true loop body will execute else it will come out/ break

// for (let i = 0; i < 6; i++) {
//   console.log(arr[i]);
// }

// let i = 0;
// while (i < 6) {
//   console.log(arr[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(arr[i]);
// } while (i < 6);
