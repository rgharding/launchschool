/*
[P]roblem: Given an an array that contains objects that contains an id, return on array that contains all of the objects with a given id

I/O: 
Array of objects
Array of selected objests

Rules: 
  - the return array will only contain objects with a specified id


[D]ata Structure
 -Array: yes
 -Object: yes
 HelpFunc: no


[A]lgoritm
- Define a function declaration 'transactionsFor' that has 1 paramentes 'arr' and 'transActionId'
  -Declare and initalize a variable 'selectedForId' the returns the filtered result of cycling thru 'arr'
    - select for objID === [transActionId 


  return 'selectedForId'  
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];



function transactionsFor(transActionId, arr) {
  let selectedForId  = arr.filter((obj) => {
    return obj['id'] === transActionId
  });

  return selectedForId;
}

  console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]