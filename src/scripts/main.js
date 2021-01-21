// Imports go first
import { testPerson } from "./TestFacility.js"

// Create and test 5 people at the testing facility
let doug = testPerson("Doug", 25, 99);
console.log(doug)

// Diagnose each person at the clinic
// doug = diagnose();

// Invoke the component function that returns the HTML string of patients and add it to the DOM
