/*
 [P]roblem: given a string and a word, return the amount of times that word appears in string
 
 I/O:
 string
 number

 Rules:
  - 2 arguments will be provided, a text and a word to search for in text
  - We will assume all words to search and a text will be provieded
  - we will assume all word breaks are spaces


[E]xamples

I?O: look good

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
 

[D]ata Structure
array: yes
object: no
HelpFunc: no


[A]lgoritm

- Define a function declaration 'searchWOrd' that has 2 paramenters 'wordToSearch' 'text'

  - declare and initalize variable 'regex' to the value of a regex of 'wordToSearch'
  - declare and initalize variable 'numberOfTimes' to the value of matching all 'regex' to the 'text' paramenter, this should return an array

  - return numberOfTimes length;

*/


function searchWord(word, text) {
  let regex = new RegExp(word, 'ig');

  let count = text.match(regex);

  return count ? count.length : 0 

}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

let text2 = ''
console.log(searchWord('sed', text2));      // 3