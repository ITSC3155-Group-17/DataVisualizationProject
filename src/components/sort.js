

export function bubbleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
}

export function quickSort(array, length = array.length-1, start=0){
    if (array.length < 2) return array // base case

    const pivot = array[array.length - 1]; //pivot value
    const left = [ ];  // left handside array
    const right = [ ]; // right handside array

   while (start < length) {  // comparing and pushing
        if (array[start] < pivot){
          left.push(array[start])
        }
        else {
          right.push(array[start])
        }
       start++ //  incrementing start value
    }
            // calling quick sort recursively
    return [...quickSort(left), pivot, ...quickSort(right)];
}

export function insertionSort(array){
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
    return array;
}

export function selectionSort(array){
    for( let i = 0; i < array.length; i++){
        let minInd = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minInd]){
                minInd = j;
            }
        }
        let temp = array[minInd];
        array[minInd] = array[i];
        array[i] = temp;
    }
    return array;
}