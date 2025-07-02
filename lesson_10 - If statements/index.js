let age = 0;
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    if (age >= 100) {
        result.textContent = `You are too old to enter this site`;
    }
    else if (age == 0) {
        result.textContent = `You cant enter. You were just born`;
    }
    else if (age >= 18) {
        result.textContent = `You are old enough to enter this site`;
    }
    else if (age < 0) {
        result.textContent = `Your age cant be less than zero`;

    }
    else {
        result.textContent = `You must be 18+ to ente this site`;
    }
}




let time = 9;

if (time < 12) {
    console.log("Good morning")
}
else {
    console.log("Good evening");
}

let isStudent = false;

if (isStudent) {
    console.log("You are a student");
}
else {
    console.log("You are not a student");
}

let hasLicense = false;

if (age >= 16) {
    console.log("You are old enough to drive");

    if (hasLicense) {
        console.log("You have your license");
    }
    else {
        console.log("You do not have you license yet");
    }
}
else {
    console.log("You must be 16+ to have a license");
}