
const storeString = (valA) => {
  value = valA
  }
  
  const displayTranslation = (translatedWord) => {
    // document.getElementById("results").innerHTML = translatedWord
    document.createElement('results')
  // let newElement = document.createElement("P");
  // newElement.appendChild(translatedWord);
  }
  
  const pigLatin = () => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let finalWord = "";
  let cleanWord = value.toLowerCase().trim()
  if (vowels.indexOf(cleanWord[0]) > -1) {
  finalWord = cleanWord + "yay";
  return displayTranslation(finalWord)
  } else {
  let firstMatch = cleanWord.match(/[aeiou]/g) || 0;
  let vowelIndex = cleanWord.indexOf(firstMatch[0]);
  finalWord = cleanWord.substring(vowelIndex) + cleanWord.substring(0, vowelIndex) + "ay";
  return displayTranslation(finalWord)
  }
  }