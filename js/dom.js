console.log(this);
// when the html is rendered in the browser the JS engine converts all the HTML elements into nodes/ objects and creates a tree like structure
// 1. change all the elements in the page
// 2. change attributes
// 3. change styling
// 4. add new tags
// 5. add new attributes
// 6. behavior to those elements => events

// user action (is clicking a button)
// who ever responding to that action is called => eventListener (method)

//

// getElementById : returns the element with the id

// console.log(document.getElementById("section"));
// //

// setTimeout(() => {
//   document.getElementById("title").innerHTML = "Learnt the DOM concept";
// }, 3000);

// // getElementsByTagName
// document.getElementsByTagName("p")[1].innerHTML = "CELEBRATED PONGAL!!!!";

// console.log(document.getElementsByClassName("my-demo-class"));

//
// console.log(document.querySelectorAll("p.my-demo-class.test-class"));

// createElement
debugger;
const para = document.createElement("p");
const node = document.createTextNode("This is a very new para!");
para.appendChild(node);

const myDiv = document.getElementById("container");
myDiv.appendChild(para);

//https://nodejs.org/en/download
