function binarySearch(array, value) {
    // start:array[0]
    //last item: array[array.length - 1]
    //middle: array[array.length] / 2

    let start = 0;
    let end = array.length - 1
    let middle = Math.floor((start + end) / 2)

    while (array[middle] !== value) {
        if(value < array[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.floor((start + end) / 2)
    }
    if(array[middle] === value) {
        return middle
    }
    return -1
}

binarySearch([1,3,5,7,33], 5)

//  [  1,  3,  5,  7,  33 ]
//     s       m       e