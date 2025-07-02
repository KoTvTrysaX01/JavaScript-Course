let age = 4;


let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);



let time = 16;

let greeting = time < 12 ? "Good morning" : "Good afternoon";
console.log(greeting);


let isStudent = false;
let message1 = isStudent ? "You are a student" : "You are not a student";
console.log(message1);


let purchaseAmount = 99;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount / 100)}$`)
