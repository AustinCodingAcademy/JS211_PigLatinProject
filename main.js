'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// the first function called in the program to get an input from the user
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}


// 1. takes a word (string) as an input
const pigLatin = (word) => {

  let word = document.getElementById("user-input".value)
  
  // 2. make the input lowercase and trim
  inputWord = word.trim().toLowerCase
  
  // 4. i need a variable that holds either consonents or vowels
  // 4.1. There are less vowels then consonants to check 
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // 3. we need a for loop to check:
  for (let i = 0; i < inputWord.length; i++) {
    
    // 3.3. if a word starts with a vowel, add "-ay"
    if (vowels.includes(inputWord[0])) {
      let newWord = inputWord = "yay"
      return newWord
    }
    // 3.1. if word starts with a consonant, remove the first letter, put it at the end and add "-ay"
    else if (!vowels.includes(inputWord[0, 1])) {
      let newWord = inputWord.slice(1) + inputWord.slice(0, 1) + "ay"
      return newWord
    }
    // 3.2. if a word starts with 2 consonants, remove the first two letters, put them at the end, and add "-ay"
    else {
      let newWord = inputWord.slice(1) + inputWord.slice(0, 2) + "ay"
      return newWord
    }
console.log(newWord)
  }
}


  







// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
}







// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.


