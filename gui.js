// create onload input




//created elements
let textInput = document.createElement("INPUT")
let translateButton = document.createElement("BUTTON")
let translationText = document.createElement("DIV")
// console.log(, button, div)
  
document.body.appendChild(textInput);
document.body.appendChild(translateButton);
document.body.appendChild(translationText)

translateButton.innerText = "Translate"

//storing a value
const storeInput = (word) => {
  textInput = word
}
let word = ""
// console.log(word)


textInput.addEventListener("input", storeInput)

//run pigLatin
const pigLatin = () => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let finalWord = "";
  let cleanWord = word.toLowerCase().trim();
  
  if (vowels.indexOf(cleanWord[0]) > -1) {
    finalWord = cleanWord + "yay";
    return finalWord;
  } else {
    let firstMatch = cleanWord.match(/[aeiou]/g) || 0;
    let vowelIndex = cleanWord.indexOf(firstMatch[0]);
    finalWord = cleanWord.slice(vowelIndex) + cleanWord.slice(0, vowelIndex) + "ay";
    return finalWord;
  }
}

// console.log(textInput)
//invoke with click
translateButton.addEventListener('click', pigLatin)

//display translations
  const displayPigLatin = (finalWord) => {
    let newDiv = document.createElement("P");
    newDiv.innerText = (finalWord);
    document.appendChild(newDiv);
  }
  