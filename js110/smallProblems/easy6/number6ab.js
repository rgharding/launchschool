/*
[P]roblem: given a string of a first and last name, return last name first, seperated by a ',' comma

I/O:
string
string

-Rules:
  - return a name seperations by a space, last name first


[E]xample: 
I?O: good

swapName('Joe Roberts');    // "Roberts, Joe"


[D]ata Stuc

Array: yes
Obj: no
HelpFunc: no


[A]lgo

-Define a function declaration 'swapName', that has 1 paramenter 'name'
  - declare and initaleze variable 'nameArr' to the value of 'name' split into elements of arr
  - retturn a template literal 'nameArr[1], nameArr[0]'
*/

function swapName(name) {
  let nameArr = name.split(' ');
    
  return `${nameArr[1]}, ${nameArr[0]}`
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"