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

var vowels = ["a","e","i","o","u"];

function igPay (word){
  // setup the array of possible vowels
  // "y" will be added later, but it 
  // starts as a consonant for this algorithm
  var vowels = ["a","e","i","o","u"];  
  var newWord;
  // we're going to store any preceding
  // or trailing punctuation
  var startPunct = "";
  var endPunct = "";
  // these are the possible punctuation
  // marks we'll test for
  var punctReg = /[.,\/#!"$%\^&\*;:{}=\-_`~()]/;
  // remove spaces and set lower case
  word=word.toLowerCase();
  // check if it's a number and return it
  // unaltered if it is
  var matches = word.match(/\d+/g);
  if (matches != null) {
      return word;
  }
  // check for punctuation at the beginning
  // of the word. Ex: "hello"
  let punctMatch = punctReg.exec(word);
  if (punctMatch && punctMatch.index === 0) {
  // store the punctuation to add back l8r
  startPunct=punctMatch[0];
  // remove the punctuation from the word
   word = word.substr(1);
  }
  // check for punctuation at the end of 
  // the word. Ex: "hello"
  punctMatch = punctReg.exec(word);  
  if (punctMatch && punctMatch.index === word.length-1){
   // store the punctuation to add back l8r
   endPunct=word.charAt(punctMatch.index);
   // trim it off the original word
   word = word.substring(0, word.length - 1);
  }  
  // split the word into an array of chars
  var characters = word.split('');
  // check if it starts with a vowel
  // this is why we left out "y", bc if
  // the word starts with "y" we treat
  // it as a consonant
    if (vowels.includes(characters[0])){
      // if it does, just add "yay" 
      // to the end
      characters.push("yay");
      // add back the punctuation
      characters.unshift(startPunct);
      characters.push(endPunct); 
      // combine it back into a word
      newWord= characters.join('');
      // send it back!
      return newWord; 
    }
  // Now we add "y" to the vowels list,
  // because inside the word a "y" is 
  // treated like a vowel
  vowels.push("y");
  // find all the vowels in the word  
  var vowelIndex =[];
    for (var i=0;i<characters.length;i++){
    if(vowels.includes(characters[i])){
    // record where they are found
    vowelIndex.push(i);
    }
    }
  
  // loop through the word and push
  // everything before the vowel to the
  // end of the word
  if (vowelIndex[0]===0) {
      characters.push(characters.shift());
  } else {
  for (i=0;i<vowelIndex[0];i++){
  characters.push(characters.shift());
  }
  }
  // add the "ay" at the end of the ordway
  characters.push("ay");
  // stick whatever beginning punctuation
  // back at the beginning
  characters.unshift(startPunct);
  // tack the ending punctuation back
  // on the end
  characters.push(endPunct);
  // smush all the individual characters
  // back into a single string
  newWord= characters.join('');
  // send it back!
  return newWord;
  }
  
 function translate() {
  // here's our complicated test sentence
  var sentence = document.getElementById("originalText").value;
  
  // parse the sentence into words
  var sentenceParsed = sentence.trim().split(' ');
  // process and display each word in the
  // sentence one at a time
  var outputHTML = "";
  for (var i=0;i<sentenceParsed.length;i++){
  outputHTML+= igPay(sentenceParsed[i].toLowerCase())+" ";
  }
document.getElementById("display-element").innerHTML=outputHTML;
  }


function pigLatin (word){
var newWord;
word=word.trim().toLowerCase();
var characters = word.split('');
  if (vowels.includes(characters[0])){
    characters.push("yay");
    newWord= characters.join('');
    return newWord; 
  }
  vowels.push("y");
var vowelIndex =[];
  for (var i=0;i<characters.length;i++){
  if(vowels.includes(characters[i])){
  vowelIndex.push(i);
  }
  }
  if (vowelIndex[0]===0) {
    characters.push(characters.shift());
  } else {
for (i=0;i<vowelIndex[0];i++){
characters.push(characters.shift());
}
  }
characters.push("ay");
newWord= characters.join('');
return newWord;
}





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