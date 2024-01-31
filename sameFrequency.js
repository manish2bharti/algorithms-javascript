// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(num1, num2){
    let countObj = {};
    let num1String = num1.toString();
    for (let i = 0; i < num1String.length; i++) {
        let digit = parseInt(num1String[i])
        if(countObj[digit]){
            countObj[digit]++;
        }else{
            countObj[digit] = 1;
        }
    }

    let num2String = num2.toString();
    for (let i = 0; i < num2String.length; i++) {
        let digit = parseInt(num2String[i]);
        if(countObj[digit]){
            countObj[digit]--
        }else{
             return false;   
        }
    }
    return true
}

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) //false
