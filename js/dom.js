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
// debugger;
// const para = document.createElement("p");
// const node = document.createTextNode("This is a very new para!");
// para.appendChild(node);

// const myDiv = document.getElementById("container");
// myDiv.appendChild(para);

// https://nodejs.org/en/download

setTimeout(() => {
  // call removeElement function
  //   removeElement();
  //   addInlineStyle();
  //   addExternalClass();
  //   removeExternalClass();
}, 5000);

// Remove an element
function removeElement() {
  document.getElementById("p2").remove();
}

function addInlineStyle() {
  document.getElementById("p2").style.color = "red";
  document.getElementById("p2").style.fontSize = "20px";
}

// try to remove the inline styling

function addExternalClass() {
  document.getElementById("p2").classList.add("highlight", "add-bg");
}

function removeExternalClass() {
  document.getElementById("p2").classList.remove("highlight1");
}

function submitButtonClicked() {
  alert("Button Clicked");
}

// const btn = document.getElementById("p2");

// btn.addEventListener("click", () => {
//   alert("Event added!");
// });
// debugger;

function getFormData() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value ||
    "Not selected";
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  const favColor = document.getElementById("favColor").value;

  // Get checked checkboxes using a for loop
  let hobbies = "";
  const hobbyElements = document.querySelectorAll(
    'input[name="hobby"]:checked'
  );
  for (let i = 0; i < hobbyElements.length; i++) {
    hobbies += hobbyElements[i].value;
    if (i < hobbyElements.length - 1) {
      hobbies += ", "; // Add comma only if it's not the last item
    }
  }
  hobbies = hobbies || "None"; // If no checkboxes are selected

  alert(
    `Name: ${name}\nAge: ${age}\nGender: ${gender}\nHobbies: ${hobbies}\nCountry: ${country}\nEmail: ${email}\nFavorite Color: ${favColor}`
  );
}

function getFormData1() {
  const form = document.forms["myForm"]; // Get form by ID
  const username = form["username"].value; // Get value using name attribute
  const age = form["age"].value; // Get number input value

  alert(`Username: ${username}\nAge: ${age}`);
}

// pass by val && pass by ref
// pass by value
// let a = 1;
// let b;
// b = a;
// console.log(b);
// b = 5;
// console.log(b);
// console.log(a);

// pass by reference
let obj1 = {
  a: 1,
};

let obj2;

console.log(obj1);
console.log(obj2);

obj2 = obj1;

obj2.a = 99;

console.log("obj1");
console.log(obj1);
console.log("---------------");
console.log("obj2");
console.log(obj2);
