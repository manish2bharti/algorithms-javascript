// The Caesar Cipher technique is one of the earliest and simplest method of encryption technique. 
// It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. 
// For example with a shift of 1, A would be replaced by B, B would become C, and so on.


function ceasarCipher(str, num) {
   num = num % 26;
   var lowerCaseString = str.toLowerCase();
   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   var newString = '';

   for(var i=0; i < lowerCaseString.length; i++){
      var currentLetter = lowerCaseString[i];
      if(currentLetter === ' '){
         newString += currentLetter;
         continue;
      }
      var currentIndex = alphabet.indexOf(currentLetter);
      var newIndex = currentIndex + num;
      if(newIndex > 25){
         newIndex = newIndex - 26;
      }
      if(newIndex < 0){
         newIndex = 26 + newIndex;
      }

      if(str[i] === str[i].toUpperCase()){
         newString += alphabet[newIndex].toUpperCase();
      }else{
         newString += alphabet[newIndex];
      }
   }
   return newString;
}

console.log(ceasarCipher('ManIsh', 5))
