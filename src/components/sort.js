export function bubbleSort(array){
    const values = [];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (values[j] > values[j + 1]) {
                let tmp = values[j];
                values[j] = values[j + 1];
                values[j + 1] = tmp;
            }
        }
    }
    return values;
}
