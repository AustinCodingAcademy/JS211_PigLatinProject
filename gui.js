// create onload input
let word = ""
window.onload = () => {
let textInput = document.createElement("INPUT")
let translateButton = document.createElement("BUTTON")
let translationText = document.createElement("DIV")
// console.log(, button, div)


textInput.addEventListener("keyup", storeInput)
translateButton.innerText = "Translate"
translateButton.addEventListener('click', pigLatin)
    
document.body.appendChild(textInput);
document.body.appendChild(translateButton);
document.body.appendChild(translationText)
}



const storeInput = (textInput) => {
    word = textInput
}

console.log(word)

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