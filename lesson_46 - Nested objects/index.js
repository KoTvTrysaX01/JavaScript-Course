// const person = {
//     fullName : "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyFishing", "cooling"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.country);
// console.log(person.address.city);

// for(const property in person.address){
//     console.log(person.address[property])
// }



class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.",
                                            "Bilini Bottom",
                                            "Int. Waters");

const person2 = new Person("Patrick", 33,  "123 Conch St.",
                                            "Bilini Bottom",
                                            "Int. Waters");

const person3 = new Person("Squidward", 35, "122 Conch St.",
                                            "Bilini Bottom",
                                            "Int. Waters");

console.log(person1.address)
