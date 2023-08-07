let arr = [[8, 13, 27], ['apple', 'banana', 'cantaloupe']]

let filtered = arr.map(nestedArray => {
  return nestedArray.filter(nestedArrayElement => {
      if (typeof nestedArrayElement === 'number') {
        return nestedArrayElement > 13;
      } else if (typeof nestedArrayElement === 'string' ) {
        return nestedArrayElement.length > 66
      } else {
        return false;
      }
  })
});

console.log(filtered);