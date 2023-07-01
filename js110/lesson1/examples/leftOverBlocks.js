/*
PEDAC
- Problem: Understand the Problem
- Examples and Test Cases: 
- Data Structure:
- Algorithm:
- Code With Intent:

[P]roblem - Write a program that, given the number for a specific amount of cubes, calulates the number of blocks left over after building the tallest possible valid structure.

  --Provided Information:
    - Building Blocks are Cubes
    - The Structure is Built in Layers  (What is a layer?)
    - A block in an upper layer must be supported by 4 blocks in a lower layer. 
    - A block in a lower layer can support more that 1 block in an upper layer.
    - Cannot leave gaps between blocks;

-Input: Interger for specific amount of cubes
-Output: Number of cubes left over. 

-Expicit Rules: 
  - Blocks are cubes.
  - Cubes are 6 sides. 
  - Each upper cube must be supported by 4 Lower cubes
  - Lower layer cubes can support multiple Upper Layer cubes
  - No gaps allowed

-Implicit Rules:
  -What is valid layer? 
  -3d structure
  -Base must be minumum size to allow for use of blocks for height.
  -Top level will be 1 block.
  -Top level can be alone with no blocks beneath.
  -Must have minimum of 5 block for multi-level.

  -Implicit Rules Gathered from Test Cases:
  -Top Level is always 1 Block
  -Top Level does not need a bottom level
  -Bottom Level is min 4 Blocks
  -Block amounts is a Sq of the level number;

  -Questions
    - What is a valid layer?
    - Does Supporting Block need to be in layer directly under top layer.


[E]xample and Test Cases:
  
  console.log(calculateLeftoverBlocks(0) === 0 ); //  true
  console.log(calculateLeftoverBlocks(1) === 0 ); //  true
  console.log(calculateLeftoverBlocks(2) === 1 ); // true
  console.log(calculateLeftoverBlocks(4) === 3 ); // true
  console.log(calculateLeftoverBlocks(5) === 0 ); // true
  console.log(calculateLeftoverBlocks(6) === 1 ); // true
  console.log(calculateLeftoverBlocks(14) === 0 ); // true 
  

  -According to Test Cases:
    -Top Level is always 1 Block
    -Top Level does not need a bottom level
    -Bottom Level is min 4 Blocks
    -Block amounts is a Sq of the level number;
    
[D]ata Structure:
  - I think this problems data structure would be a nested flat array.
  - Each layer of this problem would be an array.
  - The Original Number and Return Number would Not be in array. 

  Levels:    1      2         3          4        5 
          [ [x], [xxxx], [xxxxxxxxx], [4 x 4], [5 x 5] ]


[A]lgorithm:
  -Build a structure, 1 layer at a time till no longer able to build a valid level. 
  -Count the number of leftover blocks.

  - Loose Rule: The Level requires the level number squared number of blocks to make a valid level.
  
  Start with:
   Count = 1
   CurrentNumberOfBlocks = Starts with argument
    -This will be the level We are on. 
   Blocks = Number of Blocks

  Blocks Less Than or Equal to 4
  1- First see if Number of Blocks is greater than 4; 
  2- If so, Subtract 1 block from number of blocks and add That to an array. 
  3- Remainder of blocks is returned. 
  
  Blocks 5 or Greater:
  2- Start at Top Level: 1
  3- Check the level number.
  4- Check number of blocks is greater than number of the level squared. If so, Add squared Number to an array, Then Subtract That number from number of total Blocks.
  5- Add 1 to count
  6- Repeat till number 4 is no longer true. 
  7- Remainder of blocks will be The left over amount
 
  



[C]ode

*/

function calculateLeftoverBlocks(number) {
  let currentNumberOfBlocks = number;
  let numberOfBlocksPerLevel = [];

  if (currentNumberOfBlocks <= 0) {
    return currentNumberOfBlocks;
  }

  
  if (currentNumberOfBlocks <= 4) {
    numberOfBlocksPerLevel.push(1);
    currentNumberOfBlocks = currentNumberOfBlocks - 1;
  }
  
  if (currentNumberOfBlocks > 4) {

    for (let count = 1; count < number; count += 1) {
      if (currentNumberOfBlocks >= (count * count)) {
        numberOfBlocksPerLevel.push(count * count);
        currentNumberOfBlocks = currentNumberOfBlocks - (count * count)
      }
    }
  }
    console.log(currentNumberOfBlocks, numberOfBlocksPerLevel)
    return currentNumberOfBlocks;
}



// console.log(calculateLeftoverBlocks(0) === 0 ); //  true
// console.log(calculateLeftoverBlocks(1) === 0 ); //  true
// console.log(calculateLeftoverBlocks(2) === 1 ); // true
// console.log(calculateLeftoverBlocks(4) === 3 ); // true
// console.log(calculateLeftoverBlocks(5) === 0 ); // true
// console.log(calculateLeftoverBlocks(6) === 1 ); // true
// console.log(calculateLeftoverBlocks(14) === 0 ); // true 



/*  Book Solution

function calculateLeftOverBlocks(n) {
  let currentLayer = 0;
  let remainingCubes = n;
  let requiredCubes = (currentLayer + 1)**;

  while (remainingCubes >= requiredCubes) {
    
    remainingCubes = remainingCubes - requiredCubes;
    currentLayer += 1;
    requiredCubes = (currentLayer + 1)** 
  }

  return remainingCubes;
}



*/