
function charCount(string){
    let output = {};
    if(string){
        for (let i = 0; i < string.length; i++) {     
            const char = string[i].toLowerCase();
            output[char] = output[char] ? output[char] + 1 : 1
        }    
    }
   return output
}

charCount("aaaa") //{a:4}
charCount("Hello hi") //{h:1, e:1, l:2, o:1}
charCount("Your pin number is 1234")
