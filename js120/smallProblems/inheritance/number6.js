const swimMixin = {
  swim() {
    return `${this.name} is swimming.`
  }
}


class Fish {
  constructor(name) {
    this.name = name;
    Object.assign(this, swimMixin)
  }
}

class Dog {
  constructor(name) {
    this.name = name;
    
  }
}

class Maltese extends Dog {
  constructor(name) {
    super(name);
    Object.assign(this, swimMixin);
  }
}




let dog = new Maltese('Buddy');
let fist = new Fish('Nemo');


console.log(dog.swim());
console.log(fist.swim())