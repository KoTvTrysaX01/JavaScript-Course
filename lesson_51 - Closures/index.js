function outer() {

    let message = "Hello";
    function inner() {
        console.log(message);
    }

    inner();
}

outer();


function createCounter() {
    let count = 0;

    function increment() {
        count++
        console.log(`Count increased to ${count}`);
    }

    function getCount() {
        return count;
    }

    return { increment, getCount }
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());



function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}


const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(game.getScore())