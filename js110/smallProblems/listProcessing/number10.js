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

function transactionsFor(idNum, transArray) {
  return transArray.filter(obj => obj['id'] === idNum)
}


function isItemAvailable(idNum, transArr) {
  let askedForTransactions = transactionsFor(idNum, transArr);
  return itemCount(askedForTransactions); 

}

function itemCount(transArray) {
  let count = 0;
  
  transArray.forEach(obj => {
    obj.movement === 'in' ? count += obj.quantity : count += obj.quanty;
  })

  return count > 0
}

//console.log(isItemAvailable(101, transactions));     // false
//console.log(isItemAvailable(103, transactions));     // false
//console.log(isItemAvailable(105, transactions));     // true


function getSpecificTransaction(idNum, transactions) {
  return transactions.filter(obj => obj.id === idNum)
}

function isItemAvailable2(idNum, transactionsArray) {
  let items = getSpecificTransaction(idNum, transactionsArray);
  
  let inStock = items.reduce((count, obj) => {
    if (obj.movement === 'in') {
      count += obj.quantity;
    } else {
      count -= obj.quantity
    }
    return count;
  }, 0)
  
  return inStock > 0

} 




console.log(isItemAvailable2(101, transactions));     // false
console.log(isItemAvailable2(103, transactions));     // false
console.log(isItemAvailable2(105, transactions));     // true