// function collectOddValues(arr) {
//     let values = []
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 !== 0 ) {
//             values.push(arr[i])
//         }
//     }
//     return values
// }

function collectOddValues(arr) {
    let values = []

    function hepler(helperInput) {
        if(!helperInput.length) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0) {
            values.push(helperInput[0])
        }

        hepler(helperInput.slice(1))

    }
    hepler(arr)
    return values;
}

console.log(collectOddValues([1, 2, 3,4,5,6,7,8,9,10,11,12]))