// JSON - JavaScript Object Notation


const names =  `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const person = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const people = `[{"name": "Spongebob", "age": 30,"isEmployed": true},
                {"name": "Patrick", "age": 34,"isEmployed": false},
                {"name": "Squidward", "age": 40, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]`

// const jsonString = JSON.stringify(people);
// console.log(jsonString);

// const parsedData = JSON.parse(names);
// console.log(parsedData)


fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));