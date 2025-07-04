const person1 = {
    firstName: "Spongebob",
    lastName: "Squarpants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I'm Spongebob")},
    eat: () => console.log("I eat Krabby Patty"),
}
console.log(person1.firstName);
person1.sayHello();
person1.eat();


const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => {console.log("Hey, I'm Patrick")},
    eat: () => console.log("I eat pizza"),
}
console.log(person2.firstName);
person2.sayHello();
person2.eat();
