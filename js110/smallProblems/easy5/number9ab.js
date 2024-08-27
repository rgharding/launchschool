/*
[P]roblem:  given an arrar of words, return each word with the number of occurences of that word

I/O;
array
string

Rules: 
  - a string must be exactly the same, if cases are different on same word, it is counted seperately
  - each word and a word count will be retruned


[E]xamples

I?O: looks good

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1



[D]ata structure: 
Array: no
Object: yes
HelpFunc: no


[A]lgorithm

Define a function declaration 'countOcc' that has 1 param 'arr'
  - Declare and initalize variable 'ObjCount' to an empty array;

  - Define a loop that loops thru the 'arr' array
    - if the current element of 'arr' has a key in 'objCount' 
      - add 1 to objCount[current element] 
    - esle
      - add objCount[current elment] to the value of 1;


  - define an Object loop;
    - loop thru 'objCount'
      on each iteration log to the consone  objCount Key ':' ObjCountValue'
      
*/

function countOccurrences(arr) {
  let objCount = {}

  arr.forEach(element => {
    if (objCount[element]) {
      objCount[element] += 1
    } else {
      objCount[element] = 1;
    }
  });

  Object.entries(objCount).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`);
  })
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

//countOccurrences(vehicles);



function countOccurrences2(vehicles) {
  let objCount = {}

  vehicles.forEach(element => {
    objCount[element] = objCount[element] || 0
    objCount[element] += 1;
});


  Object.entries(objCount).forEach(entry => {
    console.log(`${entry[0]} : ${entry[1]}`);
  })
}


countOccurrences2(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1