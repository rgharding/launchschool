function swapName(str) {
  let nameReverse = str.split(' ').reverse();
  let lastName = nameReverse.slice(0, 1);
  let restOfName = nameReverse.slice(1);

  console.log(`${lastName}, ${restOfName}`)
} 



swapName('Joe Roberts');    // "Roberts, Joe"
swapName('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"