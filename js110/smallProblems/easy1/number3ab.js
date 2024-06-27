/*
[P]roblem log all even numbers between 1 and 99 inclusive

i/o
none
none / logging to the console


[E]xample test
2, 4, 6, ...


[D]ata stuc
Arr: no
Obj: no
HelpFunc: no


[A]lgo

  define a for loop
    counter 1, condition less than or = to 99; increment 1
      if counter / 2 has a remanider of 0 
        log counter to the console

[C]ode with intent        
*/


function evenNums() {
  for (let i = 1; i <= 99; i += 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNums();