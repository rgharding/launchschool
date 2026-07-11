// create car and truck class the inherit from vehicle

class Vehicle {
  constructor(year) {
    this.year = year; 
  }
}


class Truck extends Vehicle {};

class Car extends Vehicle {};


let car  = new Car(2006);

console.log(car.year);