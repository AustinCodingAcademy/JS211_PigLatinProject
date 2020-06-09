


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