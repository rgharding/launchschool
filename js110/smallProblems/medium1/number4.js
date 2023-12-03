/*
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

*/

function isANumber(input) {
  let regex = /[0-9]/
} 
  

function minilang(inputStr) {
  let register = 0;
  let stack = []
  
  inputStr.split(' ').forEach(element => {
    switch (element) {
      
      case 'PUSH':
        stack.push(register);
        break;
      
      case 'ADD':
        register = Number(stack.pop()) + Number(register);
        break;

      case 'SUB':
        register = register - stack.pop() ;
        break;

      case 'MULT':
        register = stack.pop() * register
        break;

      case 'DIV':
        register = Math.round(register / stack.pop()); 
        break;

      case 'REMAINDER':
        register =  register % stack.pop();
        break;
      
      case 'POP':
        register = stack.pop();
        break;
      
      case 'PRINT':
          console.log(register);
          break;
          
      default: 
        register = element;
    }
  })
  

}




//minilang('PRINT');
// 0

//minilang('5 PUSH 3 MULT PRINT');
// 15

//minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

//minilang('5 PUSH POP PRINT');
// 5

//minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

//minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

//minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

//minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)