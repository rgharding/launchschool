// Create a deep copy of nested object

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let deepCopy = JSON.parse(JSON.stringify(truthiness));


deepCopy.falsy[6] = 666;

console.log(truthiness);
console.log(deepCopy);

