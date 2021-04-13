function reverseWords(str) {
   var wordsArr = str.split(' ');
   var reversedWordsArr = [];

   wordsArr.forEach(word => {
      var reversedWords = '';
      for(var i = word.length - 1; i >= 0; i--){
         reversedWords += word[i];
      }
      reversedWordsArr.push(reversedWords);
   });

   return reversedWordsArr.join(' ');
}


console.log(reverseWords('Reverse words'));
