
// // STEP 1: CREATE THE ELEMENT

// const newH1 = document.createElement("h1");


// // STEP 2: ADD ATTRIBUTES/PROPERTIES

// newH1.textContent = "I like pizza";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";


// // STEP 3: APPEND ELEMENT TO DOM

// //document.body.append(newH1);
// //document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// //document.body.insertBefore(newH1, boxes[2]);
// document.getElementById("box1").prepend(newH1);

// //document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);






const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"

// document.getElementById("fruits").append(newListItem);

// Can understand id references without creating variables for them?
//document.getElementById("fruits").insertBefore(newListItem, banana)
const apple = document.getElementById("apple")
document.getElementById("fruits").insertBefore(newListItem, apple)


const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

document.getElementById("fruits").removeChild(newListItem);