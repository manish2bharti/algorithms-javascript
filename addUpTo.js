function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
         total += i;   
    }
    return total;
}

let t1 = performance.now()
console.log(addUpTo(1000000000))
let t2 = performance.now()
console.log((t2 - t1)/1000)

function addUpTo2(n) {
    return n * (n + 1) / 2;
}
let t3 = performance.now()
console.log(addUpTo2(1000000000))
let t4 = performance.now()
console.log((t4 - t3)/1000)
