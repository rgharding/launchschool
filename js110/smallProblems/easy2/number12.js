// Given a number always return a negative number;


function negative(inputNum) {
  
return  inputNum > 0 ? inputNum * -1 : Math.abs(inputNum) * -1

  // return Math.abs(inputNum) * -1;
}



console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0