let myArr = [[18, 7], [3, 12]].forEach(innerArr => {
  return innerArr.map(num => {
    if (num > 5) {
     return console.log(num)
    }
  });
});

console.log(myArr)
/*
Action:   Perfomed On:     Side Effect:   Return Value:   Return Value Used:

forEach    outer array      no side         undefined        value of myArr
callBack     innerArr        no             undefinced        returned to forEach
map method  innerArr         no           innerArr elements     no
callback    innerArr Elements(num): no       undefined         yes, transform the array
if statement num          no                    boolean          yes, to determens to procced
console log:  num that passed if statement:  logs to console: undefined: no

*/