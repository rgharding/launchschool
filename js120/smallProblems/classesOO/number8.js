/// creat a rename method that renames kitty when invoked

class Cat {
  constructor(name) {
    this.name = name
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat('kitty');
console.log(kitty.name);

kitty.rename('Bob');
console.log(kitty.name);