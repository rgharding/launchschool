/*
Modifying Objects in arrays
*/

let arrOfObjs = [ { a: 'apple' }, { b: 'bear' } ];

// add tastse: 'sweet' to first element

arrOfObjs[0]['taste'] = 'sweet';
arrOfObjs[0]['color'] = 'red';
 
console.log(arrOfObjs) /*  
[ 
  { a: 'apple', taste: 'sweet', color: 'red' }, 
  { b: 'bear' } 
];  
*/