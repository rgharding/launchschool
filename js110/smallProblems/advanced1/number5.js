function merge(arr1, arr2) {
  let copy1 = arr1.slice();
  let copy2 = arr2.slice();
  let result = [];


  while (copy1.length > 0 && copy2.length > 0) {
    result.push( copy1[0] <= copy2[0] ?  copy1.shift() : copy2.shift() );
  }

  console.log(copy1, copy2)
  //console.log(result.concat( copy1.length === 0 ?  copy2 : copy1  ))
}

//merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
//merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
//merge([], [1, 4, 5]);             // [1, 4, 5]
//merge([1, 4, 5], []);             // [1, 4, 5]