let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}
// This will NOT print anything to the console. The loop never greater than 0 as it starts at zero and increment minus 1 each iteration


let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

// This will print 'Woooot' to the console 1 time. The do/while loop runs the code at least one time before the condition is checked. The condition
// is placed after the code body in a do/while loop.
