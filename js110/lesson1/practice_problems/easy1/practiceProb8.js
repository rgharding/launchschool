let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

/*
Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
*/

let flintKeys = Object.keys(flintstones);
let flintstonesObj = {} 

for (let i = 0; i < flintKeys.length; i += 1) {
  let objKey = flintstones[i];
  let objVal = flintKeys[i];

  flintstonesObj[objKey] = Number(objVal);
}

console.log(flintstonesObj);


//

let flintKeyVal = {};

flintstones.forEach((name, index) => {
  flintKeyVal[name] = index;
});

console.log(flintKeyVal);