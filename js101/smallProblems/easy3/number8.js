/*
[P]roblem: Take the average of 3 numbers provided, and return a letter grade based off where those numbers fall on a number scale.

[E]xample and test cases. 
75, 75, 75 => avg 75.   Scale 100-90:A  89-70:B  ==> B

[M]ental Model:
get 3 numbers, average numbers, check average against a scale, return matching range letter

[A]lgorithm
-create function that has 3 parametes, we are expecting number. 

-Declare variable average and intialize it to the result of the 3 numbers added, then divided by 3. 

-Create an if statement that checks the average to the specified range values. If condition returns truthy, return a corresponding letter string value.

[C]ode with intent
No new code snippets should appear at this point. Use the algorithm to complete the code. 

*/

function getGrade(num1, num2, num3) {
  let avg = ((num1 + num2 + num3) / 3)
    
  let grade;

    if (90 <= avg && avg <= 100 ) {
    grade = 'A';
    } else if (80 <= avg && avg < 90) {
    grade = 'B';
    } else if (70 <= avg  && avg < 80) {
     grade = 'C';
   } else if (60 <= avg && avg < 70) {
     grade = 'D';
   } else if (0 <= avg && avg < 60) {
     grade = 'F'
  }
  return grade;
}

/*
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
*/

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"