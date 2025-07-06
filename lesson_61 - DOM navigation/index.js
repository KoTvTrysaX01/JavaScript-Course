

// .firstElementChild

const element1 = document.getElementById("fruits");
const firstChild = element1.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ul => {
    const firstChildUl = ul.firstElementChild;
    firstChildUl.style.backgroundColor = "red";
})


// .lastElementChild

const element2 = document.getElementById("fruits");
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "green";

const ulElements2 = document.querySelectorAll("ul");
ulElements2.forEach(ul => {
    const lastChild = ul.lastElementChild;
    lastChild.style.backgroundColor = "blue";
})


// .nextElementSibling

const element3 = document.getElementById("apple");
const nextSibling = element3.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


// .previousElementSibling

const element4 = document.getElementById("ice cream");
const previousSibling = element4.previousElementSibling;
previousSibling.style.backgroundColor = "green";


// .parentElement

const element5 = document.getElementById("onions");
const parentElement = element5.parentElement;
parentElement.style.backgroundColor = "purple";


// .children

const element6 = document.getElementById("fruits");
const children = element6.children;
Array.from(children).forEach(child =>
    child.style.backgroundColor = "yellow"
)

children[1].style.backgroundColor = "pink";