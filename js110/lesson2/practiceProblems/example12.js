//  Create a deep copy of following code

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let deepCopyArr = JSON.parse(JSON.stringify(arr));

deepCopyArr[0].a = "This was changed!!!!!!"

console.log(arr);
console.log(deepCopyArr);
