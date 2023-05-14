// Write funtion that computes sum of all numbers inclusive between 1 and some other number that are multiples of 5 & 3;


function multisum(number) {
  let numArray = [];

  for (let dividend = number; dividend >= 1; dividend -= 1) {
    if (dividend % 3 === 0 || dividend % 5 === 0) {
      numArray.push(dividend);
    }
  }

  let result = numArray.reduce((acc, cv) => {
    return acc = acc + cv;
  }, 0)
  return result;
}


console.log(multisum(3));  // 3
console.log(multisum(5)); //  8
console.log(multisum(10)); //  33
//console.log(multisum(1000)); // 234168