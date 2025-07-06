const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event){
    // event.target.style.backgroundColor = "tomato";
    // event.target.textContent = "Ouch! 🤕"
}

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Ouch! 🤕"
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it😯";
})


myButton.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me 😊";
})