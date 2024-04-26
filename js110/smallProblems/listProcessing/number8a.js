function buyFruit(arr) {
  let fruitArr = [];

  arr.forEach(subArr => {
    let str = subArr[0];
    let count = subArr[1];

    for (let i = 0; i < count; i += 1) {
      fruitArr.push(str);
    }
  });

  console.log(fruitArr);
}
 
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]