/*
[P]roblem:  given an array of elements, rotate the first element to the end of the array, do not mutate the original array

I/O: 
array
new array

Rules:
  - do not mutate original array
  - if atguemtn passed is not an array, return undefined
  - if agrument passed is an empty array return an empty arr


[E]xamples

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


[d]ata Structure
Array: yes
Obj: no
HelpFunc: no


[A]lgo

- Define a function declaration 'rotateArray' that has 1 parameter 'arr'
  
  - define and if statement
    - if arr is not an Array OR arr's length is 0 
      - return an empty array

  - declare and initialize variable 'newArr' to the value of a shallow copy of 'arr'
  - declare and initalize variable 'elementToRotate' to the value of the first element of removeing the first element of 'newArr'

    - push the value of 'elementToRotate' onto the end of 'newArr'

  - return newArr;
*/


function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }

  if (arr.length === 0) {
    return []
  };

  let newArr = arr.slice();
  let elementToRotate = newArr.shift();
  newArr.push(elementToRotate);

  return newArr
}



//console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
//console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
//console.log(rotateArray(['a']));                    // ["a"]
//console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
//console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
//console.log(rotateArray([]));                       // []

//// return `undefined` if the argument is not an array
//console.log(rotateArray());                         // undefined
//console.log(rotateArray(1));                        // undefined
//
//
//// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]