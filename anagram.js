function validAnagram(str1, str2) {
    if(str1.length !== str2.length){
        return false
    }

    let s1Count = {};
    let s2Count = {};
    for(let char of str1){
        s1Count[char] = s1Count[char] ? ++s1Count[char] : 1;
    }
    for(let char of str2){
        s2Count[char] = s2Count[char] ? ++s2Count[char] : 1;
    }
    console.log(s1Count)
    console.log(s2Count)
    for(let key in s1Count){
        if(!s2Count.hasOwnProperty(key)){
            return false;
        }
        console.log()
        if(s1Count[key] !== s2Count[key]){
            return false
        }
    }

    return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
