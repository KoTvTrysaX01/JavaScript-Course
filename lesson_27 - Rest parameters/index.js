const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";


function openfridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

openfridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);



function getSum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getSum(1, 2, 3, 4, 5);
const average = getAverage(1, 2, 3, 4, 5);


console.log(`Your total is ${total}`);
console.log(`Your average is ${average}`);


function combineString(...strings){
    return strings.join(" ");
}

const fullname = combineString("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullname);