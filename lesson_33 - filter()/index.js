let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNums = numbers.filter(isEven);
console.log(evenNums);


let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}


function isOdd(element){
    return element % 2 !== 0;
}


const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
console.log(adults);

const children = ages.filter(isChild);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}


const words = ["apple", "banana", "orange", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(getShortWords);
console.log(shortWords);

const longWords = words.filter(getLongWords);
console.log(longWords)


function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}