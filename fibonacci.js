function fibonacci(position) {
    if(position < 3){
        return 1;
    } else{
        return fibonacci(position - 1) + fibonacci(position - 2);
    }
}

console.log(fibonacci(100));

//-------------------------------------

function fibMemo(index, cache) {
    // index: index of num in fibonacci sequence
    // cache:  an array used as memory

    cache = cache || [];
    if(cache[index]){
        return cache[index];
    }else{
        if(index < 3){
            return 1;
        }else{
            cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache)
        }
    }
    return cache[index];
}

console.log(fibMemo(1000));
