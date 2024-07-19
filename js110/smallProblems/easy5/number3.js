

function halvsies(arr) {
  let firstHalf = [];
  let secondHalf = [];
  let oddHalf = Math.ceil(arr.length / 2)

 

  if (arr.length % 2 === 0) {
    firstHalf = arr.slice(0, arr.length / 2);
    secondHalf = arr.slice(arr.length / 2);
  
  } else {
    firstHalf = arr.slice(0, oddHalf)
    secondHalf = arr.slice(oddHalf);
  
  }
  
  return [firstHalf, secondHalf];
}



halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]




console.log(Math.ceil(8 / 2))