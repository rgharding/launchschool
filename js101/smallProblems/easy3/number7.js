/*
[P]roblem: If the number is a double number, meaning one half of the number is the same as other half of number, return the number. If it not a double number, return the number multiplied by two.

[E]xample and Test cases

44 => double number 4 4  => return number
103 => NOT a double number => return 103 * 2
555 => NOT a double number => return 555 * 2
557557 => double number 557 557 => return 557557

[M]ental Model:
Start with number => check if number is a double number => return number or number with operation performed


[A]lgorithm:
Define a function checkForDouble, that has 1 parameter number.
Define an if statement that checks for the following:

if number is even, split the number evenly down the middle, if the first half of the number is equal to second have of the number, return number.


Else return number * 2
*/

function twice(number) {
  let numberToString = number.toString();
  let length = numberToString.length
  
  let firstHalf = numberToString.slice(0, length / 2);
  let secondHalf = numberToString.slice(length / 2);

  if (length % 2 !== 0 || firstHalf !== secondHalf) {
      return number * 2;
  } else {
      return number;
  }
}


console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676