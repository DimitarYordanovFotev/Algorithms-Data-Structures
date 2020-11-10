import { ListNode, LinkedList } from '../LinkedLists/LinkedList.js';

export class HashTable {
    constructor() {
        this.hashArray = []
    }

    _hash(key) {
        /* Imagine there is a proper hash function here */
        return key % 5
    }

    insert(keyValuePair) {
        let index = this._hash(keyValuePair.key);
        if (!this.hashArray[index]) {
            let node = new ListNode(keyValuePair.value);
            this.hashArray[index] = new LinkedList(node);
        } else {
            this.hashArray[index].insert(keyValuePair.value);
        }
        console.log(this.hashArray);
    }

    search(data) {
        if (typeof (data) === 'object' &&
            data.key &&
            data.value) {

            let index = this._hash(data.key);
            let tempLinkedList = this.hashArray[index];

            return tempLinkedList.searchInList(data.value);

        } else if (typeof (data) === 'number') {
            let index = this._hash(data);
            let tempLinkedList = this.hashArray[index];
            return tempLinkedList;
        }
    }

    delete(data) {
        if (typeof (data) === 'object' &&
            data.key &&
            data.value) {

            let index = this._hash(data.key);
            let tempLinkedList = this.hashArray[index];

            tempLinkedList.delete(data.value);
        } else if (typeof (data) === 'number') {
            let index = this._hash(data);
            this.hashArray.splice(index, 1);
        }
    }

}