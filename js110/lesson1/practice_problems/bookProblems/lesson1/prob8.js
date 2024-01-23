// Create from the array on object that has the elements as key and the index as value;
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let obj = {}

flintstones.forEach((elem, index) => {
  obj[elem] = index 
});

console.log(obj); // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
