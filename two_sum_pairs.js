// Returns every pair of numbers from 'numArray'
// thats adds up to the sum
function twoSum(numArr, sum){
    var pairs = [];
    var hashtable = [];
    for(var i = 0; i < numArr.length; i++){
        var currNum = numArr[i];
        var counterPart = sum - currNum;
        if(hashtable.indexOf(counterPart) !== -1){
            pairs.push([currNum, counterPart])
        }

        hashtable.push(currNum);
    }

    return pairs;
}

console.log(twoSum([1,6,4,5,3,2], 7))
