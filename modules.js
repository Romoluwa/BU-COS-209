//these are examples of Modules
//Example1

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };

//Example2

const math = require("./math");

console.log(math.add(10, 3));
console.log(math.subtract(10, 3));
