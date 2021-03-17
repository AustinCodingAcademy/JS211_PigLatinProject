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

let vowels = ['a','e','i','o','u']; 
function pigLatin(word){
  word = word.trim().toLowerCase()
  let vowelPosition = 0
    if (vowels.includes(word[0])){
      return word + "yay"
    } else {
      for (let letter of word) {
        if (vowels.includes(letter)){
          vowelPosition = word.indexOf(letter)
      break;

        }
      }
      return word.slice(vowelPosition) + word.slice(0,vowelPosition) + 'ay'
    }
}// pigLatin()
// const myPigLatin = (artichoke) => {
//   if(firstPosition > 0) {
//     return artichoke.slice(firstPosition) + artichoke.slice(0, firstPosition) + 'yay';
//   } 
//   return artichoke + 'yay';

// }

// function firstVowel(artichoke){
//     for (let i=0; i<artichoke.length; i++){
//       if('aeiou'.indexOf(word[i]) !== -1){
//         return firstVowel;
//       }
//     }
//   }
//   function translatePigLatin(str){
//     let firstPosition = firstVowelPosition(str);
//     if(firstPosition > 0){
//       return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
//     } 
//     return str + 'yay';
//   } 
//   function firstVowelPosition(str){
//     for (let i=0; i <str.length; i++)
//       if('aeiou'.indexOf(str[i]) !== -1){
//       return i;

// }
// }
// console.log(translatePigLatin('consonants'));   
  
// // word = word.toLowerCase().trim();
// // if (vowels(word.charAt(0)))
// // return word + "yay";

//   function indexOfFirstVowel (word) {
//   for (let i = 0; i < word.length; i++) {

  
//   if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" ||  word[i] == "o")   
//     return word[i]; 
//   }
// const pigLatin = () => {
//   let finalWord;
//   let endChar = "";
//   let word = document.querySelector("#word").value
//   word = word.trim().toLowerCase();
//   let index = indexOfFirstVowel(word);
//   if (index == 0) {
//     document.querySelector("#pigLatinWord").innerHTML = word + "yay";
//   } else {
//     endChar = word.slice(0, index) 
//     word = word.substring(index)
//     finalWord = word + endChar + "ay"
//     document.querySelector("#pigLatinWord").innerHTML = finalWord;
//   }
  
// }

// function indexOfFirstVowel(word) {
// for (let i = 0; i < word.length; i++) {
//     if (word[i] == "a" || 
//         word[i] == "e" || 
//         word[i] == "i" || 
//         word[i] == "o" ||   
//         word[i] == "o") {
//           return i;
//     }
//   }
// }


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// You use them run the command: npm test main.js
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
} else {

  getPrompt();

}




// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.