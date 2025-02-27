import { 
    add,
    subtract, 
    multiply, 
    divide 
} 
from "./mathUtils.ts";

import { 
    createUser, 
    getUserById 
} 
from "./userService.ts";


console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));

try {
    console.log("Division:", divide(10, 2));
} catch (error) {
    console.error(error);
}


createUser(1, "Darth", "Darth@vader.com");
createUser(2, "Pratham", "Pratham@talupuri.com");

const user = getUserById(1);
if (user) {
    console.log(`User found: ${user.name}, Email: ${user.email}`);
} else {
    console.log("User not found");
}