function roomSize(length, width) {
  let sqMeter = (length * width);
  let sqFt = sqMeter * 10.7339;
  return [sqMeter, sqFt];
}


console.log(roomSize(10, 10));

