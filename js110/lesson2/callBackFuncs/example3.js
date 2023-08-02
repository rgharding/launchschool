let arr = [[1, 2], [3, 4]];
let x = arr.map((innerArr) => {
  console.log(innerArr[0]);
  return innerArr[0]
});

/**
 The actions for the following are as follows
  act: calledOn: side: returnVal: returnVal Used
 
  map: called on arr: SE none: [1, 3]: yes, assigned to the x variable
  callBk funct: innerArr: SE none: number at innerArr[0], passed to map
  innerArr[0]: no side: 1, 3: yes passed to console.log method
  consolelog: innerArr[0]: prints to console: rtn undefiend: rtn not used
  return: innerArr[0]: sideEffect: none: return value 1, 3: rtn explicity returned to callback func 
 */