function reverse(arr) {

  for (let i = 0; i < arr.length; i += 1) {   
    let  currentLetter = arr.shift()   
    
    arr.splice(arr.length - i, 0,  currentLetter)  }
  
    return arr;
}


//let list = [1, 2, 3, 4];
//let result = reverse(list);
//console.log(result); // logs [4,3,2,1]
//console.log(list === result); // logs true

//let list1 = ["a", "b", "c", "d", "e"];
//let result1 = reverse(list1);
//console.log(result1); // logs  ["e", "d", "c", "b", "a"]
//console.log(list1 === result1); // logs true
//
//let list2 = ["abc"];
//let result2 = reverse(list2);
//console.log(result2); // logs  ["abc"]
//console.log(list2 === result2); // logs true
//
//let list3 = [];
//let result3 = reverse(list3);
//console.log(result3); // logs []
//console.log(list3 === result3); // logs true


function reverse2(arr) {
  let frontCount = 0;
  let backCount = arr.length - 1;

  for (let i = 0; i < arr.length / 2; i += 1) {
  [ arr[frontCount], arr[backCount] ] = [ arr[backCount], arr[frontCount] ];
    frontCount += 1;
    backCount -= 1;
  }

  return arr;
}


let list = [1, 2, 3, 4];
let result = reverse2(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

//let list1 = ["a", "b", "c", "d", "e"];
//let result1 = reverse2(list1);
//console.log(result1); // logs  ["e", "d", "c", "b", "a"]
//console.log(list1 === result1); // logs true
//
//let list2 = ["abc"];
//let result2 = reverse2(list2);
//console.log(result2); // logs  ["abc"]
//console.log(list2 === result2); // logs true
//
//let list3 = [];
//let result3 = reverse2(list3);
//console.log(result3); // logs []
//console.log(list3 === result3); // logs true