// create an object that expresses the frequency of each letter;

let obj = {};

let statement = "The Flintstones Rock";

statement.split('').filter(letter => letter !== ' ').forEach(element => {
  

  if (!obj[element]) {
    obj[element] = 1;
  } else {
    obj[element] += 1
  }
});

console.log(obj);