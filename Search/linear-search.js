function findArrayItem(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) return i
    }
    return -1
}

console.log(findArrayItem([1, 2, 5, 8], 8))