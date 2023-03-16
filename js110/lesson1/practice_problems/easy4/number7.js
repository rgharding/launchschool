/* 
[P]roblem  Modify the wordSizes funtion to not count non-letters when determing word size. 

input: string
output: object

Rules: 
  - Count and track the character numbers of words in a string
  - Non-alpha characters are not counted in the length of a word

[E]xample and test cases
   
  input/output: Look good

  console.log(wordSizes('Four score and seven.')) // {'3': 1, '4': 1, '5': 2, }
  console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) // {3: 5, 6: 3 }
  console.log(wordSizes("What's up doc?")) // { 2: 1, 3: 1, 5: 1 }
  console.log(wordSizes('')) // {}


[D]ata Structure

  Array: yes
  Object: yes
  Function: yes


[A]lgorithm

  - Define a function declaration 'wordSizes' that has 1 parameter 'string'
  - Declare and intalize a variable wordArray, to the value of string seperated into indvidual words.
  - Declare and intalize variable noPunctaionWord to an empty array
  - Declare and initalize varaible wordCountObj to an empty object
  - Declare and initalize variable regex to a regex of alpha characters only
  - Declare and initalize 'lettersOnlyArray' to an empty array 

  - define a loop that loops thru 'wordArray' 
    
    - add letter only words to 'lettersOnlyArray'
    ** subRoutine to get only the letters of a word that are alpha **
      - define a function lettersOnlyWord that has 1 parameter 'string' 
      - declare and intalize 'regex' to a regular expression that test for alpha charaters only
      - declare and inalize variable 'word' to an empty array
      - define a loop that loop thru the individual characters of 'string' 
        - if the current 'letter' passes the regex add it to word array.
        - if the current 'letter' does not pass the regex ex just skip it.

      return 'word' joined into a single word.
    ** 

  - Define a loop that loops thru 'lettersOnlyArray'
    -if objectCount does NOT have a key with the current words length
      add a key of current word length and give it a value of 1
    - If object Count does have a key with the current words length
      add 1 to the value

    - return wordCountObj

    */  

    function lettersOnly(string) {
      let regex = /[a-z]/ig;
      let wordArray = []

      for (let char of string) {
        if (char.match(regex)) {
          wordArray.push(char)
        }
      };

      let word = wordArray.join('');
      return word;
    }

    

    function wordSizes(string) {
      let wordArray = string.split(' ');
      let lettersOnlyArray = [];
      let wordCountObj = {}

      if (string.length === 0 ) {
        return wordCountObj;
    }

      wordArray.forEach((word) => {
        let newWord = lettersOnly(word);
        lettersOnlyArray.push(newWord);
      }); 

      
      lettersOnlyArray.forEach((word) => {
        let lengthKey = word.length;
        

       if (wordCountObj[lengthKey] === undefined) {
          wordCountObj[lengthKey] = 1;
        } else {
          wordCountObj[lengthKey] = wordCountObj[lengthKey] + 1
        }

      })

      return wordCountObj
  }

     console.log(wordSizes('Four score and seven.')) // {'3': 1, '4': 1, '5': 2, }
     console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')) // {3: 5, 6: 3 }
     console.log(wordSizes("What's up doc?")) // { 2: 1, 3: 1, 5: 1 }
     console.log(wordSizes('')) // {}