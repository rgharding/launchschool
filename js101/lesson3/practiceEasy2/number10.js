let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let x = [...statement1.matchAll('t')].length

let y = statement1.split('').filter( (letter) => letter === 't').length

console.log(y)
