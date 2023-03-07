/*
What will the following statements evaluate to?
*/

let tweet = 'Starting to get the hang of it... #javascript #launchschool';


console.log( tweet.split(' ') )  // ['Starting', 'to', ect ect ];
console.log( tweet.split(' ').reverse() )  // ['#launchSchool, #jaavascript, ect ect]
console.log( tweet.split(' ').reverse().join(' ') ) //  '#launchschool #javasript ect ect'
