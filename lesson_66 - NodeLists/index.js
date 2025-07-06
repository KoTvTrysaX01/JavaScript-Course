let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);


// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😯"
// });

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "hsl(202, 100%, 50%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(202, 100%, 60%)";
    });
});

const newButton = document.createElement("button"); //STEP 1

newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons";

document.body.appendChild(newButton); //STEP 3

buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});