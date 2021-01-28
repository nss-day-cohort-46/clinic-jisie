// Imports go first
import { diagnose } from "./Clinic.js";
import { testPerson } from "./TestFacility.js"

// Create and test 5 people at the testing facility
let doug = testPerson("Doug", 25, 99);
let bob = testPerson("Bob", 26, 100);
let lisa = testPerson("Lisa", 27, 101);
let sally = testPerson("Sally", 28, 102);
let martin = testPerson("Martin", 29, 103);
// console.log(doug)

// Diagnose each person at the clinic
doug = diagnose(doug,3)
console.log(doug)

// Invoke the component function that returns the HTML string of patients and add it to the DOM
