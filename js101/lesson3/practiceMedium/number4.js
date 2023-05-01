function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

console.log(addToRollingBuffer1(['a', 'b', 'c'], 3, 'd'));
console.log(addToRollingBuffer2(['a', 'b', 'c'], 3, 'd'));


console.log(addToRollingBuffer1(['a', 'b', 'c'], 3, 'e'));
console.log(addToRollingBuffer2(['a', 'b', 'c'], 3, 'e'));
