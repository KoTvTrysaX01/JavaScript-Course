// (parameters) => some code


function hello(){
    console.log("Hello!");
}

hello();


const hello1 = function(){
    console.log("Hello!1");
}

hello1();

const hello2 = (name, age) => {console.log(`Hello ${name}!`);
                          console.log(`You are ${age} years old`);};

hello2("Vadim", 23);


setTimeout(() => console.log("Hello!"), 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2))
console.log(squares);

const cubes = numbers.map((element) => Math.pow(element, 3))
console.log(cubes);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(total);