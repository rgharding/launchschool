function buyFruit(arr) {
  let newArr = []

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr[i][1]; j > 0; j -= 1) {
      newArr.push(arr[i][0]);
    }
  }
  console.log(newArr);
}


//buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]



function buyFruit2(arr) {
  let x = []

  arr.map((element) => {
    element // ['apple', 3]
  })

}


buyFruit2([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]





