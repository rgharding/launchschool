let regex = /K/;

console.log('Kx'.match(regex));
console.log('BlacK'.match(regex));
console.log('kelly'.match(regex));



console.log(regex.test('Kx'))
console.log(regex.test('BlacK'))
console.log(regex.test('kelly'))