//Date(year, month, day, hour, minute, second, ms)
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
const date2 = new Date("2024-01-02T12:00:00Z");
const date3 = new Date(1700000000000);


console.log(date3);


const year = date1.getFullYear();
const month = date1.getMonth();
const day = date1.getDate();
const hour = date1.getHours();
const minutes = date1.getMinutes();
const seconds = date1.getSeconds();
const ms = date1.getMilliseconds();
const dayOfWeek = date1.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(ms);

date1.setFullYear(2024);
date1.setMonth(0);
date1.setDate(1);
date1.setHours(2);
date1.setMinutes(3);
date1.setSeconds(4);
date1.setMilliseconds(5);
console.log(date1);

const date4 = new Date("2023-12-31");
const date5 = new Date("2024-01-1");


if(date5 > date4){
    console.log("Happy new year!")
}