//these are examples of destructuring
//Example1
const name = ["John", "Tayo", "Bola"];

const [firstName, secondName] = name;

console.log(firstName);
console.log(secondName);

//Example2
const numbers = [1, 2, 3, 4];

const [first, , third] = numbers;

console.log(first);
console.log(third);
