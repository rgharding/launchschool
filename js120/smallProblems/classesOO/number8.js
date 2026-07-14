class Person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}


let person1 = new Person('Bob');
let person2 = new Person();
console.log(person1.name, person2.name);