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

    static mergeSort(array) {
        if (array &&
            Array.isArray(array) &&
            array.length !== 0) {

            if (array.length === 1) {
                return array;
            }

            let tempArray1 = array.slice(0, array.length / 2);
            let tempArray2 = array.slice((array.length / 2), array.length);

            let array1 = this.mergeSort(tempArray1);
            let array2 = this.mergeSort(tempArray2);

            return SortAlgorithms._merge(array1, array2);

        }
    }

    static _merge(array1, array2) {
        let array3 = [];

        while (array1.length > 0 &&
            array2.length > 0) {

            if (array1[0] > array2[0]) {
                array3.push(array2[0]);
                array2.splice(0, 1);
            } else {
                array3.push(array1[0]);
                array1.splice(0, 1);
            }
        }

        while (array1.length > 0) {
            array3.push(array1[0]);
            array1.splice(0, 1)
        }

        while (array2.length > 0) {
            array3.push(array2[0]);
            array2.splice(0, 1);
        }

        return array3;
    }
}