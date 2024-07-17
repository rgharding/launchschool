function age(low, high) {
  let randomAge = Math.round(Math.random() * (high - low) + low);
  console.log(`The Teddy bear is ${randomAge} years old.`)
}

age(20, 120);