
// Document.getElementById --- Element or null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//Document.getElementsByClassName --- html collection
const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[0].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "green";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

//fruits.forEach();

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "green";
});


//Document.getElementsByTagName --- html collection

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);

h4Elements[0].style.backgroundColor = "yellow";
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let li of liElements){
    li.style.backgroundColor = "lightgreen";
}

Array.from(liElements).forEach(li => li.style.backgroundColor = "lightblue")

//Document.querySelector --- First or null

const element = document.querySelector("ul");

element.style.backgroundColor = "blue";


//Document.querySelectorAll

const foods = document.querySelectorAll("li");

foods.forEach(food => food.style.backgroundColor = "red");