let myStr = "  our country is India ";

// String methods

// length ::: gives the length of the string
console.log(myStr.length);

// toUpperCase - converts the string to uppercase
console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());

// trim - removes the spaces from before and after the string
console.log(myStr.trim().length);

// concat  - adds / joins the string
let str1 = "India is our country";
let str2 = "is our country";

console.log(str1.concat(str2));

console.log(str1[0]);

// cahrAt ::: provides the character present at the provided index
console.log(str1.charAt(0));
console.log(str1.charCodeAt(4));

// split -  a string can be converted to an array
// .split() => takes the whole string and puts in the index 0 of the array
// .split("") => split the string based on each character
const strList = str1.split();
const strList1 = str1.split(" ");
console.log(strList1);
///////////////////////////////////////////////////////////////////////////////////
// 10 Jan 2525
// extracting methods
// slice and substring
let text = "0123456789abcdef";
let fruits = "Apple, banana, kiwi";
// slice(startIndex, endIndex); =>
// Note: endIndex is not considered
// 1st character of the string is in index 0
// slice takes negative numbers also
let part = fruits.slice(-12, -6);
console.log("...");
console.log(part);

// substring(startIndex, endIndex)
// let part1 = text.substring(0, 2);
// console.log(part1);
// console.log(text);
