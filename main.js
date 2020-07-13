'use strict';

// brings in the assert module for unit testing
//const assert = require('assert');
// brings in the readline module to access the command line
//const readline = require('readline');
// use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = (word) => {

  // Your code here
  // let word = document.getElementById("word").value;
  let vowel1 = 0;
  let found = false;
  word = word.trim().toLowerCase();
  let wordArr = word.split('');

  //console.log(word[0]);

  if(word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
    console.log(word+"yay");
    document.getElementById("pigLat").innerHTML = word+"yay";
    return word +"yay";
  }

  else {
    for(let i = 1; i < wordArr.length; i++){
      
      if((wordArr[i] === 'a' || wordArr[i] === 'e' || wordArr[i] === 'i' || wordArr[i] === 'o' || wordArr[i] === 'u') && (!found)){
        vowel1 = i;
        found = true;
      }
    }

    console.log(word.slice(vowel1) + word.slice(0, vowel1) + "ay");
    document.getElementById("pigLat").innerHTML = word.slice(vowel1) + word.slice(0, vowel1) + "ay";
    return word.substring(vowel1) + word.substring(0, vowel1) + "ay";

  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C

const getPrompt = () => {
  let answer = document.getElementById("word").value;
  pigLatin(answer);
  // rl.question('word ', (answer) => {
  //   console.log( pigLatin(answer) );
    // getPrompt();
  // });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.