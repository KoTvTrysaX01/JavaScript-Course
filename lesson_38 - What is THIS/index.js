const person1 = {
    name: "Spongebob",
    favFood: "Krabby Patty",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function() { console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function() { console.log(`${this.name} is eating ${this.favFood}`)}
}

// Doesnt work with arrow functions => !!!

person2.sayHello();
person2.eat();