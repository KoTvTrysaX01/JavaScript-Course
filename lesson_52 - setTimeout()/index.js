function sayHello(){
    window.alert("Hello!")
}
// setTimeout(sayHello(), 3000);
// setTimeout(function(){window.alert("Hello!")}, 3000);
// setTimeout(() => window.alert("Hello!"), 3000);

// const timeoutID = setTimeout(() => window.alert("Hello!"), 3000);

// clearTimeout(timeoutID);


let timeOutId;

function startTimer(){
    timeOutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started!")
}

function clearTimer(){
    clearTimeout(timeOutId)
    console.log("Cleared!")
}