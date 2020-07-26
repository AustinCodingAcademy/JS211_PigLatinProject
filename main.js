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


const pigLatin = (word) => {
  if(firstPosition > 0){
    return word.slice(firstPosition) + word.slice(0, firstPosition) + 'ay';
  } 
  return word + 'yay';

}

function firstVowel(word){
    for (let i=0; i<word.length; i++){
      if('aeiou'.indexOf(word[i]) !== -1){
        return i;
      }
    }
  }
  function translatePigLatin(str){
    let firstPosition = firstVowelPosition(str);
    if(firstPosition > 0){
      return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
    } 
    return str + 'yay';
  } 
  function firstVowelPosition(str){
    for (i=0; i<str.length; i++){
      if('aeiou'.indexOf(str[i]) !== -1){
      return i;
}
}
}
console.log(translatePigLatin('consonants'));   
  
// word = word.toLowerCase().trim();
// if (vowels(word.charAt(0)))
// return word + "yay";

  function vowels(word) {
    if (
  word === 'a' ||
  word === 'e' ||
  word === 'i' ||
  word === 'o' ||
  word === 'u'
    )
    return true;
    else return false; }

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