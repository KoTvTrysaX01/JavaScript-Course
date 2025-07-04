let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(maximum);
console.log(minimum);
console.log(numbers);


let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);


let fruits = ["apple", "orange", "banana"];

let vegetables = ["carrot", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);