// Write your solution in this file!

// Declare a variable in global scope called customerName using the var keyword
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
var bestCustomer;
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function that changes that bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// Write a function that attempts to change that constant
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = 'charlie'; 
  } catch (e) {
    console.error(e);
  }
}

// Test the functions
console.log(customerName); // Output: bob
upperCaseCustomerName();
console.log(customerName); // Output: BOB
setBestCustomer();
console.log(bestCustomer); // Output: not bob
overwriteBestCustomer();
console.log(bestCustomer); // Output: maybe bob
changeLeastFavoriteCustomer(); // Error: Assignment to constant variable.