// Synchronous = Executes line by line. Wait for an operation to complete

// Asynchronous = Allows operations to performe concurrently without waiting.


function func1(callback){
    setTimeout(() => {
        console.log("Task 1");
        callback();
    }, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}



func1(func2);