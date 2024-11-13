/*
[P]roblem: given a year, return the number of friday the 13th's in that year

I/O
number - year
number- number of friday the 13

Rules-
  - return the amount of friday the 13's
  - year will be greater than 1752


[E]xamples and test cases

fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

[M]ental model intermission
  get the year -> get a count variable -> get a loop of the months, check if that year and that month had a friday 13 -> if so add 1 to count -> return count


[D]ata structure
  Array: no
  Object: no
  HelpFunc: no


[A]lgorithm

- Define a function declaration 'fridayThe13ths' that has 1 param 'numYear' 
  - Declare and initalize variable 'count' to 0;
  - declare and inialize variable year to value of getting date. 
  
  - define a for loop
    - i = 0, i < 12; i += 1

*/

function fridayThe13ths(year) {
  let count = 0;
  

  for (let month = 0; month < 12; month += 1) {
    let date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      count += 1;
    }
  } 

  console.log(count);
}

fridayThe13ths(1986);      // 1
//fridayThe13ths(2015);      // 3
//fridayThe13ths(2017);      // 2