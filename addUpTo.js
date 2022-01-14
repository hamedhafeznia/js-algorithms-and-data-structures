function addUpdate(n) {
    let total = 0;
    for(let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}


// function _addUpdate(n) {
//     return n * (n + 1) / 2
// }

let t1 = performance.now();
addUpdate(3000)
let t2 = performance.now();

console.log( (t1 - t2) / 1000 )