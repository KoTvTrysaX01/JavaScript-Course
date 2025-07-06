// Async / Await = Async makes a function return a promise.
//                 Await makes an async function wait for a promise

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = false;
            if (dogWalked) {
                resolve("You walk the dog");
            }
            else {
                reject("You didnt walk the dog!");
            }

        }, 1500);
    })
};

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You clean the kitchen");
            }
            else {
                reject("You didnt clean the kitchen!");
            }
        }, 2500);
    })
};

function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut) {
                resolve("You take out the trash");
            }
            else {
                reject("You didnt take out the trash!");
            }
        }, 500);
    })
};

async function doChores(){

    try{
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeTrashResult = await takeTrash();
    console.log(cleanKitchenResult);
    }
    catch(error){
        console.error(error)
    }
}

doChores();