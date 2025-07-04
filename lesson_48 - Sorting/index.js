let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();

console.log(fruits);

let numbers = [3, 5, 2, 3, 4, 1, 10, 11];
numbers.sort();

console.log(numbers);

numbers.sort((a, b) => a - b)

console.log(numbers);

numbers.sort((a, b) => b - a)

console.log(numbers);


const people = [{name: "ASpongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 34, gpa: 1.5},
                {name: "BSquidward", age: 40, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}
]

people.sort((a, b) => a.age - b.age);
console.log(people);


people.sort((a, b) => b.gpa - a.gpa);
console.log(people);


people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);