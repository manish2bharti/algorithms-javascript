function countUniqueValues(arr) {
    let numMap = {}
    let count = 0;
    for(let num of arr){
        if(numMap[num]){
            numMap[num] = numMap[num]+1;
        }else{
            numMap[num] = 1;
            count++;
        }
    }

    return count;
}

countUniqueValues([1,1,1,3,3,4,4,5,6])
