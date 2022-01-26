function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let lowest = i
        for(var j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowest]) {
                lowest = j
            }
        }
        if(lowest !== j) {
            let temp = array[i]
            array[i] = array[lowest]
            array[lowest] = temp
        }
    }
    return array
}

console.log(selectionSort([7,4,8,1,3,9]))