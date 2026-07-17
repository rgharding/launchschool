// create a person class. It should defaul to jonh doe if no name is provided


class Person {
  constructor(name = 'John Doe') {
    this.name = name; 
  }
}


let person = new Person('Bob');
console.log(person.name)

let person2 = new Person();
console.log(person2.name);