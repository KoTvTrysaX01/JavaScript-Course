// Function declaration

function hello1(){
    console.log("hello!");
}

const numbers = [1, 2, 3, 4, 5, 6];
//const squares = numbers.map(square);
//console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

// Function expressions

const hello2 = function(){
    console.log("Hello!");
}

hello2();


setTimeout(hello2, 3000);

setTimeout(function(){
    console.log("Hello!")
}, 3000);


const squares = numbers.map(function(element){
    return Math.pow(element, 2);
})
console.log(squares);


const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
})
console.log(evenNums);


const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
})
console.log(oddNums);


const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})
console.log(total);

