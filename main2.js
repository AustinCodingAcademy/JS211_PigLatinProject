


const pigLatin = (word) => {
  // Your code here
  
  word = word.toLowerCase().trim();
  const vowels = ["a", "e", "i", "o", "u"];
  let newWord = ''

  if (vowels.includes(word[0])) {
    return word + "yay";
  } else {
    let arr = word.match(/[aeiou]/g) || 0;
    let vIndex = word.indexOf(arr[0]);
    newWord = word.slice(vIndex) + word.slice(0, vIndex) + 'ay';
    return newWord
  }
}
pigLatin("")





// Unit Tests
// to use them run the command: npm test main.js







// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
