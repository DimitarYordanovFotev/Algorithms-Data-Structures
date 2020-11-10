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

    static insertionSort(array) {
        if (array &&
            Array.isArray(array)) {
            let sortedEndIndex = -1;
            let swapped = false;

            for (let i = 0; i < array.length; i++) {
                swapped = false;
                for (let j = 0; j < array.length; j++) {
                    if (array[j + 1] &&
                        array[j] > array[j + 1]) {
                        SortAlgorithms._swapInArray(array, j, j + 1);
                        sortedEndIndex++;
                        swapped = true;
                        if (sortedEndIndex > 0) {
                            for (let n = sortedEndIndex; n > 0; n--) {
                                if (array[n - 1] &&
                                    array[n] < array[n - 1]) {
                                    SortAlgorithms._swapInArray(array, n, n - 1);
                                    swapped = true;
                                }
                            }
                        }
                    }
                }

                if (!swapped) {
                    console.log(array);
                    break;
                }
            }

        }
    }

    static selectionSort(array) {
        if (array &&
            Array.isArray(array)) {

            for (let i = 0; i < array.length; i++) {
                let min = i;
                for (let j = 0; j < array.length; j++) {
                    if (array[min] < array[j]) {
                        SortAlgorithms._swapInArray(array, j, min)
                    }
                }
            }

            console.log(array);
        }
    }
}