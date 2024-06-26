/* 
 [P]roblem: log all the odd numbers between 1 and 99 inclusive

 Rules: 
 numbers logged must be odd, 
 inclued first and last numbers if they meet criteria

 I/O
 I: none
 O: undefined/ logging to the console

 [E]xample and test
 1,3,5...

 [D]ata Stucture
 Array: no
 Object: no
 HelperFunc: no

[A]lgo
- define a function declaration, no parameter
  - define a for loop
    - counter 1, loop whilc counter is less or equal to 99  ,loop increment 2
      - log counter on each increment

[C]ode with intent
*/


function oddCount() {
  for (let i = 1; i <= 99; i += 2) {
    console.log(i);
  }
}


oddCount();