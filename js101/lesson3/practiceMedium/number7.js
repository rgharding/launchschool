let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

/*
Output => 42
`let answer = 42 on line one is a primitive value. At no point in this code is another value ressined to the answer variable declared on line 1.
The value of the answer is passed to the function's messWithIt parameter variable 'someNumber'. This is and indepedent variable that has no connection
to the answer variable on line 1. On the final line of code, we call the console.log method and pass it in the value of the answer variable, minus 8.
this is the value that will be printed to the console. The function cannot mutate the answer varibale.
*/
