//these are examples of classes
//Example1
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
// Example of the Person class
const person1 = new Person("John", 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.

//EXAMPLE 2
class Phone {
  constructr(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  get fullName() {
    return `${this.brand} ${this.model}`;
  }
  set fullName(name) {
    const parts = name.split(" ");
    this.brand = parts[0];
    this.model = parts[1];
  }
}
//example of the phone class
const phone1 = new Phone("Ipone", "12 promax");
console.log(phone1.fullName);
phone1.fullName = "Samsung S23";
console.log(phone1.fullName);
