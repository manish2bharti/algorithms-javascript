// The harmless ransom note is simply a note made of words cut out from a magazine text, Imagine that a kidnapper wants to write a ransom note and he doesn't want it to be handwritten and be traced back to him so he got a magazine and cuts off a whole word and use them to create an untraceable replica of his ransom note.

// Note that the words are case-sensitive and must use only whole words available in the magazine, you cannot use substrings or concatenation to create the words and cannot use repeat the words unless there is an available replica of the word.

// Example :

// ransome_note = "this is a secret note for you from a secret admirer";

// magazine_text= "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note taht it is not as hard as it seems this is my advice for you"

// The harmless ransom note will return false because the word "secret" is used twice and it's found once in the magazine text.

function harmlessRansomNote(noteText, magazineText) {
   var noteArray = noteText.split(' ');
   var magazineArr = magazineText.split(' ');
   var magazineObj = {};
  
   magazineArr.forEach(word => {
      if(!magazineObj[word]){
         magazineObj[word] = 0;
      }

      magazineObj[word]++;
   });

   var noteIsPossible = true;
   noteArray.forEach(word => {
      if(magazineObj[word]){
         magazineObj[word]--;
         if(magazineObj[word] < 0){
            noteIsPossible = false;
         }
      }else{
         noteIsPossible = false;
      }
   });

   console.log(noteIsPossible);
   return noteIsPossible;
}

harmlessRansomNote(
   'this is a secret note for you from a secret admirer', 
   'puerto rico is a place of great wonder and excitement it has many waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
   );
