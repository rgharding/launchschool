/*
[P]roblem:  Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements, that when comdined with adjoining spaces with be a person's name. The object will contain two keys, one 'title', one 'occupation' and the apporpriate values. The function will return a greeting the uses the person's fullname and mentions the preson's title and occupation.

Hello, Bob Smith! You are the best 'master' 'electrician' in town!

input - an array & an object
output - a string

Rules: 
  Explicit:
  1. Inputs must be an array of strings and an object with 2 key value pairs.
  2. The inputs will be used to output a string

  Implicit:

  Questions:
  1. Will the inputs be hard coded or requested user input?


[E]xample Test case

['Bob', 'Smith'], {title: 'master', occupation: 'electrician'}
Hello, Bob Smith! You are the best 'master' 'electrician' in town!

[D]ata structure
  Array: yes, as input
  Object: yes, as input
  Function: yes


[A]lgorithm
1. Create a function greeting that has 2 parameter 'nameArray', 'jobObject'
2. The each element of the name array will be accesed and concated in to a variabe 'name'
3. The object key's values will be assigned to variables sharing the same name as the keys. 
4. The return value of function 'result' will be a greeting that interpolates the variables into a coherent greeting.


[C]ode with intentet

*/



let name = ['Richard', 'G', 'Harding']
let job = {title: 'ICT3 Apple', occupation: 'Software Engineer'};


function greeting(nameArr, jobObj) {
  let result = `Hello ${name.join(' ')}, Congrats on being hired as an ${job['title']} ${job.occupation}!`

  return result;
}


console.log(greeting(name, job));