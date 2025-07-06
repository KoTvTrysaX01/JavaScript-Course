// const myButton = document.getElementById("myButton");
// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// const myH1 = document.getElementById("myH1");

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤕";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }

// });

// myH1.addEventListener("click", event => {

//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "🤕";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }

// });

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});


buttons.forEach(button =>{
    button.addEventListener("click", event => {

        if(event.target.classList.contains("disabled")){
            event.target.textContent += "🤕";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    })
})