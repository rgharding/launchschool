let regex = /,| /;

console.log(regex.test('This line has spaces'));
console.log(regex.test('This,line,has,commas,'));
console.log(regex.test('No-spaces-or-commas'));