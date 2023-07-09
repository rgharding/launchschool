/* Pick out the minimum age from our current Munster family object:

[P]roblem:
Given an object of names and ages, select the minimum age from the object. 

input: object
output: numeric integer

[E]xample: 
{a: 3, b: 5, c: 1} ==> 1

[D]ata structue
Object to integer.

[A]lgorithm
1. declare a variable 'agesArr' and set it to the values of the object in the array. 
2. delcare a variable younges and set it to 0;
3. loop thru the agesArr and set youngest to the value at index 0; 
4. declare an if statement. if the current value of the loop is less than yougest, that reassign youngest to the current value. 
5. return youngest (if this is a function);
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArr = Object.values(ages);

let youngest = agesArr[0];

for (let i = 0; i < agesArr.length; i += 1) {
  if (agesArr[i] < youngest) {
    youngest = agesArr[i];
  }
}

//console.log(youngest);

//

let sortedYoungest = Object.values(ages).sort((a, b) => {
  return a - b;
})[0];

console.log(sortedYoungest)