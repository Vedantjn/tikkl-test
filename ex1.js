// Basic object manipulations.

// Run this on the terminal window
//  $ node ex1.js

function build_user(name, age, occupation){
  obj = {} // creates a new JS object

  // create properties dynamically
  obj.name = name
  obj.age = age
  obj.occupation = occupation
  
  // returns an initialized user object.
  return obj
}

u1 = build_user("Mary Jane Tyler", 24, "Accountant")
u2 = build_user("Steve King", 22, "Dentist")
u3 = build_user("Preet Minari", 25, "Attorney")

console.log(u1)
console.log(u2)
console.log(u3)

// Note: The program continues below. 
// Each of the excerises should continue updating the object.

// Ex 1.1. Update the name of u0 to "Mary-Jane Tyson"
u1.name = "Mary-Jane Tyson";
// Ex 1.2. Increment the age of u2 by 5.
u2.age += 5;
// Ex 1.3. Use string templates using `` to prefix the u3's occupation with "District"
u3.occupation = `District ${u3.occupation}`;
// Ex 1.4. Build an array that contains all three uers.
var users = [u1, u2, u3];
// Ex 1.5. Iterate the array to print the name and occupation of each user.
users.forEach(function (user) {
    console.log(`${user.name} -> ${user.occupation}`);
})