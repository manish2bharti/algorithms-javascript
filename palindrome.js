function isPalindrome(string) {
  string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  var lettersArr = [];
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });
  
  return lettersArr.join('') === lettersArr.reverse().join('');
}
 
isPalindrome("Madam, I'm Adam");

///////////////////////////////////////////////////////////////////////

function isPalindrome(word){
   var i,wLength = word.length-1,wLengthToCompare = wLength/2;

   for (i = 0; i <= wLengthToCompare ; i++) {
     if (word.charAt(i) != word.charAt(wLength-i)) {
     		console.log(false)
        return false;
     }
   }
   console.log(true)
   return true;
} 

isPalindrome("mam")
