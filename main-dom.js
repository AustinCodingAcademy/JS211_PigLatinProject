'use strict';


const pigLatin = () => {  
    //get the value from the html form input
  let word = document.getElementById("user-input").value;

  let inputWord = word.trim().toLowerCase();
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i< inputWord.length; i++) {
    // word starts with a vowel,
    if(vowels.includes(inputWord[0])) {
      let newWord = inputWord + "yay"

      // return the newWord to the DOM, directly inside display-element div
      
      document.getElementById('display-element').innerHTML = newWord

      // return to the console
      // return newWord;
    } else if 
    (!vowels.includes(inputWord[0]) &&
     !vowels.includes(inputWord[1])
     ) {
      // word starts with one consonant
      // remove the first letter, put it at the end, add ay

      let newWord = inputWord.slice(2) + inputWord.slice(0,2) + "ay"
      document.getElementById('display-element').innerHTML = newWord

    //   return newWord

    } else {
      let newWord = inputWord.slice(1) + inputWord.slice(0,1) + "ay"
      document.getElementById('display-element').innerHTML = newWord

    //   return newWord

    }
  }


}

