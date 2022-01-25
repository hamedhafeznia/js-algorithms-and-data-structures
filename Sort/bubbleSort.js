function bubbleSort(array) {
    let noSwaps;
    for(let i = array.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            // console.log(array[j], array[j + 1])
            if(array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1];
                array[j + 1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return array;
}

console.log(bubbleSort([3,2,7,4,1,8]))