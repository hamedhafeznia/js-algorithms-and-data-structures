function pivot( array, start = 0, end = array.length - 1 ) {
    const swap = (array, idx1, idx2) => {
        [array[idx1], array[idx2] = array[idx2], array[idx1]]
    }

    let pivot = array[start];
    let swapIdx = start;
    for ( let i = start + 1 ; i <= end; i++ ) {
        if(pivot > array[i] ) {
            swapIdx++
            swap(array, swapIdx, i)
        }
    }
    swap(array, start, swapIdx)
    return swapIdx;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if(left < right) {
        let pivotIdx = pivot(array, left, right);

        //left
        quickSort(array, left, pivotIdx - 1)

        //right
        quickSort(array, pivotIdx + 1, right)
    }
    return array
}



console.log(quickSort([4,6,9,1,2,5]))