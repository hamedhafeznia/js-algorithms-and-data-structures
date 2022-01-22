function factorial(num) {
    if(num === 0 ) return 1;
    return num * factorial(num - 1)
}

function factorial2(num) {
    let total = 1
    for(let i = num; i > 0; i-- ) {
        total *= i
    }
    return total
}


console.log(factorial2(5))
console.log(factorial(5))



//Example
// 5 * 4 * 3 * 2 * 1