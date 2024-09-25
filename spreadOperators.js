//these are examples of Spread operators
//Example1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);
const copy = [...arr1];
console.log(copy);

//Example2
const person = { name: "John", age: 30 };
const job = { role: "Developer", company: "ABC Corp" };

const employee = { ...person, ...job };
console.log(employee);

const updatedPerson = { ...person, age: 31 };
console.log(updatedPerson);
