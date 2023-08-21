// Create a deep copy of nested object

const truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

let deepCopy = JSON.parse(JSON.stringify(truthiness));


deepCopy.falsy[6] = 666;

//console.log(truthiness);
//console.log(deepCopy);

// The above does not work, it is putting null in place of undefined, and NaN


let deepCopyProper = {}

for (let key in truthiness) {
  deepCopyProper[key] = truthiness[key].slice();
}

deepCopyProper['falsy'][6] = 666;
//console.log(deepCopyProper);
//console.log(truthiness);


let deepCopyDestructuring = {};

for (let key in truthiness) {
  deepCopyDestructuring[key] = [...truthiness[key]];
}

console.log(deepCopyDestructuring);