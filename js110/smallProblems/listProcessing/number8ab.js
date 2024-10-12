/*
[P]roblem: Given a nested array, where each nested array contains an item and a number, return a flat array that has each item repeated the amount of the number it is in an array with.

I/O:
Neated Array
Flat Array

Rules: 
  - Return array will be flat
  - eact item will be repeated as many times as the number it is with


[E]xample and test:

I?O: looks good

[['apple', 3], ['orange', 1], ['banana', 2]] ==>
 returns ["apple", "apple", "apple", "orange", "banana", "banana"]


[D]ata structure
Array: yes
Object: no
HelpFunc: no


[A]lgorithm

-Define a functtion declaration 'buyFruit' that has 1 param 'arr'
  - Declare and inialize variable 'repeatedItems' to an empty array
  - Define a for loop
    count = 0; count < arr[length]; count += 1
     -declare and initalize varible  'item' = arr[count][0];
     -declare and initalize variable 'howMany' = arr[count][1]
     - declare an initlaiez vvariable 'itemStr' to the repeated amount of 'howMany' seperated by commas
     - push 'itemStr onto 'repeatedItems' 
  
  - Return 'repeatedItems'

*/


function buyFruit(arr) {
  let repeatedItems = [];

  for (let i = 0; i < arr.length; i += 1) {
    let item = arr[i][0];
    let count = arr[i][1];
    
    for (let j = 0; j < count; j += 1)
    repeatedItems.push(item)
  }

  return repeatedItems;
}

//console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


function buyFruit2(fruitArr) {
    let newFruits = fruitArr.map((fruit ) => {
      return repeatFruit(fruit)
    }).reduce((acc, cv ) => {
      acc = acc.concat(cv);
      return acc;
    });

    return newFruits
}


function repeatFruit(fruitArr) {
  let item = fruitArr[0];
  let count = fruitArr[1];
  let returnArr = [];

  for (let i = 0; i < count; i += 1) {
    returnArr.push(item);
  }

  return returnArr;
}


console.log(buyFruit2([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]