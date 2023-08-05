[[1, 2], [3, 4]].map((arr) => {
  return arr.map(num => num * 2)
})


/*
Action: Performed On: Side-Effect: Return Value: Return Val Used 

map: called on outer array: no Side Effects: new array: return val used yes
    [[1, 2] [3, 4]]

callBack Func: called on innerArrays: no Side Effects: return value [[1, 4][6, 8]]  

map called on inner arrays: no side effects: return value [1, 4], [6, 8]; value used to set new array elements

callback function num: called on the elements of of the inner array: no side effects: value used as nested array elements

num * 2; called on num which is innerarry element: no side effect: return value used,
this is the nested array's elements

*/
