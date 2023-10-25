let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];


function getCountArr(arr) {
  let countObj = {}

  vehicles.forEach(vehicle => {
    if (!countObj[vehicle]) {
      countObj[vehicle] = 1
    } else {
      countObj[vehicle] += 1
    }
  })

  return Object.entries(countObj)
  
}


function countOccurrences(arr) {
  let countArr = getCountArr(arr)
  
  countArr.forEach(typeCount => {
    let type = typeCount[0];
    let count = typeCount[1];

    console.log(`${type} => ${count}`)
  });
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1