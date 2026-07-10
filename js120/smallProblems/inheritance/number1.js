// create change code so start engine invokes automaticaly when creating new Truck instatnce

class Vehicle {
  constructor(year) {
    this.year = year; 
  }
}


class Truck extends Vehicle {
  constructor(year) {
    super(year);
    this.startEngine();
  }

  startEngine() {
    console.log('Ready to go!')
  }
}

let truck = new Truck(2006);