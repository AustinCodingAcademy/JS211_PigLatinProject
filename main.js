'use strict';

  
let newword = prompt()
let vowels ="iuoae";
for(let i =0; i< vowels.length; i ++){
//  will translate the any word starting with a vowel
 let letter = newword[i];
 let answer = vowels.includes(letter);
 if(i == 0 && answer == true){
   console.log(newword + "yay")
 }
//  will translate dog and car
 if( i==0&& answer == false){
 let firsthalf = newword.substring(0,1)
 let secondhalf = newword.substring(1,3)
if(firsthalf == firsthalf && secondhalf == secondhalf){
   console.log((secondhalf + firsthalf  + "ay") )

 }
//  will translate create
 if(i==0&& answer == false){
 let firsthalf = newword.substring(0,2)
 let secondhalf = newword.substring(2,6)
  if(firsthalf == firsthalf && secondhalf == secondhalf){
   console.log(secondhalf + firsthalf  + "ay") 
 }
//  will translate valley,hello and rocket
if(i==0&& answer == false){
 let firsthalf = newword.substring(0,1)
 let secondhalf = newword.substring(1,6)
  if(firsthalf == firsthalf && secondhalf == secondhalf){
   console.log(secondhalf + firsthalf  + "ay") 
 }
}

}
} 
}
