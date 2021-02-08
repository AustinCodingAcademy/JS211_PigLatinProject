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

function myFunction(){

  let input = document.getElementById('word').value; 
  console.log(input);

  let output = pigLatin(input); 
  console.log(output); 

  let outputDisplay = document.getElementById('output').innerHTML = output; 
}

function pigLatin(word){

  //if input is not of string type then return undefined, must be word. 
  
  if(typeof word !== 'string'){
    return 'undefined, must be a word'; 
  } 

  word = word.toLowerCase().trim(); //makes input lowercase and takes away whitespace. 
  const beginningConsonants = []; //create empty array variable to store beginning consonants
  let stringToArray = word.split(''); //split the string into an array of letters 
  let translatedWord = ''; 

  //create for loop to iterate over each letter in the array 
  for(let i = 0; i < stringToArray.length; i++){
    //create variable to store current letter I'm iterating over. 
    let currentLetter = stringToArray[i]; 
    //if that current letter is a vowel then make a copy of the array that contains just the vowel and all letter after it and reassign to stringToArray var. 
    //break for loop. 
    if(currentLetter === 'a' || currentLetter === 'e' || currentLetter === 'i' || currentLetter === 'o' || currentLetter === 'u'){
      stringToArray = stringToArray.slice(i); 
      break;
    }else{
      beginningConsonants.push(currentLetter); //if current letter I'm iterating over is not a vowel then add to constants array. 
    }
  }

  

  // if input word starts with a vowel then take new stringToArr var and add 'yay' to the end. 
  if(word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u'){
    translatedWord += stringToArray.concat(['y','a','y']).join('');
    return translatedWord; 
    //if input word starts with a consonant then take new stringToArr var and add the consonants and then 'ay' to the end. 
  }else{
    translatedWord += stringToArray.concat(beginningConsonants).concat(['a','y']).join(''); 
    return translatedWord; 
  }
  
}


const getPrompt = () => {
  rl.question('word: ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}


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
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
