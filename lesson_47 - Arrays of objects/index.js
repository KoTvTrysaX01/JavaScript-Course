const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}
]
console.log(fruits[3].calories)

fruits.push({name: "grapes", color: "purple", calories: "62"})
console.log(fruits)

fruits.pop();
console.log(fruits)


// fruits.splice(1, 2);
// console.log(fruits)


fruits.forEach(fruit => console.log(fruit.calories))


const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);


const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits)

const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCaloriesFruits)

const highCaloriesFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(highCaloriesFruits)


const maxFruit = fruits.reduce((accumulator, element) => element.calories > accumulator.calories ? element : accumulator)
console.log(maxFruit);

const minFruit = fruits.reduce((accumulator, element) => element.calories < accumulator.calories ? element : accumulator)
console.log(minFruit);