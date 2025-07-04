let fruits = ["apple", "orange", "banana"];


fruits[2] = "coconut";
//fruits.push("banana");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

let numOfFruits = fruits.length;
let index = fruits.indexOf("orange")


console.log(index);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}

