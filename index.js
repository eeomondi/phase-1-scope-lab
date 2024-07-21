// Declare a variable in global scope called customerName using the var keyword
var customerName = 'bob';

// Write a function that accesses that global customerName variable, and uppercases it
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
  var bestCustomer = 'not bob';
}

// Write a function that changes that bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'alice';

// Write a function that attempts to change that constant
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'charlie'; // This will throw an error
}

// Test the functions
console.log(upperCaseCustomerName()); // Output: BOB
setBestCustomer();
console.log(bestCustomer); // Output: maybe bob (after calling overwriteBestCustomer())
changeLeastFavoriteCustomer(); // Error: Assignment to constant variable.