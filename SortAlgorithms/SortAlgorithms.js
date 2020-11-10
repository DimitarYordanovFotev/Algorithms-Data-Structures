export class SortAlgorithms {

    static _swapInArray(array, i, j) {
        if (array &&
            Array.isArray(array)) {
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }

    }

    static bubleSort(array) {
        if (array &&
            Array.isArray(array)) {

            let swapped = false;
            for (let i = 0; i < array.length; i++) {
                swapped = false;
                for (let j = 0; j < array.length; j++) {
                    if (array[j + 1] &&
                        array[j] > array[j + 1]) {
                        SortAlgorithms._swapInArray(array, j, j + 1);
                        swapped = true;
                    }
                }

                if (!swapped) {
                    console.log(array);
                    break;
                }

            }

        }
    }
}