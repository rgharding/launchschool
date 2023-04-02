let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let vehicleKeys = Object.keys(vehicle);

console.log(vehicleKeys)

let keyArr = [];

for (let prop in vehicle) {
	keyArr.push(prop);
}

console.log(keyArr);
