function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let age = randomAge(20, 120);
console.log(`Bob is ${age} years old`);