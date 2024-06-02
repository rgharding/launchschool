let arr1 = ["a", "b", "c"];
let arr2 = arr1.map((letter, idx) => arr1.unshift(idx));
console.log(arr1); // ['0', '1', '2', 'a', 'b', 'c']
console.log(arr2); // ['0', '1', '2', 'a', 'b', 'c']




let arr1 = ["a", "b", "c"];
let arr2 = arr1.filter((letter, idx) => arr1.unshift(idx));
console.log(arr1); // [2, 1, 0, 'a', 'b', 'c']
console.log(arr2); // ['']





let players = [
  {name: "Joe", age: 25},
  {name: "Andy", age: 31},
  {name: "Ralph", age: 18},
  {name: "Mark", age: 28},
];

let lastYearsTeam = players
  .slice()
  .sort()
  .filter(player => {
    if (player.age < 30) return true;
  });

console.log(lastYearsTeam);
'[object Object]'




// make new array  where each subarray is sorted in descening order
let arr = [
  ["c", "a", "b"],
  [2, 3, 0, 1],
  ["hi", "oopsie", "daisy"],
  [49, 293, 20, 6, 2]
];