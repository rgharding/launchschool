// Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.


let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];


let newArr = arr.map((innerObject) => {
  let newObj = {}
  let innerObjectKeys = Object.keys(innerObject);

  for (let key of innerObjectKeys) {
    newObj[key] = innerObject[key] += 1
  }

  return newObj
});

console.log(newArr);


// let stringify = JSON.stringify(arr);
// let parsedArrArray = JSON.parse(stringify);

// let newArrJSONED = parsedArrArray.map((innerObject) => {
//   let keys = Object.keys(innerObject) 
//   for (let key of keys) {
//     innerObject[key] += 1
//   }

//   return innerObject
// });

// console.log(newArrJSONED);


