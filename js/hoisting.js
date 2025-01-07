console.log("name is ", myName); // usage of the variable
var myName = "Ajay";
console.log("name is ", myName); // usage of the variable

// JS engine does 2 passes while executing the code

// In 1st pass:::
// JS engine will collect all the variable names that is declared using ***var*** keyword
// and functions declared using keyword ***function***

// pass 2:::
// start executing the script file

var myAddress;

let myRoll;

myAddress = "Blr";

// I am JS engine

// pass1 :: myName = undefined, myAddress = undefined... [JS MEMORY]
// pass2 ::  myName = 'Ajay' [line 2], myAddress = 'Blr'

// HOISTING::: JS
