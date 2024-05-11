function minilang(input) {
  let inputArr = input.split(' ');
  let register = 0;
  let stack = [];

  inputArr.forEach(element => {
    if (Number(element)) {
      register = Number(element);
      
    } else if (element === 'PUSH') {
      stack.push(register);
      
    } else if (element === 'ADD') {
      register += stack.pop();
    
    } else if (element === 'SUB') {
      register -= stack.pop();
    
    } else if (element === 'MULT') {
      register *= stack.pop();
    
    } else if (element === 'DIV') {
      register = Math.round(register / stack.pop());
    
    } else if (element === 'REMAINDER') {
      register %= stack.pop();
    
    } else if (element === 'POP') {
      register = stack.pop()
    
    } else if (element === 'PRINT') {
       console.log(register);
    }
  });
}

//minilang('PRINT');
//// 0
//
//minilang('5 PUSH 3 MULT PRINT');
//// 15
//
//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
//// 5
//// 3
//// 8
//
//minilang('5 PUSH POP PRINT');
//// 5
//
//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
//// 5
//// 10
//// 4
//// 7
//
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
//// 6
//
//minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
//// 12
//
//minilang('-3 PUSH 5 SUB PRINT');
//// 8
//
//minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)