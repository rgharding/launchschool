let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];



function countOccurrences(arr) {
  let countObj = {}


  for (let i = 0; i < vehicles.length; i += 1) {
    let vehicle = vehicles[i];

    if (!countObj[vehicle]) {
      countObj[vehicle] = 1;
    } else {
      countObj[vehicle] += 1
    }
  }

  Object.entries(countObj).forEach(entry => {
    let returnString = `${entry[0]} => ${entry[1]}`
    console.log(returnString);
  });

}


  countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1