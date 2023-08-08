let x = [ [[1], [2], [3], [4]], [['a'], ['b'], ['c']] ].map((level1NestedArray) => {
    level1NestedArray.forEach(level2NestedArray => {
      return level2NestedArray.filter(level3NestedArray => {
          return level3NestedArray.length > 0;
      });
    });
});

//console.log(x)
let y = NaN
let long = y.length;
console.log(long);


/*
This will return [undefined, undefined];
The forEach on line 2 will always return undefined
the filters condition   length > 0 will 
*/