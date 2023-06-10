function twice(num) {
  let numString = String(num);
  let length = numString.length;
  let half1 = numString.slice(0, length / 2);
  let half2 = numString.slice(length/ 2);

  if (half1 === half2) {
    return num;
  } else {
    return num + num;
  }
  
};


console.log(twice(7676));