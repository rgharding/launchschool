let regex = /h/i;



console.log('Henry'.match(regex));
console.log('perch'.match(regex));
console.log('golf'.match(regex));



console.log(regex.test('Henry'));
console.log(regex.test('perch'));
console.log(regex.test('golfs'));