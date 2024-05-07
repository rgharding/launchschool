function rotateArray(param1) {
  let returnArr = [];

  if (Array.isArray(param1) && param1.length === 0) {
    return [];
  }
  
  if (  !Array.isArray(param1) ) {
    return undefined;
  }

  returnArr = param1.slice(1).concat(param1[0]);
  
  return returnArr;

}


//rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
//rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
//rotateArray(['a']);                    // ["a"]
//rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
//rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
//console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
//console.log(rotateArray());                         // undefined
//console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]