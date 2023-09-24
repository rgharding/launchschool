// Write a funtion that takes a number. if the number is a double number (the first half is the same as the second half) return the number. If it is not a double number double it's value then return the doubled value

function twice(num) {
  if (num % 2 === 1) {
    return num * 2;
  }

  let numAsString = String(num);
  let stringLength = numAsString.length;
  let firstHalf = numAsString.slice(0, stringLength / 2);
  let secondHalf = numAsString.slice(stringLength / 2)

  if (firstHalf === secondHalf) {
    return num
  } else {
    return num * 2;
  }
}


console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676






