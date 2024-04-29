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

  function transactionFor(itemToSearch, itemsArr) {
    return specificItem = itemsArr.filter(item => item.id === itemToSearch);
     
  }

function isItemAvailable(itemId, itemsArr) {
    
   let result = transactionFor(itemId, itemsArr).reduce(
    (sum, transaction) => {
    if (transaction.movement === 'in') {
      sum += transaction.quantity;
    } else if ( transaction.movement === 'out') {
      sum -= transaction.quantity;
    }
}, 0)

    return result > 0
}

console.log(isItemAvailable(101, transactions));     // false
//console.log(isItemAvailable(103, transactions));     // false
//console.log(isItemAvailable(105, transactions));     // true