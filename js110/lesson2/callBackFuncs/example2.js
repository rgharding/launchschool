/*
Understanding each action on a higher order function with a call back

*/

let arr = [[1, 2], [3, 4]];
let mappedArr = arr.map((innerArr => console.log(innerArr[0])));
/*
1
3

if mappedArr is consoled [undefined, undefined]

let mappedArr = arr.map((innerArr => console.log(innerArr[0])));

Actions: performed ON: side effect: returnValue:  returnValue used

1.map:  outer array:  none:     [undefined, undefined]: no
2.callbk: innerArr: undfined: yes, it is used by map for transformation
3.console.log: innerArr: yes, prints to console, returns undefined: return not used
4. innerArr[0]: innerArr: the element at 0 index of innerArr: yes it is passed to conslog method 

3 & 4 should be switched
*/