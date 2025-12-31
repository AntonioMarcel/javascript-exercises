/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

let { birthYear, thisYear } = require("./joinStrings-example");
birthYear = 1994;
thisYear = 2025;

// Add your code right below, good luck!
const firstName = "Xaropinho";
const lastName = "VonBritania";
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;
const greeting =
  "Hello! My name is " + fullName + " and I am " + age + " years old.";
console.log(greeting);

// Do not change this
module.exports = {
  // firstName,
  // lastName,
  // birthYear,
  // thisYear,
  // greeting,
  firstName: typeof firstName === "undefined" ? undefined : firstName,
  lastName: typeof lastName === "undefined" ? undefined : lastName,
  thisYear: typeof thisYear === "undefined" ? undefined : thisYear,
  birthYear: typeof birthYear === "undefined" ? undefined : birthYear,
  greeting: typeof greeting === "undefined" ? undefined : greeting,
  fullName: typeof fullName === "undefined" ? undefined : fullName,
  age: typeof age === "undefined" ? undefined : age,
};
