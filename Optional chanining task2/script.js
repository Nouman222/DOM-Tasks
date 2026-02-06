// Task 1: User Profile Viewer (Optional Chaining + Nullish) 
// Scenario: 
// You get user data from an API, but some fields may be missing. 
// const user = { 
// name: "Alex", 
// address: { 
// city: "Berlin" 
// } 
// }; 
// Requirements: 
//  Display the user’s: 
// o name 
// o city 
// o phone number (if not available, show "Not provided") 
//  Use optional chaining to safely access nested properties 
//  Use nullish coalescing to set default values 
// Expected Output: 
// Name: Alex 
// City: Berlin 
// Phone: Not provided

const user = { 
  name: "Alex", 
  address: { 
    city: "Berlin" 
  } 
};
console.log("TAsk 1");

console.log(`Name: ${user.name}`);
console.log(`City: ${user.address?.city ?? "Unknown"}`);
console.log(`Phone: ${user.contact?.phone ?? "Not provided"}`);

// Task 2: Login Status Message (Ternary Operator) 
// Scenario: 
// You receive a boolean isLoggedIn. 
// const isLoggedIn = false; 
// Requirements: 
//  Show: 
// o "Welcome back!" if logged in 
// o "Please log in" if not 
//  Must use the ternary operator 
// Bonus: 
// Add another variable isAdmin and display: 
//  "Welcome Admin" if admin 
//  "Welcome User" otherwise

const isLoggedIn = false; 
let login = isLoggedIn ? "Welcome Back!":"Please log in"
console.log("Task 2");

console.log(login)

// Task 3: Product Price Checker (Nullish vs OR) 
// Scenario: 
// Some products may have a price of 0. 
// const product = { 
// name: "Notebook", 
// price: 0 
// }; 
// Requirements: 
//  Display the product price 
//  If price is null or undefined, show "Price not available" 
//  Do NOT replace 0 with the default value 
//  Use nullish coalescing 
// Goal: 
// Help them understand why ?? is better than || here.

const product = { 
  name: "Notebook", 
  price: null 
};
const displayPrice = product.price ?? "Price not available";
console.log("Task 3");
console.log(`Product: ${product.name}`);
console.log(`Price: ${displayPrice}`); 

// Task 4: Fake API Call (Promises) 
// Scenario: 
// Create a function that fetches user data after 2 seconds. 
// function fetchUser() { 
// return new Promise((resolve, reject) => { 
// setTimeout(() => { 
// resolve({ name: "Sam", age: 22 }); 
// }, 2000); 
// }); 
// } 
// Requirements: 
//  Call the function 
//  Print: 
// o "Loading..." first 
// o Then the user’s name when resolved 
//  Handle errors using .catch()

function fetchUser() { 
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve({ name: "Sam", age: 22 }); 
    }, 2000); 
  }); 
}
console.log("Task 4");
console.log("Loading...");
fetchUser()
  .then((user) => {
    console.log(`User Name: ${user.name}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


//   Task 5: Promise with Condition (Resolve or Reject) 
// Goal: Understand resolve vs reject. 
// const hasMoney = true; 
// Task: 
//  Create a Promise buyCoffee 
//  If hasMoney is true, resolve with "Coffee bought ☕" 
//  Otherwise reject with "Not enough money ❌" 
//  Handle both success and error using .then() and .catch()

const hasMoney = true;
const buyCoffee = new Promise((resolve, reject) => {
  if (hasMoney) {
    resolve("Coffee bought");
  } else {
    reject("Not enough money");
  }
});
console.log("Task 5");

buyCoffee
  .then((message) => {
    console.log(message); 
  })
  .catch((error) => {
    console.log(error);
  });




