export class SearchAlgorithms {
    static binarySearch(array, searchedValue) {
        if (Array.isArray(array) &&
            typeof (searchedValue) === 'number') {

            let low = 0;
            let high = array.length - 1;

            let mid = Math.floor(low + (high - low) / 2);

            if (low > high) {
                return console.log(`Value ${searchedValue} does not exist in array`);
            } else if (array[mid] === searchedValue) {
                return console.log(`Value ${searchedValue} found!`);
            } else if (array[mid] > searchedValue) {
                this.binarySearch(array.slice(low, mid), searchedValue);
            } else if (array[mid] < searchedValue) {
                this.binarySearch(array.slice(mid + 1, high + 1), searchedValue);
            }
        } else {
            return console.log(`Bad input`);
        }
    }
}
