class Vehicle {
  constructor(year) {
    this.year = year
  }
}

class Truck extends Vehicle {
  constructor(year, bedtype) {
    super(year);
    this.bedtype = bedtype;
    this.startEngine();
  } 

    startEngine() {
      console.log('Start Engine!');
    }
}


class Car extends Vehicle {}

let truck1 = new Truck(2003, 'short');
let car = new Car(2003);

console.log(car)



//console.log(truck1.year);
//console.log(truck1.bedtype);