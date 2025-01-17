// Installing typescript
// npm i typescript => install typescript
// tsc -v => gives the version of the typescript installed
// Extension *.ts

// Features of Typescript
// 1. Type Safety
let myRoll: number;
let ourCountry: string;
let isPassed: boolean;

isPassed = true;

// 2. Interface

interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "Tom",
  age: 12,
};

// 3. Class

class Person {
  age: number;

  firstName: string;

  lastName: string;

  sayMyName() {}
}

const person1 = new Person();
const person2 = new Person();
person2.sayMyName();
console.log(person1);

// 4.  Enums
enum Role {
  Admin,
  User,
  Guest,
  CEO,
}

let myRole: Role = Role.CEO;

// 5. Union and Intersection

let val: string | number;

val = " India";
val = 12;

interface Employee {
  empId: number;
}

interface Manager {
  dept: string;
}

const boss: Employee & Manager = {
  empId: 12,
  dept: "HR",
};

// 6. Type inference
let country = "";

// Modules
import { greet } from "./index";
console.log(greet());

// Default value
// function sum(number1: number = 10, number2: number ) {}

// Optional
// 1st the required params will come then the optional
// all params can also be optional in nature
function sum(number1: number, number2?: number) {}

function fullName(firstName: string, lastName: string, middleName?: string) {}

sum(12, 21);

sum(12);

// decorator
