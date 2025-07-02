let userName = "   BroCode ";

console.log(userName.charAt(3));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(userName.startsWith(" "));
console.log(userName.endsWith(" "));
console.log(userName.includes("a"));


let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.replaceAll("-", "/");
phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(20, "9");
console.log(phoneNumber);