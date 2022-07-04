const userInput = document.getElementById("user-input")
const output = document.getElementById("display-element")
const translateWord = (event) => {
    event.preventDefault()
    // console.log(userInput.value)
    const newWord = pigLatin(userInput.value)
    output.innerText = newWord
console.log(newWord)
}


const pigLatin = (word) => {

    // Your code here
  let text = word.trim().toLowerCase()
  const vowels = ["a","e","i","o","u"]
  let newWord 
  if (vowels.includes(text[0])){
    newWord = text + "yay"
  }
  else {
      for (let i = 0; i < text.length; i++){
      if (vowels.includes(text[i])) {
        newWord = text.slice(i) + text.slice(0,i) + "ay"
    break
      }
    }
  }
  
  return newWord
  }