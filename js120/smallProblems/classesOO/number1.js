/**
Update code so that it logs the name of the constructor that it belongs to



[E]xamples:
 console.log("Hello");
 console.log([1,2,3]);
 console.log({name: 'Srdjan'});
 
 
 [M]ental model:
  find constructor -> get constructors name
 
 */


console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);