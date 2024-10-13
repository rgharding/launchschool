/*
[P]roblem: Given an array of objects, objects which contain an id of an item, a movement of the item, and a quatity of items being moved. Return true if the items quantity is over 0 and false otherwise

I/O: 
Array
Boolean

Rules: 
 - Item quantity must be greater than 0 to return true
 

[E]xamples

I?O: look good

 [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

[D]ata structure: 
Array: yes
Object: no, no new object
HelpFunc: yes


[A]logorthm
** Help Func ***isolateItem***
- Define a function declaration 'isolateItem' that has 2 paramenter, 'itemsArr' & 'searchId'
 - declare and inialize a variable 'itemArr' to return value of filter 'itemsArr'
  - return 'item[id] === searchId

  -return 'itemArr'


*** Main Func ***  

- Define a function declaration 'isItemAvailable' that has 2 parameters, 'itemsTransactions' & 'itemId'

- declare and initalize variable 'itemWeNeed' to return value of 'isolateItem' paseed in with bath parameters.

- declare and initalize variable 'count' to 0

- define a forEach and loop thur 'itemWeNeed' array
  - Define an if statement
    if items.movement === 'in'
      count += items.quantity OR count -= items.quantity
  
  return count > 0
*/

function isolateItem(id, itemsArr) {
  return itemsArr.filter(item => item.id === id);

}


function getCount(arr) {
  let count = 0

  arr.forEach(item => {
    item.movement === 'in' ? count += item.quantity : count -= item.quantity;
  })

  return count;
}

function isItemAvailable(id, itemsArr) {
  let selectedItem = isolateItem(id, itemsArr)

  return getCount(selectedItem) > 0
  
}


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

 console.log(isItemAvailable(101, transactions));     // false
 console.log(isItemAvailable(103, transactions));     // false
 console.log(isItemAvailable(105, transactions));     // true