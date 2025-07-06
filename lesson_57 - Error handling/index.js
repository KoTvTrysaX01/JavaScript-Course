


//console.lag("Hello");
//console.log(x);


try{
    console.log(x);
}
catch(error){
    console.error(error)
}
finally{
    console.log("This always executes")
}



try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = window.prompt("Enter a divisor: ");

    if(divisor == 0){
        throw new Error("You cant divide by zero!")
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be a number");
    }
    
    const result = dividend / divisor;

    console.log(result);
}
catch(error)
{
    console.error(error)
}
console.log("You have reached the end!");
